import { useState, useRef, useEffect } from "react";
import { createPortal } from "react-dom";

export const ImageCropModal = ({ isOpen, onClose, imageSrc, regId, onCropComplete }) => {
  const [zoom, setZoom] = useState(1);
  const [rotation, setRotation] = useState(0);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const [uploading, setUploading] = useState(false);
  const [imgDimensions, setImgDimensions] = useState({ width: 1, height: 1 });

  const containerRef = useRef(null);
  const imgRef = useRef(null);

  useEffect(() => {
    if (imageSrc) {
      const img = new Image();
      img.crossOrigin = "anonymous";
      img.src = imageSrc;
      img.onload = () => {
        imgRef.current = img;
        setImgDimensions({ width: img.naturalWidth || img.width, height: img.naturalHeight || img.height });
        setZoom(1);
        setRotation(0);
        setOffset({ x: 0, y: 0 });
      };
    }
  }, [imageSrc]);

  if (!isOpen || !imageSrc) return null;

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setDragStart({ x: e.clientX - offset.x, y: e.clientY - offset.y });
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    setOffset({
      x: e.clientX - dragStart.x,
      y: e.clientY - dragStart.y
    });
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  // Generate 400x400 edge-to-edge cropped JPEG canvas
  const getCroppedCanvas = () => {
    const canvas = document.createElement("canvas");
    canvas.width = 400;
    canvas.height = 400;
    const ctx = canvas.getContext("2d");

    const img = imgRef.current;
    if (!img) return null;

    ctx.save();
    ctx.translate(200, 200);
    ctx.rotate((rotation * Math.PI) / 180);
    ctx.scale(zoom, zoom);

    const aspect = imgDimensions.width / imgDimensions.height;
    let drawW, drawH;

    if (aspect >= 1) {
      drawH = 400;
      drawW = 400 * aspect;
    } else {
      drawW = 400;
      drawH = 400 / aspect;
    }

    ctx.drawImage(
      img,
      -drawW / 2 + (offset.x / zoom) * (400 / 240),
      -drawH / 2 + (offset.y / zoom) * (400 / 240),
      drawW,
      drawH
    );
    ctx.restore();

    return canvas;
  };

  const handleConfirmCrop = async () => {
    setUploading(true);
    try {
      const canvas = getCroppedCanvas();
      if (!canvas) throw new Error("Could not render cropped image canvas.");

      const croppedDataUrl = canvas.toDataURL("image/jpeg", 0.95);
      const cleanRegId = (regId || "MEMBER").toUpperCase();
      const cleanFileName = `${cleanRegId}.jpg`;
      const cdnUrl = `https://ik.imagekit.io/Rakshitrajvit/Members/${cleanFileName}?v=${Date.now()}`;

      const ikPrivateKey = import.meta.env.VITE_IMAGEKIT_PRIVATE_KEY;
      const ikPublicKey = import.meta.env.VITE_IMAGEKIT_PUBLIC_KEY;
      const ikAuthEndpoint = import.meta.env.VITE_IMAGEKIT_AUTH_ENDPOINT;

      let finalUrl = croppedDataUrl;

      // 1. Direct ImageKit Upload via Private Key (Basic Auth)
      if (ikPrivateKey) {
        try {
          const formData = new FormData();
          formData.append("file", croppedDataUrl);
          formData.append("fileName", cleanFileName);
          formData.append("useUniqueFileName", "false");
          formData.append("folder", "/Members");
          formData.append("overwriteFile", "true");

          const res = await fetch("https://upload.imagekit.io/api/v1/files/upload", {
            method: "POST",
            headers: {
              Authorization: `Basic ${btoa(ikPrivateKey + ":")}`
            },
            body: formData
          });

          if (res.ok) {
            const ikData = await res.json();
            finalUrl = ikData.url || cdnUrl;
            console.log("Uploaded directly to ImageKit CDN:", finalUrl);
          } else {
            const errText = await res.text();
            console.warn("ImageKit API error:", errText);
            finalUrl = croppedDataUrl;
          }
        } catch (err) {
          console.warn("ImageKit API upload failed:", err);
          finalUrl = croppedDataUrl;
        }
      } 
      // 2. ImageKit Upload via Serverless Auth Endpoint
      else if (ikPublicKey && ikAuthEndpoint) {
        try {
          const authRes = await fetch(ikAuthEndpoint);
          const authData = await authRes.json();

          const formData = new FormData();
          formData.append("file", croppedDataUrl);
          formData.append("fileName", cleanFileName);
          formData.append("useUniqueFileName", "false");
          formData.append("folder", "/Members");
          formData.append("publicKey", ikPublicKey);
          formData.append("signature", authData.signature);
          formData.append("expire", authData.expire);
          formData.append("token", authData.token);

          const uploadRes = await fetch("https://upload.imagekit.io/api/v1/files/upload", {
            method: "POST",
            body: formData
          });

          if (uploadRes.ok) {
            const uploadJson = await uploadRes.json();
            finalUrl = uploadJson.url || cdnUrl;
          }
        } catch (ikErr) {
          console.warn("ImageKit Auth Upload failed:", ikErr);
          finalUrl = croppedDataUrl;
        }
      }

      onCropComplete(finalUrl);
      onClose();
    } catch (err) {
      alert(`Crop failed: ${err.message}`);
    } finally {
      setUploading(false);
    }
  };

  const aspect = imgDimensions.width / imgDimensions.height;
  const viewportSize = 240;
  let previewW, previewH;

  if (aspect >= 1) {
    previewH = viewportSize;
    previewW = viewportSize * aspect;
  } else {
    previewW = viewportSize;
    previewH = viewportSize / aspect;
  }

  return createPortal(
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 overflow-y-auto bg-black/90 backdrop-blur-md select-none">
      <div className="bg-neutral-900 border border-neutral-800 rounded-3xl w-full max-w-md p-6 shadow-2xl flex flex-col gap-5 my-auto max-h-[95vh] overflow-y-auto">
        <div className="flex justify-between items-center border-b border-neutral-800 pb-3">
          <div>
            <h3 className="text-base font-bold text-white">Crop & Upload to ImageKit</h3>
            <p className="text-[11px] text-gray-400">
              Uploads to <code className="text-purple-300 font-mono">/Members/{(regId || "ID").toUpperCase()}.jpg</code>
            </p>
          </div>
          <button onClick={onClose} className="text-gray-400 hover:text-white font-bold text-sm">
            ✕
          </button>
        </div>

        {/* 240x240 Circular Viewport Mask */}
        <div
          ref={containerRef}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          className="relative w-60 h-60 mx-auto rounded-full border-4 border-purple-500 shadow-2xl bg-black overflow-hidden cursor-grab active:cursor-grabbing flex items-center justify-center"
        >
          <div
            style={{
              width: `${previewW}px`,
              height: `${previewH}px`,
              transform: `translate(${offset.x}px, ${offset.y}px) scale(${zoom}) rotate(${rotation}deg)`,
              transition: isDragging ? "none" : "transform 0.08s ease-out"
            }}
            className="relative flex items-center justify-center pointer-events-none"
          >
            <img
              src={imageSrc}
              alt="Photo Crop Preview"
              className="w-full h-full object-cover pointer-events-none"
              draggable={false}
            />
          </div>

          <div className="absolute inset-0 rounded-full border-2 border-white/40 pointer-events-none" />
        </div>

        {/* Zoom & Scale Controls */}
        <div className="space-y-4 text-xs">
          <div>
            <div className="flex justify-between text-gray-300 font-semibold mb-1">
              <span>Zoom & Frame Face</span>
              <span>{(zoom * 100).toFixed(0)}%</span>
            </div>
            <input
              type="range"
              min="1"
              max="2.5"
              step="0.05"
              value={zoom}
              onChange={(e) => setZoom(parseFloat(e.target.value))}
              className="w-full accent-purple-600 cursor-pointer"
            />
          </div>

          <div className="flex items-center justify-between">
            <button
              onClick={() => setRotation((prev) => (prev + 90) % 360)}
              className="px-3 py-1.5 rounded-xl bg-neutral-800 hover:bg-neutral-700 text-gray-200 font-semibold border border-neutral-700 transition"
            >
              🔄 Rotate 90°
            </button>

            <button
              onClick={() => {
                setZoom(1);
                setOffset({ x: 0, y: 0 });
                setRotation(0);
              }}
              className="px-3 py-1.5 rounded-xl bg-neutral-800 hover:bg-neutral-700 text-gray-200 font-semibold border border-neutral-700 transition"
            >
              Reset Position
            </button>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center justify-end gap-3 pt-2 border-t border-neutral-800">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl bg-neutral-800 hover:bg-neutral-700 text-gray-300 font-bold text-xs"
          >
            Cancel
          </button>
          <button
            onClick={handleConfirmCrop}
            disabled={uploading}
            className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 font-bold text-white text-xs shadow-lg shadow-purple-950/40 cursor-pointer disabled:opacity-50"
          >
            {uploading ? "Uploading to ImageKit..." : "Crop & Upload to ImageKit"}
          </button>
        </div>
      </div>
    </div>,
    document.body
  );
};

export default ImageCropModal;
