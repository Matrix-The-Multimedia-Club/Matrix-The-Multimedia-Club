import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { MemberCard } from "../compsss/MemberCard";
import { db, ref, onValue, isFirebaseDemoConfig } from "../../firebase";

const IMAGEKIT_BASE = "https://ik.imagekit.io/Rakshitrajvit/Members";

const resolveAvatar = (avatar, id) => {
  if (!avatar) {
    return id ? `${IMAGEKIT_BASE}/${id}.jpg` : "/figma/avatar.png";
  }
  if (avatar.startsWith("http")) return avatar;
  if (avatar.startsWith("/Members/")) {
    const file = avatar.replace("/Members/", "");
    return `${IMAGEKIT_BASE}/${file}`;
  }
  return avatar;
};

const getMemberRank = (member) => {
  const title = (member.roleTitle || "").toUpperCase().trim();
  const role = (member.role || "").toLowerCase();

  if (role === "leadership") {
    if (title.includes("PRESIDENT") && !title.includes("VICE")) return 1;
    if (title.includes("VICE PRESIDENT")) return 2;
    if (title.includes("GENERAL SECRETARY")) return 3;
    if (title.includes("JOINT SECRETARY")) return 4;
    if (title.includes("LEAD")) return 5;
    return 6;
  }

  if (
    title.includes("HEAD") ||
    (title.includes("LEAD") &&
      !title.includes("CO-LEAD") &&
      !title.includes("CO LEAD") &&
      !title.includes("ASSOCIATE") &&
      !title.includes("JOINT"))
  ) {
    return 1;
  }

  if (
    title.includes("CO-LEAD") ||
    title.includes("CO LEAD") ||
    title.includes("ASSOCIATE LEAD") ||
    title.includes("JOINT LEAD") ||
    title.includes("DEPUTY") ||
    title.includes("CO-HEAD") ||
    title.includes("CO HEAD")
  ) {
    return 2;
  }

  if (title.includes("CORE")) {
    return 3;
  }

  return 4;
};

const SECTIONS = [
  {
    id: "leadership",
    name: "Leadership Team",
    tagline: "Steering organizational vision, community partnerships, and strategic growth.",
    badgeBg: "#a23232",
    badgeText: "#ffffff",
  },
  {
    id: "technical",
    name: "Technical Team",
    tagline: "Architecting software foundations, digital platforms, and intelligent infrastructure.",
    badgeBg: "#93c4b8",
    badgeText: "#161a1d",
  },
  {
    id: "designer",
    name: "Design Team",
    tagline: "Crafting visual identity, UI/UX interfaces, and motion graphics.",
    badgeBg: "#f6be9e",
    badgeText: "#161a1d",
  },
  {
    id: "social_media",
    name: "Social Media Team",
    tagline: "Commanding digital feeds with tech content, short-form reels, and community storytelling.",
    badgeBg: "#6c2e64",
    badgeText: "#ffffff",
  },
  {
    id: "event_management",
    name: "Event Management Team",
    tagline: "Orchestrating meetups, hackathons, live demo days, and flagship summits.",
    badgeBg: "#ea8c27",
    badgeText: "#161a1d",
  },
  {
    id: "pr_outreach",
    name: "PR & Outreach Team",
    tagline: "Building press relations, ecosystem alliances, and sponsorship networks.",
    badgeBg: "#94b2db",
    badgeText: "#161a1d",
  },
  {
    id: "finance",
    name: "Finance Team",
    tagline: "Managing club budgets, sponsorship allocations, and fiscal infrastructure.",
    badgeBg: "#266b3c",
    badgeText: "#ffffff",
  },
  {
    id: "content_writer",
    name: "Content Writer Team",
    tagline: "Scripting narratives, editorial blogs, research pieces, and documentation.",
    badgeBg: "#f6d56d",
    badgeText: "#161a1d",
  },
  {
    id: "researcher",
    name: "Researcher Team",
    tagline: "Investigating emerging technologies, generative AI workflows, and data analytics.",
    badgeBg: "#1e436e",
    badgeText: "#ffffff",
  },
  {
    id: "project_manager",
    name: "Project Management Team",
    tagline: "Orchestrating agile sprints, team deliverables, and product release timelines.",
    badgeBg: "#9cb1be",
    badgeText: "#161a1d",
  },
];

export const MeetOurTeam = () => {
  const [members, setMembers] = useState([]);

  // Subscribe exclusively to Firebase Realtime Database
  useEffect(() => {
    if (isFirebaseDemoConfig()) {
      const saved = localStorage.getItem("mock_members_list");
      if (saved) {
        const parsed = JSON.parse(saved);
        setMembers(parsed.map((m) => ({ ...m, avatar: resolveAvatar(m.avatar, m.id) })));
      }
      return;
    }

    try {
      const membersRef = ref(db, "members");
      const unsubscribe = onValue(
        membersRef,
        (snapshot) => {
          if (!snapshot.exists()) {
            setMembers([]);
            return;
          }

          const val = snapshot.val();
          const parsedList = Array.isArray(val)
            ? val.filter(Boolean).map((member, index) => ({ ...member, id: member.id || String(index), key: String(index) }))
            : Object.keys(val).map((key) => ({ ...val[key], id: val[key].id || key, key }));

          const formatted = parsedList.map((member) => ({
            ...member,
            avatar: resolveAvatar(member.avatar, member.id || member.key),
            bio: member.bio || member.tagline || ""
          }));
          setMembers(formatted);
        },
        (error) => {
          console.warn("Firebase Realtime Database read error:", error);
        }
      );

      return () => unsubscribe();
    } catch (err) {
      console.warn("Failed to subscribe to Firebase Realtime Database members:", err);
    }
  }, []);

  const scrollToSection = (id) => {
    const el = document.getElementById(`team-section-${id}`);
    if (el) {
      const yOffset = -80;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <section className="relative w-full py-16 px-4 sm:px-6 lg:px-8 text-white min-h-screen">
      {/* Fixed viewport background image to prevent stretching */}
      <div
        className="fixed inset-0 z-0 pointer-events-none bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url(/back.jpg)" }}
      />
      {/* Dark overlay for optimal text contrast */}
      <div className="fixed inset-0 z-0 pointer-events-none bg-black/60" />

      <div className="relative z-10 max-w-7xl mx-auto flex flex-col items-center">
        {/* Main Header Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 max-w-3xl "
        >

          <h2 className="font-comic text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-4 drop-shadow-md">
            MEET OUR TEAM
          </h2>

          <p className="text-gray-400 text-base sm:text-lg leading-relaxed">
            The minds, engineers, designers, and operators behind The Matrix.
            Explore each department below.
          </p>
        </motion.div>

        {/* Quick Navigation Jump Bar */}
        <div className="sticky top-4 z-40 w-full max-w-5xl mb-16">
          <div className="flex flex-wrap items-center justify-center gap-2 p-2 rounded-2xl bg-neutral-900/90 border border-neutral-800 backdrop-blur-md shadow-2xl overflow-x-auto max-w-full scrollbar-none">
            {SECTIONS.filter((sec) => members.some((m) => m.role === sec.id)).map((sec) => (
              <button
                key={sec.id}
                onClick={() => scrollToSection(sec.id)}
                className="px-3 py-1.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer text-gray-300 hover:text-white hover:bg-neutral-800 border border-transparent hover:border-neutral-700 whitespace-nowrap"
              >
                {sec.name.replace(" Team", "")}
              </button>
            ))}
          </div>
        </div>

        {/* Department Sections Stack */}
        <div className="w-full flex flex-col gap-20">
          {SECTIONS.filter((sec) => members.some((m) => m.role === sec.id)).map((sec) => {
            const teamMembers = members
              .filter((m) => m.role === sec.id)
              .sort((a, b) => {
                const rankA = getMemberRank(a);
                const rankB = getMemberRank(b);
                if (rankA !== rankB) return rankA - rankB;
                return (a.name || "").localeCompare(b.name || "");
              });

            return (
              <motion.div
                key={sec.id}
                id={`team-section-${sec.id}`}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5 }}
                className="w-full border-t border-neutral-800/80 pt-12 first:border-t-0 first:pt-0"
              >
                {/* Department Section Header */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-8">
                  <div>
                    <div className="flex items-center gap-3">
                      <span
                        className="px-3 py-1 rounded-md text-xs font-mono font-extrabold uppercase tracking-wider shadow-sm"
                        style={{
                          backgroundColor: sec.badgeBg,
                          color: sec.badgeText,
                        }}
                      >
                        {sec.name.toUpperCase()}
                      </span>

                      <span className="text-gray-500 font-mono text-xs">
                        ({teamMembers.length} {teamMembers.length === 1 ? "member" : "members"})
                      </span>
                    </div>

                    <h3 className="font-comic text-2xl sm:text-3xl font-bold text-white mt-2">
                      {sec.name}
                    </h3>
                  </div>

                  <p className="text-gray-400 text-xs sm:text-sm max-w-md">
                    {sec.tagline}
                  </p>
                </div>

                {/* Team Members Cards Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 justify-items-center sm:justify-items-start">
                  {teamMembers.length > 0 ? (
                    teamMembers.map((member) => (
                      <MemberCard key={member.id || member.key} member={member} />
                    ))
                  ) : (
                    <div className="col-span-full w-full py-10 px-6 rounded-2xl border border-dashed border-neutral-800 bg-neutral-900/40 text-center text-gray-500 font-mono text-sm">
                      Members will be added to {sec.name} soon.
                    </div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default MeetOurTeam;
