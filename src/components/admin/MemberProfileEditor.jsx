import { useState, useEffect } from "react";
import { useAuth } from "../../context/AuthContext";
import { db, ref, update, isFirebaseDemoConfig } from "../../firebase";
import { MemberCard } from "../compsss/MemberCard";
import ImageCropModal from "./ImageCropModal";

export const MemberProfileEditor = ({ targetMember, isEditingSelf = true, onSaveSuccess }) => {
  const { user, userMemberData, setUserMemberData, userRole } = useAuth();
  
  

  const currentMember = targetMember || userMemberData;

  const [formData, setFormData] = useState({
    name: currentMember?.name || user?.displayName || "",
    bio: currentMember?.bio || currentMember?.tagline|| "",
    avatar: currentMember?.avatar || "",
    role: currentMember?.role || "",
    roleTitle: currentMember?.roleTitle || "",
    department: currentMember?.department|| "" ,
    socials: {
      linkedin: currentMember?.socials?.linkedin || "",
      github: currentMember?.socials?.github || "",
      instagram: currentMember?.socials?.instagram || "",
      twitter: currentMember?.socials?.twitter || ""
    }
  });

  const [saving, setSaving] = useState(false);
  const [msg, setMsg] = useState(null);

  const [cropperOpen, setCropperOpen] = useState(false);
  const [selectedRawImage, setSelectedRawImage] = useState(null);

  useEffect(() => {
    setFormData({
      name: currentMember?.name || user?.displayName || "",
      bio: currentMember?.bio || currentMember?.tagline|| "",
      avatar: currentMember?.avatar || "",
      role: currentMember?.role || "",
      roleTitle: currentMember?.roleTitle || "",
      department: currentMember?.department|| "" ,
      socials: {
        linkedin: currentMember?.socials?.linkedin || "",
        github: currentMember?.socials?.github || "",
        instagram: currentMember?.socials?.instagram || "",
        twitter: currentMember?.socials?.twitter || ""
      }
    });
  }, [currentMember, user]);

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSocialChange = (platform, value) => {
    setFormData((prev) => ({
      ...prev,
      socials: { ...prev.socials, [platform]: value }
    }));
  };

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    if (file.size > 8 * 1024 * 1024) {
      alert("Image size exceeds 8MB limit. Please choose a smaller file.");
      return;
    }
    const reader = new FileReader();
    reader.onloadend = () => {
      setSelectedRawImage(reader.result);
      setCropperOpen(true);
    };
    reader.readAsDataURL(file);
  };

  const handleCropComplete = (croppedResultUrl) => {
    setFormData((prev) => ({ ...prev, avatar: croppedResultUrl }));
    setMsg({ type: "success", text: "Photo cropped! Click 'Save Profile Changes' to save to Firebase & ImageKit." });
  };

  const handleSave = async (e) => {
    e.preventDefault();
    setSaving(true);
    setMsg(null);

    const regId = (currentMember?.id || (user?.email ? user.email.split("@")[0] : "")).toUpperCase();
    const memberKey = currentMember?.key || regId;

    // ImageKit CDN URL alignment
    let finalAvatarUrl = formData.avatar;
    if (finalAvatarUrl.startsWith("data:") || !finalAvatarUrl.startsWith("http")) {
      finalAvatarUrl = `https://ik.imagekit.io/Rakshitrajvit/Members/${regId}.jpg?v=${Date.now()}`;
    }

    const updatedMember = {
      ...currentMember,
      ...formData,
      id: regId,
      avatar: finalAvatarUrl,
      bio: formData.bio,
      tagline: formData.bio,
      updatedAt: new Date().toISOString()
    };

    try {
      if (isFirebaseDemoConfig()) {
        localStorage.setItem(`mock_member_${currentMember?.email || user?.email}`, JSON.stringify(updatedMember));
        if (isEditingSelf) {
          setUserMemberData(updatedMember);
        }
        setMsg({ type: "success", text: `Profile photo & details updated for ${regId} (Demo Mode)!` });
      } else {
        const memberRef = ref(db, `members/${memberKey}`);
        await update(memberRef, updatedMember);
        if (isEditingSelf) {
          setUserMemberData(updatedMember);
        }
        setMsg({ type: "success", text: `Profile photo & details saved for member ${regId} in Firebase!` });
      }

      if (onSaveSuccess) onSaveSuccess(updatedMember);
    } catch (err) {
      console.error("Failed to update profile:", err);
      setMsg({ type: "error", text: `Update failed: ${err.message}` });
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
      {/* Form Editor Column */}
      <form onSubmit={handleSave} className="lg:col-span-7 flex flex-col gap-6 bg-neutral-900/60 p-6 rounded-2xl border border-neutral-800">
        <div className="border-b border-neutral-800 pb-4 flex justify-between items-center">
          <div>
            <h3 className="text-xl font-bold text-white">
              {isEditingSelf ? "Edit Your Profile" : `Edit Member: ${formData.name}`}
            </h3>
            <p className="text-xs text-gray-400">
              Crop & update your profile photo, tagline, and social media links.
            </p>
          </div>
          <span className="px-2.5 py-1 rounded-full text-xs font-mono font-semibold bg-purple-900/50 text-purple-300 border border-purple-700/50">
            {(userRole || "").toUpperCase()}
          </span>
        </div>

        {msg && (
          <div
            className={`p-3 rounded-xl text-xs font-medium border ${
              msg.type === "success"
                ? "bg-emerald-950/80 text-emerald-300 border-emerald-800"
                : "bg-red-950/80 text-red-300 border-red-800"
            }`}
          >
            {msg.text}
          </div>
        )}

        {/* Member Name & ID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-semibold text-gray-300 mb-1">Full Name</label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => handleInputChange("name", e.target.value)}
              className="w-full px-3 py-2 rounded-xl bg-black/60 border border-neutral-700 text-white text-sm focus:outline-none focus:border-purple-500"
              required
            />
          </div>
          <div>
            <label className="block text-xs font-semibold text-gray-300 mb-1">Role Title</label>
            <input
              type="text"
              value={formData.roleTitle}
              onChange={(e) => handleInputChange("roleTitle", e.target.value)}
              placeholder="e.g. PRESIDENT, DEVELOPER, DESIGNER"
              className="w-full px-3 py-2 rounded-xl bg-black/60 border border-neutral-700 text-white text-sm focus:outline-none focus:border-purple-500"
            />
          </div>
        </div>

        {/* Profile Tagline / Bio */}
        <div>
          <label className="block text-xs font-semibold text-gray-300 mb-1">
            Tagline / Bio (Displayed on About Us Card)
          </label>
          <textarea
            rows="3"
            value={formData.bio}
            onChange={(e) => handleInputChange("bio", e.target.value)}
            placeholder="Write a brief tagline or intro..."
            className="w-full px-3 py-2 rounded-xl bg-black/60 border border-neutral-700 text-white text-sm focus:outline-none focus:border-purple-500"
            maxLength={250}
          />
          <span className="text-[10px] text-gray-500 text-right block mt-1">
            {formData.bio.length}/250 characters
          </span>
        </div>

        {/* Profile Photo with Cropper & ImageKit CDN */}
        <div>
          <label className="block text-xs font-semibold text-gray-300 mb-1">Profile Photo (ImageKit CDN & Cropper)</label>
          <div className="flex flex-col sm:flex-row gap-3 items-center">
            <label className="cursor-pointer px-4 py-2 rounded-xl bg-purple-600 hover:bg-purple-500 text-xs font-bold text-white shadow-md shadow-purple-900/30 transition whitespace-nowrap">
              Upload & Crop
              <input type="file" accept="image/*" onChange={handleFileUpload} className="hidden" />
            </label>
          </div>
        </div>

        {/* Social Links */}
        <div className="space-y-3 pt-2 border-t border-neutral-800">
          <h4 className="text-xs font-bold text-purple-400 uppercase tracking-wider">Social Media Links</h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-[11px] text-gray-400 mb-1">LinkedIn URL</label>
              <input
                type="url"
                value={formData.socials.linkedin}
                onChange={(e) => handleSocialChange("linkedin", e.target.value)}
                placeholder="https://linkedin.com/in/username"
                className="w-full px-3 py-1.5 rounded-lg bg-black/60 border border-neutral-700 text-white text-xs focus:outline-none focus:border-purple-500"
              />
            </div>
            <div>
              <label className="block text-[11px] text-gray-400 mb-1">GitHub URL</label>
              <input
                type="url"
                value={formData.socials.github}
                onChange={(e) => handleSocialChange("github", e.target.value)}
                placeholder="https://github.com/username"
                className="w-full px-3 py-1.5 rounded-lg bg-black/60 border border-neutral-700 text-white text-xs focus:outline-none focus:border-purple-500"
              />
            </div>
            <div>
              <label className="block text-[11px] text-gray-400 mb-1">Instagram URL</label>
              <input
                type="url"
                value={formData.socials.instagram}
                onChange={(e) => handleSocialChange("instagram", e.target.value)}
                placeholder="https://instagram.com/username"
                className="w-full px-3 py-1.5 rounded-lg bg-black/60 border border-neutral-700 text-white text-xs focus:outline-none focus:border-purple-500"
              />
            </div>
            <div>
              <label className="block text-[11px] text-gray-400 mb-1">Twitter / X URL</label>
              <input
                type="url"
                value={formData.socials.twitter}
                onChange={(e) => handleSocialChange("twitter", e.target.value)}
                placeholder="https://x.com/username"
                className="w-full px-3 py-1.5 rounded-lg bg-black/60 border border-neutral-700 text-white text-xs focus:outline-none focus:border-purple-500"
              />
            </div>
          </div>
        </div>

        <button
          type="submit"
          disabled={saving}
          className="w-full py-3 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 font-bold text-white text-sm shadow-lg shadow-purple-900/30 transition-all cursor-pointer disabled:opacity-50"
        >
          {saving ? "Saving Changes..." : "Save Profile Changes"}
        </button>
      </form>

      {/* Live Preview Column */}
      <div className="lg:col-span-5 flex flex-col items-center bg-neutral-900/30 p-6 rounded-2xl border border-neutral-800/80">
        <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">
          Live Card Preview
        </h4>
        <div className="w-full max-w-xs flex justify-center">
          <MemberCard member={{ ...currentMember, ...formData }} />
        </div>
      </div>

      {/* Interactive Image Cropper Modal */}
      <ImageCropModal
        isOpen={cropperOpen}
        onClose={() => setCropperOpen(false)}
        imageSrc={selectedRawImage}
        regId={currentMember?.id || "REG_ID"}
        onCropComplete={handleCropComplete}
      />
    </div>
  );
};

export default MemberProfileEditor;
