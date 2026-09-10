import { useState } from 'react';

export const CodeExportModal = ({ isOpen, onClose }) => {
  const [tab, setTab] = useState('dynamic');
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const dynamicCodeSnippet = `// 1. Import your JSON data and the MemberCard component
import membersData from './data/members.json';
import { MemberCard } from './components/MemberCard';

export default function TeamSection() {
  const members = membersData;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 p-6">
      {members.map((member) => (
        <MemberCard key={member.id} member={member} />
      ))}
    </div>
  );
}`;

  const individualCodeSnippet = `// Or use the individual specialized role components directly:
import {
  TechnicalMemberCard,
  DesignerMemberCard,
  LeadershipMemberCard,
  SocialMediaMemberCard,
  EventManagementMemberCard,
  PrOutreachMemberCard,
  FinanceMemberCard,
  ContentWriterMemberCard,
  ResearcherMemberCard,
  ProjectManagerMemberCard
} from './components/MemberCard';

<TechnicalMemberCard
  member={{
    id: "tech-1",
    name: "Alex Chen",
    avatar: "preset:male-1", // or URL "https://your-domain.com/photo.jpg"
    socials: { linkedin: "...", github: "...", twitter: "...", instagram: "..." }
  }}
/>`;

  const jsonSnippet = `[
  {
    "id": "1",
    "name": "Alex Chen",
    "role": "technical",
    "roleTitle": "TECHNICAL MEMBER",
    "avatar": "preset:male-1",
    "socials": {
      "linkedin": "https://linkedin.com/in/alex",
      "github": "https://github.com/alex",
      "twitter": "https://x.com/alex",
      "instagram": "https://instagram.com/alex"
    }
  }
]`;

  const currentSnippet =
    tab === 'dynamic'
      ? dynamicCodeSnippet
      : tab === 'individual'
        ? individualCodeSnippet
        : jsonSnippet;

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(currentSnippet);
      setCopied(true);

      setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch {
      // Ignore clipboard errors
    }
  };

  return (
    <div
      id="code-modal-overlay"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-xs"
      onClick={onClose}
    >
      <div
        id="code-modal-card"
        className="relative w-full max-w-2xl bg-[#1e252e] border-[3px] border-[#12161a] rounded-3xl p-6 text-neutral-100 shadow-2xl flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-neutral-700/60 mb-4">
          <div>
            <h2 className="font-comic font-bold text-2xl text-amber-300">
              How to Use in Your Website
            </h2>

            <p className="text-xs text-neutral-400 mt-0.5">
              Copy-paste ready snippets to drop these cards and JSON data into your project.
            </p>
          </div>

          <button
            onClick={onClose}
            id="btn-close-code-modal"
            aria-label="Close Code modal"
            className="w-8 h-8 rounded-full bg-neutral-800 hover:bg-neutral-700 text-neutral-300 flex items-center justify-center cursor-pointer"
          >
            ✕
          </button>
        </div>

        {/* Tab switcher */}
        <div className="flex gap-2 mb-3">
          <button
            onClick={() => setTab('dynamic')}
            className={`px-3 py-1.5 rounded-xl text-xs font-semibold cursor-pointer transition ${
              tab === 'dynamic'
                ? 'bg-amber-400 text-neutral-950 font-bold'
                : 'bg-neutral-800 text-neutral-300 hover:bg-neutral-700'
            }`}
          >
            Dynamic JSON Mapping
          </button>

          <button
            onClick={() => setTab('individual')}
            className={`px-3 py-1.5 rounded-xl text-xs font-semibold cursor-pointer transition ${
              tab === 'individual'
                ? 'bg-amber-400 text-neutral-950 font-bold'
                : 'bg-neutral-800 text-neutral-300 hover:bg-neutral-700'
            }`}
          >
            Individual Components
          </button>

          <button
            onClick={() => setTab('json')}
            className={`px-3 py-1.5 rounded-xl text-xs font-semibold cursor-pointer transition ${
              tab === 'json'
                ? 'bg-amber-400 text-neutral-950 font-bold'
                : 'bg-neutral-800 text-neutral-300 hover:bg-neutral-700'
            }`}
          >
            JSON Schema Example
          </button>
        </div>

        {/* Code Block */}
        <div className="flex-1 overflow-hidden relative rounded-2xl border border-neutral-700 bg-[#12161d]">
          <pre className="p-4 font-mono text-xs text-amber-200 overflow-auto h-full max-h-[380px] leading-relaxed">
            {currentSnippet}
          </pre>
        </div>

        {/* Footer */}
        <div className="pt-4 mt-2 flex items-center justify-between border-t border-neutral-700/60">
          <button
            type="button"
            onClick={handleCopy}
            className="px-4 py-2 rounded-xl bg-neutral-800 hover:bg-neutral-700 text-neutral-200 text-xs font-semibold transition cursor-pointer flex items-center gap-1.5"
          >
            {copied ? '✓ Copied to Clipboard!' : '📋 Copy Code Snippet'}
          </button>

          <button
            type="button"
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-amber-400 hover:bg-amber-300 text-neutral-900 font-comic font-bold text-xs shadow-md transition cursor-pointer"
          >
            Got It
          </button>
        </div>
      </div>
    </div>
  );
};
