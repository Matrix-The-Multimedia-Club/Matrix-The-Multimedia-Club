import { useState, useEffect } from 'react';

export const JsonModal = ({
  isOpen,
  onClose,
  members,
  onApplyJson,
  onResetDefault,
}) => {
  const [jsonText, setJsonText] = useState(() =>
    JSON.stringify(members, null, 2)
  );
  const [copied, setCopied] = useState(false);
  const [error, setError] = useState(null);

  // Keep jsonText updated whenever modal opens
  useEffect(() => {
    if (isOpen) {
      setJsonText(JSON.stringify(members, null, 2));
      setError(null);
    }
  }, [isOpen, members]);

  if (!isOpen) return null;

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(jsonText);
      setCopied(true);

      setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch {
      // Fallback
    }
  };

  const handleDownload = () => {
    const blob = new Blob([jsonText], {
      type: 'application/json',
    });

    const url = URL.createObjectURL(blob);

    const a = document.createElement('a');
    a.href = url;
    a.download = 'members.json';
    a.click();

    URL.revokeObjectURL(url);
  };

  const handleApply = () => {
    try {
      const parsed = JSON.parse(jsonText);

      if (!Array.isArray(parsed)) {
        throw new Error(
          'JSON data must be an array of members: [ { "id": "...", ... } ]'
        );
      }

      onApplyJson(parsed);
      onClose();
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError('Invalid JSON syntax.');
      }
    }
  };

  return (
    <div
      id="json-modal-overlay"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-xs"
      onClick={onClose}
    >
      <div
        id="json-modal-card"
        className="relative w-full max-w-2xl bg-[#1e252e] border-[3px] border-[#12161a] rounded-3xl p-6 text-neutral-100 shadow-2xl flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-neutral-700/60 mb-4">
          <div>
            <h2 className="font-comic font-bold text-2xl text-amber-300">
              Member Data (JSON)
            </h2>

            <p className="text-xs text-neutral-400 mt-0.5">
              Edit raw data below, paste your own member list, or copy it
              directly to your website.
            </p>
          </div>

          <button
            onClick={onClose}
            id="btn-close-json-modal"
            aria-label="Close JSON modal"
            className="w-8 h-8 rounded-full bg-neutral-800 hover:bg-neutral-700 text-neutral-300 flex items-center justify-center cursor-pointer"
          >
            ✕
          </button>
        </div>

        {/* Error Message */}
        {error && (
          <div className="mb-3 px-3 py-2 rounded-xl bg-rose-500/20 border border-rose-500/40 text-rose-300 text-xs font-mono">
            {error}
          </div>
        )}

        {/* JSON Textarea */}
        <div className="flex-1 overflow-hidden relative min-h-[320px] rounded-2xl border border-neutral-700 bg-[#141920]">
          <textarea
            id="textarea-json-editor"
            value={jsonText}
            onChange={(e) => {
              setJsonText(e.target.value);
              setError(null);
            }}
            spellCheck={false}
            className="w-full h-full p-4 font-mono text-xs text-emerald-400 bg-transparent resize-none outline-hidden focus:ring-1 focus:ring-amber-400"
          />
        </div>

        {/* Action Bar */}
        <div className="pt-4 mt-2 flex flex-wrap items-center justify-between gap-2 border-t border-neutral-700/60">
          <div className="flex items-center gap-2">

            {/* Copy JSON */}
            <button
              type="button"
              onClick={handleCopy}
              id="btn-copy-json"
              className="px-3.5 py-1.5 rounded-xl bg-neutral-800 hover:bg-neutral-700 text-neutral-200 text-xs font-medium transition cursor-pointer flex items-center gap-1.5"
            >
              {copied ? '✓ Copied!' : '📋 Copy JSON'}
            </button>

            {/* Download JSON */}
            <button
              type="button"
              onClick={handleDownload}
              id="btn-download-json"
              className="px-3.5 py-1.5 rounded-xl bg-neutral-800 hover:bg-neutral-700 text-neutral-200 text-xs font-medium transition cursor-pointer flex items-center gap-1.5"
            >
              ⬇ Download .json
            </button>

            {/* Reset */}
            <button
              type="button"
              onClick={() => {
                if (confirm('Reset to the original 10 cards dataset?')) {
                  onResetDefault();
                  onClose();
                }
              }}
              id="btn-reset-json"
              className="px-3 py-1.5 rounded-xl text-neutral-400 hover:text-neutral-200 text-xs transition cursor-pointer"
            >
              Reset to Default
            </button>
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-2">

            {/* Close */}
            <button
              type="button"
              onClick={onClose}
              id="btn-cancel-json"
              className="px-4 py-2 rounded-xl bg-neutral-800 hover:bg-neutral-700 text-neutral-300 text-xs font-semibold transition cursor-pointer"
            >
              Close
            </button>

            {/* Apply */}
            <button
              type="button"
              onClick={handleApply}
              id="btn-apply-json"
              className="px-5 py-2 rounded-xl bg-amber-400 hover:bg-amber-300 text-neutral-900 font-comic font-bold text-xs shadow-md transition cursor-pointer"
            >
              Apply JSON to Cards
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
