import { useEffect, useState } from "react";
import { db, ref, onValue, remove, update, isFirebaseDemoConfig } from "../../firebase";

export const InquiriesManagement = () => {
  const [inquiries, setInquiries] = useState([]);

  useEffect(() => {
    if (isFirebaseDemoConfig()) {
      const saved = JSON.parse(localStorage.getItem("matrix_inquiries") || "[]");
      setInquiries(saved);
      return undefined;
    }

    const unsubscribe = onValue(ref(db, "inquiries"), (snapshot) => {
      if (!snapshot.exists()) {
        setInquiries([]);
        return;
      }
      const value = snapshot.val();
      const rows = Object.entries(value)
        .map(([id, inquiry]) => ({ id, ...inquiry }))
        .sort((a, b) => new Date(b.createdAt || 0) - new Date(a.createdAt || 0));
      setInquiries(rows);
    }, () => {
      const saved = JSON.parse(localStorage.getItem("matrix_inquiries") || "[]");
      setInquiries(saved);
    });

    return () => unsubscribe();
  }, []);

  const markRead = async (id, read) => {
    if (isFirebaseDemoConfig()) {
      const next = inquiries.map((item) => item.id === id ? { ...item, read } : item);
      localStorage.setItem("matrix_inquiries", JSON.stringify(next));
      setInquiries(next);
      return;
    }
    await update(ref(db, `inquiries/${id}`), { read });
  };

  const deleteInquiry = async (id) => {
    if (!window.confirm("Delete this inquiry?")) return;
    if (isFirebaseDemoConfig()) {
      const next = inquiries.filter((item) => item.id !== id);
      localStorage.setItem("matrix_inquiries", JSON.stringify(next));
      setInquiries(next);
      return;
    }
    await remove(ref(db, `inquiries/${id}`));
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between gap-4">
        <div>
          <h3 className="text-lg font-bold text-white">Contact Inquiries</h3>
          <p className="text-xs text-gray-400">Messages submitted through the Contact Us page.</p>
        </div>
        <span className="px-3 py-1 rounded-full bg-purple-600/20 border border-purple-500/30 text-purple-300 text-xs font-bold">
          {inquiries.length}
        </span>
      </div>

      {inquiries.length === 0 ? (
        <div className="p-10 text-center rounded-2xl border border-neutral-800 bg-neutral-900/40 text-gray-500 text-sm">
          No inquiries have been submitted yet.
        </div>
      ) : (
        <div className="space-y-3">
          {inquiries.map((inquiry) => (
            <article
              key={inquiry.id}
              className={`p-5 rounded-2xl border ${inquiry.read ? "border-neutral-800 bg-neutral-900/40" : "border-purple-500/40 bg-purple-950/20"}`}
            >
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3">
                <div className="min-w-0">
                  <div className="flex flex-wrap items-center gap-2">
                    <h4 className="font-bold text-white">{inquiry.name}</h4>
                    {!inquiry.read && <span className="text-[10px] px-2 py-0.5 rounded-full bg-purple-600 text-white font-bold">NEW</span>}
                  </div>
                  <p className="text-xs text-purple-300 mt-1">{inquiry.email}</p>
                  {inquiry.createdAt && (
                    <p className="text-[10px] text-gray-500 mt-1">
                      {new Date(inquiry.createdAt).toLocaleString()}
                    </p>
                  )}
                </div>

                <div className="flex items-center gap-2 shrink-0">
                  <button
                    onClick={() => markRead(inquiry.id, !inquiry.read)}
                    className="px-3 py-1.5 rounded-lg bg-neutral-800 hover:bg-neutral-700 text-xs text-gray-200"
                  >
                    {inquiry.read ? "Mark Unread" : "Mark Read"}
                  </button>
                  <button
                    onClick={() => deleteInquiry(inquiry.id)}
                    className="px-3 py-1.5 rounded-lg bg-red-950/60 hover:bg-red-900/60 border border-red-900/50 text-xs text-red-300"
                  >
                    Delete
                  </button>
                </div>
              </div>

              <div className="mt-4 pt-4 border-t border-neutral-800">
                <p className="text-xs font-bold text-gray-300 mb-1">Subject: {inquiry.subject}</p>
                <p className="text-sm text-gray-300 whitespace-pre-wrap leading-relaxed">{inquiry.message}</p>
              </div>
            </article>
          ))}
        </div>
      )}
    </div>
  );
};

export default InquiriesManagement;
