import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { useAuth } from "../../context/AuthContext";
import { db, ref, onValue, set, remove, isFirebaseDemoConfig } from "../../firebase";
import MemberProfileEditor from "./MemberProfileEditor";

const DEPARTMENTS = [
  { id: "all", label: "All Departments" },
  { id: "leadership", label: "Leadership" },
  { id: "technical", label: "Technical" },
  { id: "designer", label: "Design" },
  { id: "social_media", label: "Social Media" },
  { id: "event_management", label: "Event Management" },
  { id: "pr_outreach", label: "PR & Outreach" },
  { id: "finance", label: "Finance" },
  { id: "content_writer", label: "Content Writer" },
  { id: "researcher", label: "Researcher" },
  { id: "project_manager", label: "Project Manager" },
];

export const MemberManagement = () => {
  const { userRole, updateUserAppRole, isDemoMode } = useAuth();
  const [members, setMembers] = useState([]);
  const [search, setSearch] = useState("");
  const [selectedDept, setSelectedDept] = useState("all");
  const [selectedMemberToEdit, setSelectedMemberToEdit] = useState(null);
  const [showAddModal, setShowAddModal] = useState(false);

  const [newMember, setNewMember] = useState({
    id: "",
    name: "",
    email: "",
    role: "technical",
    roleTitle: "MEMBER",
    appRole: "member",
    department: "Technical",
    bio: "Proud member of Matrix Club.",
    avatar: "/figma/avatar.png",
    socials: { linkedin: "", github: "", instagram: "" }
  });

  useEffect(() => {
    if (isDemoMode) {
      const savedMockMembers = localStorage.getItem("mock_members_list");
      if (savedMockMembers) {
        setMembers(JSON.parse(savedMockMembers));
      }
      return;
    }

    const membersRef = ref(db, "members");
    const unsubscribe = onValue(membersRef, (snapshot) => {
      if (!snapshot.exists()) {
        setMembers([]);
        return;
      }

      const val = snapshot.val();
      const list = Array.isArray(val)
        ? val.filter(Boolean).map((member, index) => ({ ...member, id: member.id || String(index), key: String(index) }))
        : Object.keys(val).map((key) => ({ ...val[key], id: val[key].id || key, key }));
      setMembers(list);
    }, (error) => {
      console.warn("Firebase members read error:", error);
      setMembers([]);
    });

    return () => unsubscribe();
  }, [isDemoMode]);

  const saveMembersListDemo = (list) => {
    localStorage.setItem("mock_members_list", JSON.stringify(list));
    setMembers(list);
  };

  const filteredMembers = members.filter((m) => {
    const matchesSearch =
      (m.name || "").toLowerCase().includes(search.toLowerCase()) ||
      (m.id || "").toLowerCase().includes(search.toLowerCase()) ||
      (m.email || "").toLowerCase().includes(search.toLowerCase());
    const matchesDept = selectedDept === "all" || m.role === selectedDept;
    return matchesSearch && matchesDept;
  });

  const handleRoleChange = async (member, newAppRole) => {
    if (userRole !== "admin") {
      alert("Only Admins can change access roles!");
      return;
    }
    try {
      if (isDemoMode) {
        const updated = members.map((m) =>
          m.id === member.id ? { ...m, appRole: newAppRole } : m
        );
        saveMembersListDemo(updated);
      } else {
        await updateUserAppRole(member.key || member.id, member.email, newAppRole);
      }
    } catch (err) {
      alert(`Failed to update role: ${err.message}`);
    }
  };

  const handleDeleteMember = async (member) => {
    if (userRole !== "admin") {
      alert("Only Admins can remove members!");
      return;
    }
    if (!confirm(`Are you sure you want to remove ${member.name} (${member.id})?`)) {
      return;
    }

    try {
      if (isDemoMode) {
        const updated = members.filter((m) => m.id !== member.id);
        saveMembersListDemo(updated);
      } else {
        await remove(ref(db, `members/${member.key || member.id}`));
      }
      if (selectedMemberToEdit?.id === member.id) {
        setSelectedMemberToEdit(null);
      }
    } catch (err) {
      alert(`Failed to delete member: ${err.message}`);
    }
  };

  const handleAddMemberSubmit = async (e) => {
    e.preventDefault();
    if (!newMember.id || !newMember.name) {
      alert("Registration ID and Name are required!");
      return;
    }

    const memberKey = newMember.id.toUpperCase().trim();
    const formattedMember = {
      ...newMember,
      id: memberKey,
      email: newMember.email || `${memberKey.toLowerCase()}@vitbhopal.ac.in`,
      avatar: `https://ik.imagekit.io/Rakshitrajvit/Members/${memberKey}.jpg`,
      createdAt: new Date().toISOString()
    };

    try {
      if (isDemoMode) {
        const updated = [formattedMember, ...members];
        saveMembersListDemo(updated);
      } else {
        await set(ref(db, `members/${memberKey}`), formattedMember);
        await set(ref(db, `roles/${memberKey}`), newMember.appRole);
      }

      setShowAddModal(false);
      setNewMember({
        id: "",
        name: "",
        email: "",
        role: "technical",
        roleTitle: "MEMBER",
        appRole: "member",
        department: "Technical",
        bio: "Proud member of Matrix Club.",
        avatar: "/figma/avatar.png",
        socials: { linkedin: "", github: "", instagram: "" }
      });
    } catch (err) {
      alert(`Error adding member: ${err.message}`);
    }
  };

  return (
    <div className="flex flex-col gap-6">
      {selectedMemberToEdit && (
        <div className="bg-neutral-950 p-6 rounded-2xl border border-purple-900/50 shadow-2xl relative">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-bold text-purple-300">
              Editing Profile: {selectedMemberToEdit.name}
            </h3>
            <button
              onClick={() => setSelectedMemberToEdit(null)}
              className="text-xs px-3 py-1 rounded-lg bg-neutral-800 hover:bg-neutral-700 text-gray-300"
            >
              Close Editor ✕
            </button>
          </div>
          <MemberProfileEditor
            targetMember={selectedMemberToEdit}
            isEditingSelf={false}
            onSaveSuccess={(updated) => {
              setSelectedMemberToEdit(updated);
            }}
          />
        </div>
      )}

      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-neutral-900/60 p-4 rounded-2xl border border-neutral-800">
        <div className="flex flex-wrap items-center gap-3 w-full sm:w-auto">
          <input
            type="text"
            placeholder="Search by name or ID..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="px-3 py-2 rounded-xl bg-black/60 border border-neutral-700 text-white text-xs sm:text-sm focus:outline-none focus:border-purple-500 min-w-[200px]"
          />

          <select
            value={selectedDept}
            onChange={(e) => setSelectedDept(e.target.value)}
            className="px-3 py-2 rounded-xl bg-black/60 border border-neutral-700 text-white text-xs sm:text-sm focus:outline-none focus:border-purple-500"
          >
            {DEPARTMENTS.map((dept) => (
              <option key={dept.id} value={dept.id}>
                {dept.label}
              </option>
            ))}
          </select>
        </div>

        {userRole === "admin" && (
          <button
            onClick={() => setShowAddModal(true)}
            className="px-4 py-2 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-xs sm:text-sm font-bold text-white shadow-md shadow-purple-900/30 transition cursor-pointer"
          >
            + Add New Member
          </button>
        )}
      </div>

      <div className="bg-neutral-900/60 rounded-2xl border border-neutral-800 overflow-hidden">
        <div className="p-4 border-b border-neutral-800 flex justify-between items-center text-xs text-gray-400">
          <span>Showing {filteredMembers.length} members from Firebase Realtime Database</span>
          <span className="font-mono">Role Access Level: {userRole.toUpperCase()}</span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs sm:text-sm text-gray-300">
            <thead className="bg-neutral-950 text-gray-400 text-[11px] font-mono uppercase tracking-wider border-b border-neutral-800">
              <tr>
                <th className="px-4 py-3">Member</th>
                <th className="px-4 py-3">ID / Reg No</th>
                <th className="px-4 py-3">Department</th>
                <th className="px-4 py-3">Title</th>
                <th className="px-4 py-3">App Role</th>
                <th className="px-4 py-3 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-neutral-800/60">
              {filteredMembers.length > 0 ? (
                filteredMembers.map((member) => (
                  <tr key={member.id || member.key} className="hover:bg-neutral-800/40 transition-colors">
                    <td className="px-4 py-3 font-medium text-white flex items-center gap-3">
                      <img
                        src={member.avatar || `https://ik.imagekit.io/Rakshitrajvit/Members/${member.id}.jpg`}
                        alt={member.name}
                        className="w-8 h-8 rounded-full object-cover border border-neutral-700"
                        onError={(e) => {
                          e.target.src = "/figma/avatar.png";
                        }}
                      />
                      <div>
                        <div className="font-bold">{member.name}</div>
                        <div className="text-[10px] text-gray-500">{member.email || "No Email"}</div>
                      </div>
                    </td>
                    <td className="px-4 py-3 font-mono text-purple-300">{member.id}</td>
                    <td className="px-4 py-3 capitalize">{member.role?.replace("_", " ")}</td>
                    <td className="px-4 py-3 font-semibold text-gray-300">{member.roleTitle}</td>
                    <td className="px-4 py-3">
                      {userRole === "admin" ? (
                        <select
                          value={member.appRole || "member"}
                          onChange={(e) => handleRoleChange(member, e.target.value)}
                          className="bg-black/60 border border-neutral-700 rounded-lg px-2 py-1 text-xs text-purple-300 focus:outline-none focus:border-purple-500"
                        >
                          <option value="member">Member</option>
                          <option value="team_member">Team Member</option>
                          <option value="admin">Admin</option>
                        </select>
                      ) : (
                        <span
                          className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${
                            member.appRole === "admin"
                              ? "bg-red-950 text-red-400 border border-red-800"
                              : member.appRole === "team_member"
                              ? "bg-amber-950 text-amber-400 border border-amber-800"
                              : "bg-blue-950 text-blue-400 border border-blue-800"
                          }`}
                        >
                          {(member.appRole || "member").toUpperCase()}
                        </span>
                      )}
                    </td>
                    <td className="px-4 py-3 text-right">
                      <div className="flex items-center justify-end gap-2">
                        {(userRole === "admin" || userRole === "team_member") && (
                          <button
                            onClick={() => setSelectedMemberToEdit(member)}
                            className="px-2.5 py-1 rounded-lg bg-neutral-800 hover:bg-neutral-700 text-xs text-purple-300 transition"
                          >
                            Edit
                          </button>
                        )}
                        {userRole === "admin" && (
                          <button
                            onClick={() => handleDeleteMember(member)}
                            className="px-2 py-1 rounded-lg bg-red-950/60 hover:bg-red-900 text-xs text-red-300 border border-red-800/50 transition"
                          >
                            Delete
                          </button>
                        )}
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="6" className="text-center py-8 text-gray-500 font-mono">
                    No members found matching your filter in Firebase.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {showAddModal && createPortal(
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 overflow-y-auto bg-black/80 backdrop-blur-md">
          <div className="bg-neutral-900 border border-neutral-800 rounded-2xl w-full max-w-lg p-6 shadow-2xl relative my-auto max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center border-b border-neutral-800 pb-3 mb-4">
              <h3 className="text-lg font-bold text-white">Add New Club Member</h3>
              <button
                onClick={() => setShowAddModal(false)}
                className="text-gray-400 hover:text-white"
              >
                ✕
              </button>
            </div>

            <form onSubmit={handleAddMemberSubmit} className="space-y-4 text-xs">
              <div>
                <label className="block text-gray-300 mb-1 font-semibold">Registration Number / ID *</label>
                <input
                  type="text"
                  placeholder="e.g. 24BAI10099"
                  value={newMember.id}
                  onChange={(e) => setNewMember({ ...newMember, id: e.target.value })}
                  className="w-full px-3 py-2 rounded-xl bg-black/60 border border-neutral-700 text-white focus:outline-none focus:border-purple-500"
                  required
                />
              </div>

              <div>
                <label className="block text-gray-300 mb-1 font-semibold">Full Name *</label>
                <input
                  type="text"
                  placeholder="Member Name"
                  value={newMember.name}
                  onChange={(e) => setNewMember({ ...newMember, name: e.target.value })}
                  className="w-full px-3 py-2 rounded-xl bg-black/60 border border-neutral-700 text-white focus:outline-none focus:border-purple-500"
                  required
                />
              </div>

              <div>
                <label className="block text-gray-300 mb-1 font-semibold">College Email</label>
                <input
                  type="email"
                  placeholder="name.regno@vitbhopal.ac.in"
                  value={newMember.email}
                  onChange={(e) => setNewMember({ ...newMember, email: e.target.value })}
                  className="w-full px-3 py-2 rounded-xl bg-black/60 border border-neutral-700 text-white focus:outline-none focus:border-purple-500"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-gray-300 mb-1 font-semibold">Department / Section</label>
                  <select
                    value={newMember.role}
                    onChange={(e) => setNewMember({ ...newMember, role: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl bg-black/60 border border-neutral-700 text-white focus:outline-none focus:border-purple-500"
                  >
                    {DEPARTMENTS.filter((d) => d.id !== "all").map((d) => (
                      <option key={d.id} value={d.id}>
                        {d.label}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-gray-300 mb-1 font-semibold">Role Access Level</label>
                  <select
                    value={newMember.appRole}
                    onChange={(e) => setNewMember({ ...newMember, appRole: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl bg-black/60 border border-neutral-700 text-white focus:outline-none focus:border-purple-500"
                  >
                    <option value="member">Member</option>
                    <option value="team_member">Team Member</option>
                    <option value="admin">Admin</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-gray-300 mb-1 font-semibold">Role Title</label>
                <input
                  type="text"
                  placeholder="e.g. TECHNICAL LEAD, MEMBER"
                  value={newMember.roleTitle}
                  onChange={(e) => setNewMember({ ...newMember, roleTitle: e.target.value })}
                  className="w-full px-3 py-2 rounded-xl bg-black/60 border border-neutral-700 text-white focus:outline-none focus:border-purple-500"
                />
              </div>

              <div className="pt-3 flex justify-end gap-3 border-t border-neutral-800">
                <button
                  type="button"
                  onClick={() => setShowAddModal(false)}
                  className="px-4 py-2 rounded-xl bg-neutral-800 hover:bg-neutral-700 text-gray-300 font-semibold"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-bold shadow-md shadow-purple-900/30"
                >
                  Save Member
                </button>
              </div>
            </form>
          </div>
        </div>,
        document.body
      )}
    </div>
  );
};

export default MemberManagement;
