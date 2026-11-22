import { useState, useEffect } from "react";
import { useAuth } from "../../context/AuthContext";
import { db, ref, onValue, set, remove, push, isFirebaseDemoConfig } from "../../firebase";

const initialArchiveEvents = [
  {
    id: "evt_1",
    image: "/event-media-morphosis.png",
    title: "Media Morphosis 2025",
    date: "July 27, 2025",
    category: "archive",
    attendees: "200 attendees",
    description:
      "Matrix Club in partnership with Unstop hosted Media Morphosis at VIT Bhopal. The event explored how Data Science and Social Media Analytics shape branding and business strategies."
  },
  {
    id: "evt_2",
    image: "/event-airm.png",
    title: "AIRM 2025",
    date: "December 30, 2025",
    category: "archive",
    attendees: "150 attendees",
    description:
      "Matrix Club, the Multimedia Club at VIT Bhopal, hosted AIRM 2025—an online event for college students focused on Artificial Intelligence, Robotics, and Multimedia."
  },
  {
    id: "evt_3",
    image: "/event-matrixmatch.png",
    title: "MatrixMatch 2026",
    date: "February 20, 2026",
    category: "archive",
    attendees: "150 attendees",
    description:
      "Matrix Club hosted MatchMatrix – Tech Compatibility & Collaboration Test, an interactive technical event that combined technology, logical thinking, and collaborative assessment."
  }
];

export const EventManagement = () => {
  const { userRole, isDemoMode } = useAuth();
  const [events, setEvents] = useState([]);
  const [activeCategory, setActiveCategory] = useState("all");
  const [showFormModal, setShowFormModal] = useState(false);
  const [editingEvent, setEditingEvent] = useState(null);
  const [imageUploading, setImageUploading] = useState(false);

  const [formData, setFormData] = useState({
    title: "",
    date: "",
    category: "upcoming",
    attendees: "100+ attendees",
    image: "/event-media-morphosis.png",
    description: ""
  });

  // Fetch events live from RTDB
  useEffect(() => {
    if (isDemoMode) {
      const savedMockEvents = localStorage.getItem("mock_events_list");
      if (savedMockEvents) {
        setEvents(JSON.parse(savedMockEvents));
      } else {
        setEvents(initialArchiveEvents);
      }
      return;
    }

    const eventsRef = ref(db, "events");
    const unsubscribe = onValue(eventsRef, (snapshot) => {
      if (snapshot.exists()) {
        const val = snapshot.val();
        const list = Object.keys(val).map((k) => ({ ...val[k], key: k }));
        setEvents(list);
      } else {
        setEvents([]);
      }
    });

    return () => unsubscribe();
  }, [isDemoMode]);

  const saveDemoEvents = (list) => {
    localStorage.setItem("mock_events_list", JSON.stringify(list));
    setEvents(list);
  };

  const handleOpenAdd = () => {
    setEditingEvent(null);
    setFormData({
      title: "",
      date: new Date().toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" }),
      category: "upcoming",
      attendees: "100+ attendees",
      image: "/event-media-morphosis.png",
      description: ""
    });
    setShowFormModal(true);
  };

  const handleOpenEdit = (evt) => {
    setEditingEvent(evt);
    setFormData({
      title: evt.title || "",
      date: evt.date || "",
      category: evt.category || "upcoming",
      attendees: evt.attendees || "",
      image: evt.image || "/event-media-morphosis.png",
      description: evt.description || ""
    });
    setShowFormModal(true);
  };

  const handleEventImageUpload = async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (!file.type.startsWith("image/")) {
      alert("Please select an image file.");
      e.target.value = "";
      return;
    }

    if (file.size > 10 * 1024 * 1024) {
      alert("Event image must be 10MB or smaller.");
      e.target.value = "";
      return;
    }

    setImageUploading(true);
    try {
      const baseName = (formData.title || editingEvent?.title || `event-${Date.now()}`)
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-|-$/g, "") || `event-${Date.now()}`;
      const extension = file.name.split(".").pop()?.toLowerCase() || "jpg";
      const fileName = `${baseName}.${extension}`;

      const reader = new FileReader();
      const fileData = await new Promise((resolve, reject) => {
        reader.onload = () => resolve(reader.result);
        reader.onerror = reject;
        reader.readAsDataURL(file);
      });

      let uploadedUrl = "";
      const privateKey = import.meta.env.VITE_IMAGEKIT_PRIVATE_KEY;
      const publicKey = import.meta.env.VITE_IMAGEKIT_PUBLIC_KEY;
      const authEndpoint = import.meta.env.VITE_IMAGEKIT_AUTH_ENDPOINT;

      if (privateKey) {
        const uploadData = new FormData();
        uploadData.append("file", fileData);
        uploadData.append("fileName", fileName);
        uploadData.append("useUniqueFileName", "false");
        uploadData.append("folder", "/Events");
        uploadData.append("overwriteFile", "true");

        const response = await fetch("https://upload.imagekit.io/api/v1/files/upload", {
          method: "POST",
          headers: { Authorization: `Basic ${btoa(privateKey + ":")}` },
          body: uploadData
        });

        if (!response.ok) {
          throw new Error((await response.text()) || "ImageKit upload failed.");
        }
        const result = await response.json();
        uploadedUrl = result.url;
      } else if (publicKey && authEndpoint) {
        const authResponse = await fetch(authEndpoint);
        if (!authResponse.ok) throw new Error("Could not get ImageKit upload authorization.");
        const auth = await authResponse.json();

        const uploadData = new FormData();
        uploadData.append("file", fileData);
        uploadData.append("fileName", fileName);
        uploadData.append("useUniqueFileName", "false");
        uploadData.append("folder", "/Events");
        uploadData.append("publicKey", publicKey);
        uploadData.append("signature", auth.signature);
        uploadData.append("expire", auth.expire);
        uploadData.append("token", auth.token);

        const response = await fetch("https://upload.imagekit.io/api/v1/files/upload", {
          method: "POST",
          body: uploadData
        });
        if (!response.ok) throw new Error("ImageKit upload failed.");
        const result = await response.json();
        uploadedUrl = result.url;
      } else {
        throw new Error("Configure VITE_IMAGEKIT_PRIVATE_KEY or ImageKit public/auth variables.");
      }

      setFormData((current) => ({
        ...current,
        image: uploadedUrl || `https://ik.imagekit.io/Rakshitrajvit/Events/${fileName}`
      }));
    } catch (err) {
      alert(`Image upload failed: ${err.message}`);
    } finally {
      setImageUploading(false);
      e.target.value = "";
    }
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    if (!formData.title) {
      alert("Event title is required!");
      return;
    }

    try {
      if (isDemoMode) {
        if (editingEvent) {
          const updated = events.map((e) =>
            e.id === editingEvent.id ? { ...e, ...formData } : e
          );
          saveDemoEvents(updated);
        } else {
          const newEvt = {
            ...formData,
            id: "evt_" + Date.now()
          };
          saveDemoEvents([newEvt, ...events]);
        }
      } else {
        if (editingEvent) {
          const eventKey = editingEvent.key || editingEvent.id;
          await set(ref(db, `events/${eventKey}`), {
            ...editingEvent,
            ...formData,
            updatedAt: new Date().toISOString()
          });
        } else {
          const newRef = push(ref(db, "events"));
          await set(newRef, {
            ...formData,
            id: newRef.key,
            createdAt: new Date().toISOString()
          });
        }
      }

      setShowFormModal(false);
      setEditingEvent(null);
    } catch (err) {
      alert(`Failed to save event: ${err.message}`);
    }
  };

  const handleDeleteEvent = async (evt) => {
    if (userRole !== "admin") {
      alert("Only Admins can delete events!");
      return;
    }
    if (!confirm(`Are you sure you want to delete event "${evt.title}"?`)) {
      return;
    }

    try {
      if (isDemoMode) {
        const updated = events.filter((e) => e.id !== evt.id);
        saveDemoEvents(updated);
      } else {
        await remove(ref(db, `events/${evt.key || evt.id}`));
      }
    } catch (err) {
      alert(`Failed to delete event: ${err.message}`);
    }
  };

  const filteredEvents = activeCategory === "all"
    ? events
    : events.filter((e) => e.category === activeCategory);

  return (
    <div className="flex flex-col gap-6">
      {/* Action Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-neutral-900/60 p-4 rounded-2xl border border-neutral-800">
        <div className="flex items-center gap-2">
          {["all", "upcoming", "ongoing", "archive"].map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-3 py-1.5 rounded-xl text-xs font-semibold capitalize transition ${
                activeCategory === cat
                  ? "bg-purple-600 text-white shadow-md shadow-purple-900/30"
                  : "bg-black/60 text-gray-400 hover:text-white border border-neutral-800"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {(userRole === "admin" || userRole === "team_member") && (
          <button
            onClick={handleOpenAdd}
            className="px-4 py-2 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-xs sm:text-sm font-bold text-white shadow-md shadow-purple-900/30 transition cursor-pointer"
          >
            + Add New Event
          </button>
        )}
      </div>

      {/* Events Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredEvents.length > 0 ? (
          filteredEvents.map((evt) => (
            <div
              key={evt.id || evt.key}
              className="bg-neutral-900/60 border border-neutral-800 rounded-2xl overflow-hidden flex flex-col justify-between hover:border-neutral-700 transition"
            >
              <div>
                <div className="h-40 relative bg-black">
                  <img
                    src={evt.image}
                    alt={evt.title}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.src = "/event-media-morphosis.png";
                    }}
                  />
                  <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-black/80 backdrop-blur-md text-purple-300 border border-purple-500/30">
                    {evt.category || "Upcoming"}
                  </span>
                </div>

                <div className="p-4 flex flex-col gap-2">
                  <div className="flex justify-between items-center text-xs text-gray-400 font-mono">
                    <span>{evt.date}</span>
                    <span>{evt.attendees}</span>
                  </div>
                  <h3 className="font-bold text-white text-lg leading-tight">{evt.title}</h3>
                  <p className="text-xs text-gray-400 line-clamp-3">{evt.description}</p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="p-4 border-t border-neutral-800/80 flex justify-end gap-2 bg-neutral-950/40">
                {(userRole === "admin" || userRole === "team_member") && (
                  <button
                    onClick={() => handleOpenEdit(evt)}
                    className="px-3 py-1 rounded-lg bg-neutral-800 hover:bg-neutral-700 text-xs text-purple-300 transition"
                  >
                    Edit
                  </button>
                )}
                {userRole === "admin" && (
                  <button
                    onClick={() => handleDeleteEvent(evt)}
                    className="px-3 py-1 rounded-lg bg-red-950/60 hover:bg-red-900 text-xs text-red-300 border border-red-800/50 transition"
                  >
                    Delete
                  </button>
                )}
              </div>
            </div>
          ))
        ) : (
          <div className="col-span-full py-12 text-center text-gray-500 font-mono">
            No events found in category "{activeCategory}".
          </div>
        )}
      </div>

      {/* Event Add/Edit Modal */}
      {showFormModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
          <div className="bg-neutral-900 border border-neutral-800 rounded-2xl w-full max-w-lg p-6 shadow-2xl relative">
            <div className="flex justify-between items-center border-b border-neutral-800 pb-3 mb-4">
              <h3 className="text-lg font-bold text-white">
                {editingEvent ? "Edit Event" : "Create New Event"}
              </h3>
              <button
                onClick={() => setShowFormModal(false)}
                className="text-gray-400 hover:text-white"
              >
                ✕
              </button>
            </div>

            <form onSubmit={handleFormSubmit} className="space-y-4 text-xs">
              <div>
                <label className="block text-gray-300 mb-1 font-semibold">Event Title *</label>
                <input
                  type="text"
                  placeholder="e.g. Media Morphosis 2026"
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  className="w-full px-3 py-2 rounded-xl bg-black/60 border border-neutral-700 text-white focus:outline-none focus:border-purple-500"
                  required
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-gray-300 mb-1 font-semibold">Category</label>
                  <select
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl bg-black/60 border border-neutral-700 text-white focus:outline-none focus:border-purple-500"
                  >
                    <option value="upcoming">Upcoming Event</option>
                    <option value="ongoing">Ongoing Contest</option>
                    <option value="archive">Event Archive</option>
                  </select>
                </div>

                <div>
                  <label className="block text-gray-300 mb-1 font-semibold">Date</label>
                  <input
                    type="text"
                    placeholder="e.g. October 15, 2026"
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl bg-black/60 border border-neutral-700 text-white focus:outline-none focus:border-purple-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-gray-300 mb-1 font-semibold">Event Picture</label>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleEventImageUpload}
                    disabled={imageUploading}
                    className="w-full text-xs text-gray-300 file:mr-3 file:px-3 file:py-2 file:rounded-lg file:border-0 file:bg-purple-600 file:text-white file:font-bold hover:file:bg-purple-500 disabled:opacity-50"
                  />
                  <p className="text-[10px] text-gray-500 mt-1">
                    {imageUploading ? "Uploading to ImageKit /Events..." : "Uploads to ImageKit folder: Events"}
                  </p>
                  {formData.image && (
                    <img
                      src={formData.image}
                      alt="Event preview"
                      className="mt-2 w-full h-28 object-cover rounded-xl border border-neutral-700"
                    />
                  )}
                </div>

                <div>
                  <label className="block text-gray-300 mb-1 font-semibold">Attendees Count</label>
                  <input
                    type="text"
                    placeholder="e.g. 200 attendees"
                    value={formData.attendees}
                    onChange={(e) => setFormData({ ...formData, attendees: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl bg-black/60 border border-neutral-700 text-white focus:outline-none focus:border-purple-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-gray-300 mb-1 font-semibold">Description</label>
                <textarea
                  rows="4"
                  placeholder="Detailed description of the event..."
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  className="w-full px-3 py-2 rounded-xl bg-black/60 border border-neutral-700 text-white focus:outline-none focus:border-purple-500"
                />
              </div>

              <div className="pt-3 flex justify-end gap-3 border-t border-neutral-800">
                <button
                  type="button"
                  onClick={() => setShowFormModal(false)}
                  className="px-4 py-2 rounded-xl bg-neutral-800 hover:bg-neutral-700 text-gray-300 font-semibold"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={imageUploading}
                  className="px-4 py-2 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-bold shadow-md shadow-purple-900/30 disabled:opacity-50"
                >
                  Save Event
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default EventManagement;
