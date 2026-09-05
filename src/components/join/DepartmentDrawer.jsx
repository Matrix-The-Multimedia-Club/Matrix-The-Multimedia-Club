import {
  X,
  Check,
  Wrench,
  Gift,
  Sparkles,
  ExternalLink,
} from "lucide-react";

import {
  TechnicalBadgeSvg,
  DesignBadgeSvg,
  PrOutreachBadgeSvg,
  SocialMediaBadgeSvg,
  EventBadgeSvg,
  ContentBadgeSvg,
  FinanceBadgeSvg,
} from "./Badges";

import { playPop } from "../../utils/audio";

export const DepartmentDrawer = ({
  department,
  isOpen,
  onClose,
  onApplyRole,
}) => {
  if (!isOpen || !department) return null;

  const renderBadge = () => {
    switch (department.id) {
      case "technical":
        return (
          <TechnicalBadgeSvg
            interactive={false}
            className="w-48 sm:w-56 mx-auto"
          />
        );

      case "design":
        return (
          <DesignBadgeSvg
            interactive={false}
            className="w-48 sm:w-56 mx-auto"
          />
        );

      case "pr_outreach":
        return (
          <PrOutreachBadgeSvg
            interactive={false}
            className="w-48 sm:w-56 mx-auto"
          />
        );

      case "social_media":
        return (
          <SocialMediaBadgeSvg
            interactive={false}
            className="w-48 sm:w-56 mx-auto"
          />
        );

      case "event":
        return (
          <EventBadgeSvg
            interactive={false}
            className="w-48 sm:w-56 mx-auto"
          />
        );

      case "content":
        return (
          <ContentBadgeSvg
            interactive={false}
            className="w-48 sm:w-56 mx-auto"
          />
        );

      case "finance":
        return (
          <FinanceBadgeSvg
            interactive={false}
            className="w-48 sm:w-56 mx-auto"
          />
        );

      default:
        return null;
    }
  };


  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm overflow-y-auto">
      <div
        className="relative w-full max-w-2xl my-6 bg-[#161618] border-2 border-neutral-700 rounded-2xl shadow-2xl overflow-hidden text-neutral-100 max-h-[90vh] flex flex-col"
        style={{
          boxShadow:
            "0 25px 50px -12px rgba(0, 0, 0, 0.9), 0 0 25px rgba(255, 190, 66, 0.15)",
        }}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-neutral-800 bg-neutral-900/90 shrink-0">
          <div className="flex items-center space-x-2">
            <span
              className="text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded-full text-black"
              style={{ backgroundColor: department.badgeBgColor }}
            >
              {department.trackName}
            </span>

            <span className="text-neutral-400 text-xs">
              • {department.name} Division
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-neutral-400 hover:text-white hover:bg-neutral-800 transition-colors"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
          {/* Intro Section */}
          <div className="flex flex-col md:flex-row items-center gap-6 pb-6 border-b border-neutral-800">
            <div className="shrink-0">
              {renderBadge()}
            </div>

            <div className="space-y-3 text-center md:text-left">
              <h2 className="text-2xl sm:text-3xl font-black text-white font-sans">
                {department.name} Division
              </h2>

              <p className="text-amber-300/90 text-sm font-medium">
                {department.tagline}
              </p>

              <p className="text-neutral-300 text-sm leading-relaxed">
                {department.description}
              </p>

              <div className="pt-2">
                <button
                  onClick={() => {
                    playPop(520);
                    onApplyRole(department.id);
                  }}
                  className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-black font-bold text-sm shadow-md transition-transform active:scale-95"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>Apply via Google Form</span>
                  <ExternalLink className="w-4 h-4 ml-1" />
                </button>
              </div>
            </div>
          </div>

          {/* Tools & Perks */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
            {/* Tools */}
            <div className="space-y-3 p-4 rounded-xl bg-neutral-900/60 border border-neutral-800">
              <div className="flex items-center space-x-2 text-white font-bold text-sm">
                <Wrench className="w-4 h-4 text-sky-400" />
                <h4>Tools & Environment</h4>
              </div>

              <div className="flex flex-wrap gap-2 pt-1">
                {department.tools.map((tool) => (
                  <span
                    key={tool}
                    className="text-xs px-2.5 py-1 rounded-lg bg-neutral-800 border border-neutral-700/80 text-neutral-200"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>

            {/* Perks */}
            <div className="space-y-3 p-4 rounded-xl bg-neutral-900/60 border border-neutral-800">
              <div className="flex items-center space-x-2 text-white font-bold text-sm">
                <Gift className="w-4 h-4 text-emerald-400" />
                <h4>Division Perks</h4>
              </div>

              <ul className="space-y-2 text-xs text-neutral-300 pt-1">
                {department.perks.map((perk, i) => (
                  <li
                    key={i}
                    className="flex items-start space-x-2"
                  >
                    <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{perk}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-4 border-t border-neutral-800 bg-neutral-900/90 flex items-center justify-between shrink-0">
          <div className="text-xs text-neutral-500">
            The Matrix Multimedia Club • Join Us
          </div>

          <button
            onClick={() => {
              playPop(520);
              onApplyRole(department.id);
            }}
            className="px-5 py-2 rounded-xl bg-amber-500 hover:bg-amber-400 text-black font-bold text-xs shadow-md transition-all active:scale-95 flex items-center space-x-1.5"
          >
            <span>Apply Now</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
};