import { useState } from "react";
import Hero from "./join/Hero";
import MobileHero from "./join/MobileHero";
import { ChevronRight, Sparkles, Star, ExternalLink } from "lucide-react";

import { DEPARTMENTS, MATRIX_PERKS_GENERAL } from "../data/departments";

import {
  TechnicalBadgeSvg,
  DesignBadgeSvg,
  PrOutreachBadgeSvg,
  SocialMediaBadgeSvg,
  EventBadgeSvg,
  ContentBadgeSvg,
  FinanceBadgeSvg,
} from "./join/Badges";

import { DepartmentDrawer } from "./join/DepartmentDrawer";
import { playPop } from "../utils/audio";

// Google Form URL for Join Us applications
const GOOGLE_FORM_URL = "https://forms.google.com";

const SECTIONS = [
  {
    id: "core_builder",
    title: "CORE BUILDER",
    subtitle: "Engineering architecture, systems, and tactile human interfaces",
    deptIds: ["technical", "design"],
  },
  {
    id: "voice_of_the_matrix",
    title: "VOICE OF THE MATRIX",
    subtitle:
      "Bridging the Matrix with external communities and commanding digital feeds",
    deptIds: ["pr_outreach", "social_media"],
  },
  {
    id: "experience_creators",
    title: "EXPERIENCE CREATORS",
    subtitle:
      "Orchestrating flagship events, technical hackathons, and cinematic stories",
    deptIds: ["event", "content"],
  },
  {
    id: "the_backbone",
    title: "THE BACKBONE",
    subtitle:
      "Managing fiscal allocation, sponsorship budgets, and financial infrastructure",
    deptIds: ["finance"],
  },
];

export default function JoinUs() {
  const [selectedDeptId, setSelectedDeptId] = useState(null);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleOpenDepartment = (deptId) => {
    playPop(520);
    setSelectedDeptId(deptId);
    setIsDrawerOpen(true);
  };

  const handleApplyRedirect = () => {
    playPop(650);
    window.open(GOOGLE_FORM_URL, "_blank", "noopener,noreferrer");
  };

  const selectedDepartment = DEPARTMENTS.find(
    (d) => d.id === selectedDeptId
  );

  const renderBadgeComponent = (deptId) => {
    const badgeProps = {
      onClick: () => handleOpenDepartment(deptId),
      className: "w-64 sm:w-80 md:w-96 max-w-full mx-auto flex items-center justify-center text-center",
    };

    switch (deptId) {
      case "technical":
        return <TechnicalBadgeSvg {...badgeProps} />;
      case "design":
        return <DesignBadgeSvg {...badgeProps} />;
      case "pr_outreach":
        return <PrOutreachBadgeSvg {...badgeProps} />;
      case "social_media":
        return <SocialMediaBadgeSvg {...badgeProps} />;
      case "event":
        return <EventBadgeSvg {...badgeProps} />;
      case "content":
        return <ContentBadgeSvg {...badgeProps} />;
      case "finance":
        return <FinanceBadgeSvg {...badgeProps} />;
      default:
        return null;
    }
  };

  return (
    <div
      className="min-h-screen text-white font-sans relative"
      style={{
        backgroundImage: "url(/back.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Dark tint overlay to maintain readability & unify with Hero section */}
      <div className="absolute inset-0 bg-black/75 pointer-events-none z-0" />

      <div className="relative z-10">
        {/* HERO SECTION */}
        <div className="hidden md:block">
          <Hero />
        </div>

        <div className="block md:hidden">
          <MobileHero />
        </div>

        {/* VERTICAL SCROLLABLE SECTIONS */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 py-12">
          {SECTIONS.map((section) => (
            <section
              key={section.id}
              className="bg-[#121215]/90 backdrop-blur-md border border-neutral-800/90 rounded-3xl p-6 sm:p-10 md:p-14 shadow-2xl space-y-10"
            >
              {/* Header Title & Subtitle */}
              <div className="text-center space-y-2">
                <h2 className="text-2xl sm:text-4xl font-extrabold uppercase tracking-wide text-white font-sans">
                  {section.title}
                </h2>
                <p className="text-neutral-400 text-sm sm:text-base font-normal max-w-xl mx-auto">
                  {section.subtitle}
                </p>
              </div>

              {/* Cards Grid */}
              <div
                className={`grid grid-cols-1 ${
                  section.deptIds.length > 1
                    ? "md:grid-cols-2 gap-8 md:gap-12"
                    : "max-w-md mx-auto"
                } place-items-center justify-items-center items-center justify-center text-center pt-2`}
              >
                {section.deptIds.map((deptId) => {
                  const dept = DEPARTMENTS.find((d) => d.id === deptId);
                  if (!dept) return null;

                  return (
                    <div
                      key={dept.id}
                      className="flex flex-col items-center justify-center text-center w-full max-w-sm mx-auto group cursor-pointer"
                      onClick={() => handleOpenDepartment(dept.id)}
                    >
                      {/* Badge Card SVG */}
                      <div className="w-full flex items-center justify-center text-center transform transition-transform duration-300 group-hover:scale-105">
                        {renderBadgeComponent(dept.id)}
                      </div>

                      {/* Explore Link Underneath Badge Card */}
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleOpenDepartment(dept.id);
                        }}
                        className="mt-6 inline-flex items-center justify-center space-x-1.5 text-neutral-300 group-hover:text-amber-400 font-medium text-sm sm:text-base transition-colors"
                      >
                        <span>Explore {dept.name} roles</span>
                        <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                      </button>
                    </div>
                  );
                })}
              </div>
            </section>
          ))}
        </div>

        {/* PERKS & CULTURE SECTION */}
        <section className="max-w-5xl mx-auto my-12 px-4 sm:px-6 lg:px-8">
          <div className="p-8 sm:p-12 rounded-3xl bg-[#121215]/90 backdrop-blur-md border border-neutral-800/90 shadow-2xl space-y-8">
            <div className="text-center space-y-2 max-w-2xl mx-auto">
              <h2 className="text-2xl sm:text-3xl font-black text-white uppercase">
                Why Join The Matrix?
              </h2>
              <p className="text-neutral-400 text-sm">
                We provide an unparalleled environment for ambitious talent to grow,
                ship real projects, and lead the multimedia movement.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {MATRIX_PERKS_GENERAL.map((perk, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-neutral-900/80 border border-neutral-800 flex items-start space-x-4"
                >
                  <div className="p-3 rounded-xl bg-amber-500/10 text-amber-400 shrink-0">
                    <Star className="w-5 h-5" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-base font-bold text-white">
                      {perk.title}
                    </h3>
                    <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed">
                      {perk.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* DIRECT GOOGLE FORM CTA BANNER */}
        <section className="max-w-4xl mx-auto text-center my-16 px-4 sm:px-6 lg:px-8 pb-16">
          <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-amber-500/20 via-neutral-900/90 to-neutral-900/90 border border-amber-500/30 shadow-2xl space-y-6 backdrop-blur-md">
            <h2 className="text-3xl sm:text-4xl font-black text-white uppercase">
              Ready To Join The Club?
            </h2>
            <p className="text-neutral-300 text-sm sm:text-base max-w-xl mx-auto">
              Click below to fill out our official recruitment form on Google Forms.
            </p>
            <div className="flex justify-center pt-2">
              <button
                onClick={handleApplyRedirect}
                className="px-8 py-3.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-black font-extrabold text-sm sm:text-base shadow-lg transition-transform active:scale-95 flex items-center space-x-2"
              >
                <Sparkles className="w-5 h-5" />
                <span>Fill Google Application Form</span>
                <ExternalLink className="w-4 h-4 ml-1" />
              </button>
            </div>
          </div>
        </section>
      </div>

      {/* DEPARTMENT DRAWER MODAL */}
      <DepartmentDrawer
        department={selectedDepartment}
        isOpen={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
        onApplyRole={() => {
          setIsDrawerOpen(false);
          handleApplyRedirect();
        }}
      />
    </div>
  );
}