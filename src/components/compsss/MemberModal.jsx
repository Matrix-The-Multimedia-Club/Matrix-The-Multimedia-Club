import { useState } from 'react';
import { ROLE_CONFIGS } from '../../constants/roles';

const PRESET_AVATARS = [
  { id: 'preset:male-1', label: 'Male 1 (Technical)' },
  { id: 'preset:female-1', label: 'Female 1 (Designer)' },
  { id: 'preset:male-2', label: 'Male 2 (Leadership)' },
  { id: 'preset:female-2', label: 'Female 2 (Social)' },
  { id: 'preset:male-3', label: 'Male 3 (Event)' },
  { id: 'preset:female-3', label: 'Female 3 (PR)' },
  { id: 'preset:male-4', label: 'Male 4 (Finance)' },
  { id: 'preset:female-4', label: 'Female 4 (Writer)' },
  { id: 'preset:male-5', label: 'Male 5 (Researcher)' },
  { id: 'preset:female-5', label: 'Female 5 (PM)' },
];

export const MemberModal = ({
  isOpen,
  onClose,
  onSave,
  onDelete,
  initialMember,
}) => {
  const isEditing = Boolean(initialMember);

  const [name, setName] = useState(initialMember?.name || '');
  const [role, setRole] = useState(initialMember?.role || 'technical');
  const [roleTitle, setRoleTitle] = useState(initialMember?.roleTitle || '');
  const [avatarMode, setAvatarMode] = useState(
    initialMember?.avatar && !initialMember.avatar.startsWith('preset:') ? 'url' : 'preset'
  );
  const [presetAvatar, setPresetAvatar] = useState(
    initialMember?.avatar && initialMember.avatar.startsWith('preset:')
      ? initialMember.avatar
      : ROLE_CONFIGS[initialMember?.role || 'technical']?.defaultAvatar || 'preset:male-1'
  );
  const [customAvatarUrl, setCustomAvatarUrl] = useState(
    initialMember?.avatar && !initialMember.avatar.startsWith('preset:') ? initialMember.avatar : ''
  );
  // eslint-disable-next-line no-unused-vars
  const [department, setDepartment] = useState(initialMember?.department || '');
  // eslint-disable-next-line no-unused-vars
  const [bio, setBio] = useState(initialMember?.bio || '');

  const [socials, setSocials] = useState({
    linkedin: initialMember?.socials?.linkedin || '',
    github: initialMember?.socials?.github || '',
    twitter: initialMember?.socials?.twitter || '',
    instagram: initialMember?.socials?.instagram || '',
    facebook: initialMember?.socials?.facebook || '',
    tiktok: initialMember?.socials?.tiktok || '',
  });

  if (!isOpen) return null;

  const handleRoleChange = (newRole) => {
    setRole(newRole);
    if (!roleTitle || roleTitle === ROLE_CONFIGS[role]?.title) {
      setRoleTitle(ROLE_CONFIGS[newRole]?.title || '');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim()) return;

    const finalAvatar = avatarMode === 'url' && customAvatarUrl.trim() ? customAvatarUrl.trim() : presetAvatar;

    const memberData = {
      id: initialMember?.id || `mem-${Date.now()}`,
      name: name.trim(),
      role,
      roleTitle: roleTitle.trim() || ROLE_CONFIGS[role]?.title,
      avatar: finalAvatar,
      bio: bio.trim() || undefined,
      department: department.trim() || undefined,
      socials: {
        linkedin: socials.linkedin?.trim() || undefined,
        github: socials.github?.trim() || undefined,
        twitter: socials.twitter?.trim() || undefined,
        instagram: socials.instagram?.trim() || undefined,
        facebook: socials.facebook?.trim() || undefined,
        tiktok: socials.tiktok?.trim() || undefined,
      },
    };

    onSave(memberData);
    onClose();
  };

  return (
    <div
      id="member-modal-overlay"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-xs overflow-y-auto"
      onClick={onClose}
    >
      <div
        id="member-modal-card"
        className="relative w-full max-w-lg bg-[#202730] border-[3px] border-[#12161a] rounded-3xl p-6 text-neutral-100 shadow-2xl my-8"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between pb-4 border-b border-neutral-700/60 mb-5">
          <h2 className="font-comic font-bold text-2xl text-amber-300">
            {isEditing ? 'Edit Team Member' : 'Add New Member'}
          </h2>
          <button
            onClick={onClose}
            id="btn-close-modal"
            aria-label="Close modal"
            className="w-8 h-8 rounded-full bg-neutral-800 hover:bg-neutral-700 text-neutral-300 flex items-center justify-center cursor-pointer"
          >
            ✕
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Member Name */}
          <div>
            <label className="block text-sm font-semibold text-neutral-300 mb-1">
              Member Name <span className="text-rose-400">*</span>
            </label>
            <input
              type="text"
              id="input-member-name"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="e.g. Alex Chen"
              className="w-full px-3.5 py-2 rounded-xl bg-neutral-900/90 border border-neutral-700 focus:border-amber-400 focus:ring-1 focus:ring-amber-400 text-white placeholder-neutral-500 text-sm outline-hidden"
            />
          </div>

          {/* Role Selection */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-sm font-semibold text-neutral-300 mb-1">Card Role Preset</label>
              <select
                id="select-member-role"
                value={role}
                onChange={(e) => handleRoleChange(e.target.value)}
                className="w-full px-3.5 py-2 rounded-xl bg-neutral-900/90 border border-neutral-700 focus:border-amber-400 focus:ring-1 focus:ring-amber-400 text-white text-sm outline-hidden"
              >
                <option value="technical">Technical Member</option>
                <option value="designer">Designer</option>
                <option value="leadership">Leadership Member</option>
                <option value="social_media">Social Media</option>
                <option value="event_management">Event Management</option>
                <option value="pr_outreach">PR & Outreach</option>
                <option value="finance">Finance</option>
                <option value="content_writer">Content Writer</option>
                <option value="researcher">Researcher</option>
                <option value="project_manager">Project Manager</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-semibold text-neutral-300 mb-1">Custom Role Title</label>
              <input
                type="text"
                id="input-role-title"
                value={roleTitle}
                onChange={(e) => setRoleTitle(e.target.value)}
                placeholder={ROLE_CONFIGS[role]?.title || 'e.g. TECHNICAL LEAD'}
                className="w-full px-3.5 py-2 rounded-xl bg-neutral-900/90 border border-neutral-700 focus:border-amber-400 focus:ring-1 focus:ring-amber-400 text-white placeholder-neutral-500 text-sm outline-hidden"
              />
            </div>
          </div>

          {/* Avatar Source */}
          <div>
            <label className="block text-sm font-semibold text-neutral-300 mb-1">Avatar Type</label>
            <div className="flex gap-4 mb-2 text-sm">
              <label className="inline-flex items-center gap-1.5 cursor-pointer">
                <input
                  type="radio"
                  name="avatarMode"
                  checked={avatarMode === 'preset'}
                  onChange={() => setAvatarMode('preset')}
                  className="text-amber-400 focus:ring-amber-400"
                />
                <span>Illustrated Preset</span>
              </label>
              <label className="inline-flex items-center gap-1.5 cursor-pointer">
                <input
                  type="radio"
                  name="avatarMode"
                  checked={avatarMode === 'url'}
                  onChange={() => setAvatarMode('url')}
                  className="text-amber-400 focus:ring-amber-400"
                />
                <span>Custom Image URL / Photo</span>
              </label>
            </div>

            {avatarMode === 'preset' ? (
              <select
                id="select-preset-avatar"
                value={presetAvatar}
                onChange={(e) => setPresetAvatar(e.target.value)}
                className="w-full px-3.5 py-2 rounded-xl bg-neutral-900/90 border border-neutral-700 focus:border-amber-400 text-white text-sm outline-hidden"
              >
                {PRESET_AVATARS.map((av) => (
                  <option key={av.id} value={av.id}>
                    {av.label}
                  </option>
                ))}
              </select>
            ) : (
              <input
                type="url"
                id="input-avatar-url"
                value={customAvatarUrl}
                onChange={(e) => setCustomAvatarUrl(e.target.value)}
                placeholder="https://example.com/avatar.jpg"
                className="w-full px-3.5 py-2 rounded-xl bg-neutral-900/90 border border-neutral-700 focus:border-amber-400 text-white text-sm outline-hidden placeholder-neutral-500"
              />
            )}
          </div>

          {/* Social Profiles */}
          <div className="pt-2">
            <label className="block text-sm font-semibold text-neutral-300 mb-2">Social Media Links</label>
            <div className="grid grid-cols-2 gap-2 text-xs">
              <div>
                <span className="text-neutral-400 block mb-0.5">LinkedIn</span>
                <input
                  type="text"
                  value={socials.linkedin || ''}
                  onChange={(e) => setSocials({ ...socials, linkedin: e.target.value })}
                  placeholder="https://linkedin.com/in/..."
                  className="w-full px-2.5 py-1.5 rounded-lg bg-neutral-900/90 border border-neutral-700 text-white"
                />
              </div>
              <div>
                <span className="text-neutral-400 block mb-0.5">GitHub</span>
                <input
                  type="text"
                  value={socials.github || ''}
                  onChange={(e) => setSocials({ ...socials, github: e.target.value })}
                  placeholder="https://github.com/..."
                  className="w-full px-2.5 py-1.5 rounded-lg bg-neutral-900/90 border border-neutral-700 text-white"
                />
              </div>
              <div>
                <span className="text-neutral-400 block mb-0.5">X / Twitter</span>
                <input
                  type="text"
                  value={socials.twitter || ''}
                  onChange={(e) => setSocials({ ...socials, twitter: e.target.value })}
                  placeholder="https://x.com/..."
                  className="w-full px-2.5 py-1.5 rounded-lg bg-neutral-900/90 border border-neutral-700 text-white"
                />
              </div>
              <div>
                <span className="text-neutral-400 block mb-0.5">Instagram</span>
                <input
                  type="text"
                  value={socials.instagram || ''}
                  onChange={(e) => setSocials({ ...socials, instagram: e.target.value })}
                  placeholder="https://instagram.com/..."
                  className="w-full px-2.5 py-1.5 rounded-lg bg-neutral-900/90 border border-neutral-700 text-white"
                />
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="pt-4 flex items-center justify-between gap-3 border-t border-neutral-700/60 mt-4">
            {isEditing && onDelete && initialMember ? (
              <button
                type="button"
                onClick={() => {
                  if (confirm(`Remove ${initialMember.name}?`)) {
                    onDelete(initialMember.id);
                    onClose();
                  }
                }}
                id="btn-delete-member"
                className="px-4 py-2 rounded-xl bg-rose-500/20 text-rose-300 hover:bg-rose-500/30 text-sm font-semibold transition cursor-pointer"
              >
                Delete
              </button>
            ) : <div />}

            <div className="flex gap-2">
              <button
                type="button"
                onClick={onClose}
                id="btn-cancel-modal"
                className="px-4 py-2 rounded-xl bg-neutral-800 hover:bg-neutral-700 text-neutral-300 text-sm font-semibold transition cursor-pointer"
              >
                Cancel
              </button>
              <button
                type="submit"
                id="btn-save-member"
                className="px-5 py-2 rounded-xl bg-amber-400 hover:bg-amber-300 text-neutral-900 font-comic font-bold text-sm shadow-md transition cursor-pointer"
              >
                {isEditing ? 'Save Changes' : 'Add Member'}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
