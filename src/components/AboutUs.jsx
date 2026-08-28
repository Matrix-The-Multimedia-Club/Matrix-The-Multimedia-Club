import React from "react";

const Logo = () => (
  <div className="flex items-center gap-2.5 select-none">
    <div className="w-7 h-7 rounded-full border border-cyan-400 flex items-center justify-center relative">
      <div className="w-2.5 h-2.5 bg-rose-500 rounded-[2px] transform rotate-45" />
    </div>
    <div className="flex flex-col text-left font-black text-[9px] tracking-widest leading-tight">
      <span className="text-white">THE MATRIX</span>
      <span className="text-[#FFE054]">CLUB</span>
    </div>
  </div>
);

const MemberCard = ({ name, role, quote, avatar, badge = "MEMBER", socials = {} }) => {
  return (
    <div className="flex flex-col items-start p-4 bg-transparent rounded-2xl group transition-all duration-300 w-full max-w-[260px] mx-auto sm:mx-0">
      
      {/* Avatar Container with circular border and overlapping badge */}
      <div className="relative w-36 h-36 mb-5 select-none">
        {/* Outer Ring */}
        <div className="absolute inset-0 rounded-full p-[2px] bg-gradient-to-tr from-cyan-400 to-purple-600 shadow-md shadow-purple-500/5 group-hover:shadow-purple-500/20 group-hover:scale-105 transition-all duration-500" />
        
        {/* Inner Ring holding image */}
        <div className="absolute inset-[3px] rounded-full overflow-hidden bg-[#0a0b0e] border border-white/10">
          <img
            src={avatar}
            alt={name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
        </div>

        {/* Top-Left Category Badge */}
        <div className="absolute -top-1 -left-2 z-10 px-2.5 py-0.5 rounded-full text-[8px] font-black tracking-widest bg-[#FFE054] text-black uppercase shadow-md select-none">
          {badge}
        </div>
      </div>

      {/* Name and Arrow Link */}
      <div className="flex justify-between items-center w-full">
        <h4 className="text-base font-bold text-white tracking-tight group-hover:text-[#00F0FF] transition-colors duration-300">
          {name}
        </h4>
        <span className="text-gray-500 group-hover:text-white transition-colors duration-300 text-sm select-none">
          ↗
        </span>
      </div>

      {/* Role */}
      <span className="text-xs text-gray-400 mt-0.5 font-medium">
        {role}
      </span>

      {/* Dashed Divider */}
      <div className="border-t border-dashed border-white/10 my-3 w-full" />

      {/* Quote */}
      <p className="text-xs text-gray-400 italic leading-relaxed min-h-[44px] w-full">
        "{quote || "Decoding creativity under the matrix."}"
      </p>

      {/* Dashed Divider */}
      <div className="border-t border-dashed border-white/10 my-3 w-full" />

      {/* Social Links with SVG Icons */}
      <div className="flex gap-4 w-full justify-start text-[10px]">
        {socials.linkedin && (
          <a
            href={socials.linkedin}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1 text-gray-500 hover:text-white uppercase font-bold tracking-wider transition-colors duration-300"
          >
            <svg className="w-3 h-3 text-cyan-400 fill-current" viewBox="0 0 24 24">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
            </svg>
            LinkedIn
          </a>
        )}
        {socials.github && (
          <a
            href={socials.github}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1 text-gray-500 hover:text-white uppercase font-bold tracking-wider transition-colors duration-300"
          >
            <svg className="w-3 h-3 text-purple-400 fill-current" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
            GitHub
          </a>
        )}
        {socials.instagram && (
          <a
            href={socials.instagram}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1 text-gray-500 hover:text-white uppercase font-bold tracking-wider transition-colors duration-300"
          >
            <svg className="w-3 h-3 text-pink-400 fill-current" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
            Instagram
          </a>
        )}
      </div>

    </div>
  );
};

const AboutUs = () => {
  const leadership = [
    {
      name: "Yuva Bharti",
      role: "President",
      quote: "Leadership is a practice of imperfect humans leading imperfect humans. That's why it's so hard.",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=150&auto=format&fit=crop",
      badge: "LEADERSHIP",
      socials: { linkedin: "#", instagram: "#" },
    },
    {
      name: "Darshan V",
      role: "Vice President",
      quote: "Creative expression is the tool of the soul.",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&auto=format&fit=crop",
      badge: "LEADERSHIP",
      socials: { linkedin: "#", github: "#" },
    },
    {
      name: "Nikhil Mohammed",
      role: "General Secretary",
      quote: "Design team - your idea, our canvas.",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=150&auto=format&fit=crop",
      badge: "LEADERSHIP",
      socials: { linkedin: "#", instagram: "#" },
    },
    {
      name: "Piyush Kumar Singh",
      role: "Operations Manager",
      quote: "Connecting teams, building systems, delivering results.",
      avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=150&auto=format&fit=crop",
      badge: "LEADERSHIP",
      socials: { linkedin: "#", instagram: "#" },
    },
  ];

  const domains = [
    {
      title: "Technical Team",
      count: "10 Members",
      badge: "TECHNICAL",
      members: [
        {
          name: "Vishwajeet Pratap Singh",
          role: "Technical Lead",
          quote: "If it's not broken, give it time... we'll fix it anyway.",
          avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=150",
          socials: { linkedin: "#", github: "#" },
        },
        {
          name: "Deepak Shukla",
          role: "Technical Co-Lead",
          quote: "Coding full-stack experiences and teaching machines to read.",
          avatar: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?q=80&w=150",
          socials: { linkedin: "#", github: "#" },
        },
        {
          name: "Arav Acharya",
          role: "Core Member",
          quote: "Turning caffeine into code -- full stack and generative AI.",
          avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150",
          socials: { linkedin: "#", github: "#" },
        },
        {
          name: "Sarthak Jalan",
          role: "Core Member",
          quote: "Cloud and backend - deploying dreams, not just servers.",
          avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=150",
          socials: { linkedin: "#", github: "#" },
        },
        {
          name: "Bhumika Verma",
          role: "Core Member",
          quote: "Coding the future, one line at a time.",
          avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150",
          socials: { linkedin: "#", github: "#" },
        },
        {
          name: "Sreelakshmi A",
          role: "Core Member",
          quote: "Training my future, one epoch at a time.",
          avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=150",
          socials: { linkedin: "#", github: "#" },
        },
        {
          name: "Ayush Gupta",
          role: "Core Member",
          quote: "Developing solutions with passion and precision.",
          avatar: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=150",
          socials: { linkedin: "#", github: "#" },
        },
        {
          name: "Deepak Singh",
          role: "Core Member",
          quote: "Enthusiastic developer building digital products.",
          avatar: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?q=80&w=150",
          socials: { linkedin: "#", github: "#" },
        },
        {
          name: "Vaishnavi Sagar Jadhav",
          role: "Core Member",
          quote: "Structuring logic and designing flawless code flows.",
          avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=150",
          socials: { linkedin: "#", github: "#" },
        },
        {
          name: "Rakshit Raj",
          role: "Core Member",
          quote: "Committed to frontend excellence and smooth interactions.",
          avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=150",
          socials: { linkedin: "#", github: "#" },
        },
      ],
    },
    {
      title: "Design Team",
      count: "3 Members",
      badge: "DESIGN",
      members: [
        {
          name: "Anushka",
          role: "Design Lead",
          quote: "Turning connections into collaborations.",
          avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=150",
          socials: { linkedin: "#", instagram: "#" },
        },
        {
          name: "Rupankita Baruah",
          role: "Core Member",
          quote: "Translating words into visual symphonies.",
          avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=150",
          socials: { linkedin: "#", instagram: "#" },
        },
        {
          name: "Diya Gugale",
          role: "Core Member",
          quote: "Crafting beautiful interfaces with meticulous details.",
          avatar: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=150",
          socials: { linkedin: "#", instagram: "#" },
        },
      ],
    },
    {
      title: "Digital Media and Production Team",
      count: "8 Members",
      badge: "MEDIA",
      members: [
        {
          name: "Tuhin Rakshit",
          role: "Media Lead",
          quote: "Capturing stories through the lens of creativity.",
          avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=150",
          socials: { linkedin: "#", instagram: "#" },
        },
        {
          name: "Ashmit Mudgal",
          role: "Media Co-Lead",
          quote: "Creating impact together behind the camera.",
          avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=150",
          socials: { linkedin: "#", instagram: "#" },
        },
        {
          name: "Eipshita Basuli",
          role: "Core Member",
          quote: "Freezing time and emotions into frames.",
          avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=150",
          socials: { linkedin: "#", instagram: "#" },
        },
        {
          name: "Kaushal Kant",
          role: "Core Member",
          quote: "VFX and video rendering wizard.",
          avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=150",
          socials: { linkedin: "#", github: "#" },
        },
        {
          name: "Anupriya",
          role: "Core Member",
          quote: "Creating stunning visual compositions.",
          avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=150",
          socials: { linkedin: "#", instagram: "#" },
        },
        {
          name: "Aditya Kumar",
          role: "Core Member",
          quote: "Master of audio layers and sound engineering.",
          avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150",
          socials: { linkedin: "#", instagram: "#" },
        },
        {
          name: "Shrenika Rajpoot",
          role: "Core Member",
          quote: "Focusing on storytelling through motion pictures.",
          avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150",
          socials: { linkedin: "#", instagram: "#" },
        },
        {
          name: "Deepti Singh",
          role: "Core Member",
          quote: "Designing rich cinematic cuts.",
          avatar: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=150",
          socials: { linkedin: "#", instagram: "#" },
        },
      ],
    },
  ];

  const handleScrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="w-full bg-[#0a0b0e] text-white flex flex-col min-h-screen pb-24">

      {/* Main Content Area */}
      <section className="relative w-full py-16 px-6 md:px-16 overflow-hidden flex-grow">
        {/* Background radial accent */}
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-purple-900/10 rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-6xl mx-auto flex flex-col gap-28 relative z-10">
          
          {/* Intro Section - Figma layout */}
          <div id="meet-matrix" className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start pt-8">
            <div className="lg:col-span-2 flex flex-col gap-6">
              <span className="text-xs font-bold text-purple-500 uppercase tracking-widest">
                01 / MEET THE MATRIX
              </span>
              <h2 className="text-4xl md:text-6xl font-black tracking-tight leading-none text-white">
                A club for the moment <br /> before the answer.
              </h2>
              <p className="text-gray-400 text-sm md:text-base leading-relaxed max-w-xl">
                We believe the best work happens when people from different disciplines share a table. A camera can become a research tool. A line of code can become a moving image. A first draft can become the reason a whole team starts talking.
              </p>
              <button
                onClick={() => handleScrollTo("leadership-anchor")}
                className="mt-4 flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#00F0FF] hover:text-white transition-colors duration-300 w-fit cursor-pointer"
              >
                Meet the people behind it 
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </div>

            {/* Figma-style quote list inside brackets */}
            <div className="flex flex-col text-gray-500 font-semibold text-sm leading-relaxed self-center border-l-2 border-purple-500/20 pl-8 py-4 select-none">
              <span className="text-xl font-bold text-purple-500 mb-2">[</span>
              <span className="hover:text-white transition-colors duration-300 cursor-default">Lean by doing.</span>
              <span className="hover:text-white transition-colors duration-300 cursor-default">Make room for others.</span>
              <span className="hover:text-white transition-colors duration-300 cursor-default">Leave the door open.</span>
              <span className="text-xl font-bold text-purple-500 mt-2">]</span>
            </div>
          </div>

          {/* Four Ideals Grid (Innovation, Mission, Vision, Community) */}
          <div id="values-section" className="flex flex-col gap-8 scroll-mt-24">
            <div className="flex justify-between items-end border-b border-white/5 pb-4">
              <span className="text-xs font-bold text-purple-500 uppercase tracking-widest">
                02 / THE VALUES
              </span>
              <span className="text-[10px] text-gray-500 font-bold uppercase tracking-widest">
                Four ways we show up for the work and for each other.
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Innovation Card (Left column - tall) */}
              <div className="md:col-span-1 md:row-span-2 p-8 rounded-3xl bg-[#D2F44E] text-[#0a0b0e] flex flex-col justify-between min-h-[420px] transition-all duration-300 hover:scale-[0.99] select-none">
                <span className="text-xs font-extrabold uppercase tracking-widest opacity-60">01</span>
                <div className="flex flex-col gap-4 mt-auto">
                  <h3 className="text-3xl font-black tracking-tight leading-none">Innovation</h3>
                  <p className="text-sm font-semibold leading-relaxed opacity-85">
                    We push past the first idea, then build the next version with curiosity and intent.
                  </p>
                </div>
              </div>

              {/* Mission Card (Right column, Row 1, Col 1) */}
              <div className="p-8 rounded-3xl bg-[#151D25] border border-[#232F3C] text-white flex flex-col justify-between min-h-[200px] transition-all duration-300 hover:scale-[0.99]">
                <span className="text-xs font-bold text-cyan-400 uppercase tracking-widest">02 / Mission</span>
                <p className="text-xs text-gray-300 leading-relaxed mt-4">
                  We give students a place to practice multimedia skills by making real things together.
                </p>
              </div>

              {/* Vision Card (Right column, Row 1, Col 2) */}
              <div className="p-8 rounded-3xl bg-[#E97A60] text-[#0a0b0e] flex flex-col justify-between min-h-[200px] transition-all duration-300 hover:scale-[0.99]">
                <span className="text-xs font-extrabold uppercase tracking-widest opacity-60">03 / Vision</span>
                <p className="text-xs font-bold leading-relaxed mt-4">
                  We bridge creativity and technology so every discipline gets a seat at the table.
                </p>
              </div>

              {/* Community Card (Right column, Row 2, spans 2 columns) */}
              <div className="md:col-span-2 p-8 rounded-3xl bg-[#1C2026] border border-white/5 text-white flex flex-col justify-between min-h-[190px] transition-all duration-300 hover:scale-[0.99]">
                <span className="text-xs font-bold text-purple-400 uppercase tracking-widest">04 / Community</span>
                <p className="text-sm text-gray-300 leading-relaxed mt-4 max-w-xl">
                  We make room for beginners, storytellers, and everyone still finding their medium.
                </p>
              </div>
            </div>
          </div>

          {/* Leadership Section */}
          <div id="leadership-anchor" className="flex flex-col gap-12 scroll-mt-24">
            <div className="flex flex-col gap-2">
              <span className="text-xs font-bold text-purple-500 uppercase tracking-widest">
                03 / THE EXECUTIVE COUNCIL
              </span>
              <h3 className="text-3xl font-extrabold tracking-tight">Executive Leadership</h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
              {leadership.map((member) => (
                <MemberCard
                  key={member.name}
                  name={member.name}
                  role={member.role}
                  quote={member.quote}
                  avatar={member.avatar}
                  badge={member.badge}
                  socials={member.socials}
                />
              ))}
            </div>
          </div>

          {/* Domain Divisions */}
          <div className="flex flex-col gap-20">
            {domains.map((domain, idx) => (
              <div key={domain.title} className="flex flex-col gap-10 border-t border-white/5 pt-12">
                <div className="flex justify-between items-center">
                  <div className="flex flex-col gap-1">
                    <span className="text-xs font-bold text-purple-500 uppercase tracking-widest">
                      04.{idx + 1} / DIVISION
                    </span>
                    <h3 className="text-2xl font-black tracking-tight">{domain.title}</h3>
                  </div>
                  <span className="text-[10px] text-gray-500 font-bold uppercase tracking-widest border border-white/10 px-3 py-1 rounded-full bg-[#12131a]/40">
                    {domain.count}
                  </span>
                </div>

                {/* Grid of Profile Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                  {domain.members.map((member) => (
                    <MemberCard
                      key={member.name}
                      name={member.name}
                      role={member.role}
                      quote={member.quote}
                      avatar={member.avatar}
                      badge={domain.badge}
                      socials={member.socials}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Join Matrix Club CTA */}
          <div
            id="join-cta"
            className="p-10 md:p-14 rounded-3xl bg-[#12131a] border border-white/5 text-center flex flex-col items-center gap-6 relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-32 h-32 bg-[#00F0FF]/5 rounded-full blur-3xl pointer-events-none" />
            <span className="text-xs font-bold text-cyan-400 uppercase tracking-widest">
              RECRUITMENTS
            </span>
            <h3 className="text-3xl md:text-5xl font-black tracking-tight text-white leading-none">
              Ready to Enter the Matrix?
            </h3>
            <p className="text-gray-400 max-w-xl text-xs md:text-sm leading-relaxed">
              Become part of VIT Bhopal's premier multimedia community. Whether you're passionate about design, development, content, or event management — apply now to connect with the core team.
            </p>
            <button
              className="px-8 py-3.5 rounded-full font-bold text-xs tracking-widest bg-white text-black hover:bg-[#D2F44E] hover:scale-105 transition-all duration-300 uppercase shadow-md shadow-white/5 cursor-pointer"
            >
              Apply to Join
            </button>
          </div>

        </div>
      </section>

    </div>
  );
};

export default AboutUs;
