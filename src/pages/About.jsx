// Studio Commons direction: editorial hierarchy, graphite + warm ivory surfaces, signal-lime accents, asymmetrical composition, and human-first storytelling.
import "./About.css";
import { useMemo, useState } from "react";
import {
  ArrowDown,
  ArrowUpRight,
  Camera,
  Code2,
  Heart,
  Link,
  Menu,
  MoveRight,
  Palette,
  Radio,
  Sparkles,
  Users,
  X,
} from "lucide-react";

const heroImage = "https://matrix-multimedia-club.netlify.app/MATRIX.png";
const workshopImage = "https://matrix-multimedia-club.netlify.app/people.png";
const nightLabImage = "https://matrix-multimedia-club.netlify.app/MOBILEPEN.png";
const markImage = "/matrix-logo.jpeg";
const footerObjectImage = "https://matrix-multimedia-club.netlify.app/BULB.png";

const values = [
  {
    index: "01",
    icon: Sparkles,
    title: "Innovation",
    body: "We push past the first idea, then build the next version with curiosity and intent.",
    tone: "lime",
  },
  {
    index: "02",
    icon: Radio,
    title: "Mission",
    body: "We give students a place to practise multimedia skills by making real things together.",
    tone: "paper",
  },
  {
    index: "03",
    icon: Camera,
    title: "Vision",
    body: "We bridge creativity and technology so every discipline gets a seat at the table.",
    tone: "ink",
  },
  {
    index: "04",
    icon: Heart,
    title: "Community",
    body: "We make room for beginners, specialists, and everyone still finding their medium.",
    tone: "paper",
  },
];

const fallbackMemberImage = "https://res.cloudinary.com/dfc9sgywk/image/upload/f_auto,q_auto,w_560,h_560,c_fill,g_face/matrix-club/team/technical/AyushGupta";
const team = [
  {
    name: "Yuva Bharti",
    role: "President",
    department: "Leadership",
    image: "https://res.cloudinary.com/dfc9sgywk/image/upload/f_auto,q_auto,w_560,h_560,c_fill,g_face/matrix-club/team/president/YuvaBharti",
    quote: "Leadership is a practice of imperfect humans leading imperfect humans.",
    links: [
      { label: "LinkedIn", href: "https://www.linkedin.com/in/yuva-bharti-bansal/" },
      { label: "Instagram", href: "https://www.instagram.com/yuvabbansal" },
    ],
  },
  {
    name: "Darshan V",
    role: "Vice President",
    department: "Leadership",
    image: "https://res.cloudinary.com/dfc9sgywk/image/upload/f_auto,q_auto,w_560,h_560,c_fill,g_face/matrix-club/team/president/darshanV",
    quote: "Vetrivel Veeravel.",
    links: [
      { label: "LinkedIn", href: "https://www.linkedin.com/in/darshanv1/" },
      { label: "GitHub", href: "https://github.com/TheHashiramaSenju" },
    ],
  },
  {
    name: "Nikhil Mohammed",
    role: "General Secretary",
    department: "Leadership",
    image: "https://res.cloudinary.com/dfc9sgywk/image/upload/f_auto,q_auto,w_560,h_560,c_fill,g_face/matrix-club/team/design/NikhilMohammed",
    quote: "Design team — your idea, our canvas.",
    links: [
      { label: "LinkedIn", href: "https://www.linkedin.com/in/nikhil-mohammed" },
      { label: "Instagram", href: "https://www.instagram.com/nikhil.mohammed" },
    ],
  },
  {
    name: "Piyush Kumar Singh",
    role: "Operation Manager",
    department: "Leadership",
    image: "https://res.cloudinary.com/dfc9sgywk/image/upload/f_auto,q_auto,w_560,h_560,c_fill,g_face/matrix-club/team/managers/PiyushKumarSingh",
    quote: "Connecting teams. Building systems. Delivering results.",
    links: [
      { label: "LinkedIn", href: "https://www.linkedin.com/in/piyush-kumar-singh-b53749313/" },
      { label: "Instagram", href: "https://www.instagram.com/signature.piyush_/" },
    ],
  },
  {
    name: "Vishwajeet Pratap Singh",
    role: "Technical Lead",
    department: "Technical",
    image: "https://res.cloudinary.com/dfc9sgywk/image/upload/f_auto,q_auto,w_560,h_560,c_fill,g_face/matrix-club/team/technical/Vishwajeet",
    quote: "If it’s not broken, give it time… we’ll fix it anyway.",
    links: [
      { label: "LinkedIn", href: "https://www.linkedin.com/in/v7ksr/" },
      { label: "GitHub", href: "https://github.com/vKS-Rajput" },
    ],
  },
  {
    name: "Deepak Shukla",
    role: "Technical Co-Lead",
    department: "Technical",
    image: "https://res.cloudinary.com/dfc9sgywk/image/upload/f_auto,q_auto,w_560,h_560,c_fill,g_face/matrix-club/team/technical/DeepakShukla",
    quote: "Crafting full-stack experiences and teaching machines to read.",
    links: [
      { label: "LinkedIn", href: "https://www.linkedin.com/in/deepak-shukla-27a60628a/" },
      { label: "GitHub", href: "https://github.com/deepak-158" },
    ],
  },
  {
    name: "Arav Acharya",
    role: "Core Member",
    department: "Technical",
    image: "https://res.cloudinary.com/dfc9sgywk/image/upload/f_auto,q_auto,w_560,h_560,c_fill,g_face/matrix-club/team/technical/AravAchari",
    quote: "Turning caffeine into code — full stack and generative AI.",
    links: [
      { label: "LinkedIn", href: "https://www.linkedin.com/in/arav-achari-115715281/" },
      { label: "Instagram", href: "https://www.instagram.com/_arav_acharya_" },
    ],
  },
  {
    name: "Sarthak Jalan",
    role: "Core Member",
    department: "Technical",
    image: "https://res.cloudinary.com/dfc9sgywk/image/upload/f_auto,q_auto,w_560,h_560,c_fill,g_face/matrix-club/team/technical/SarthakJalan",
    quote: "Cloud and backend — deploying dreams, not just servers.",
    links: [
      { label: "LinkedIn", href: "https://www.linkedin.com/in/sarthak-jalan-7685a7285/" },
      { label: "GitHub", href: "https://github.com/sarthakjalan05" },
    ],
  },
  {
    name: "Bhumika Verma",
    role: "Core Member",
    department: "Technical",
    image: "https://res.cloudinary.com/dfc9sgywk/image/upload/f_auto,q_auto,w_560,h_560,c_fill,g_face/matrix-club/team/technical/BhumikaVerma",
    quote: "Coding the future, one line at a time.",
    links: [
      { label: "LinkedIn", href: "https://www.linkedin.com/in/bhumika-verma-648b9121b/" },
      { label: "GitHub", href: "https://github.com/bhumikaverma05" },
    ],
  },
  {
    name: "Sreelakshmi A",
    role: "Core Member",
    department: "Technical",
    image: "https://res.cloudinary.com/dfc9sgywk/image/upload/f_auto,q_auto,w_560,h_560,c_fill,g_face/matrix-club/team/technical/Sreelakshmi",
    quote: "Training my future, one epoch at a time.",
    links: [{ label: "LinkedIn", href: "https://www.linkedin.com/in/sreelakshmi-a-69100b296" }],
  },
  {
    name: "Ayush Gupta",
    role: "Core Member",
    department: "Technical",
    image: "https://res.cloudinary.com/dfc9sgywk/image/upload/f_auto,q_auto,w_560,h_560,c_fill,g_face/matrix-club/team/technical/AyushGupta",
    quote: "Building scalable solutions and debugging life, one commit at a time.",
    links: [
      { label: "LinkedIn", href: "https://www.linkedin.com/in/ayushkathil/" },
      { label: "Instagram", href: "https://www.instagram.com/ayush_kathil/" },
    ],
  },
  ...[
    ["Deepak Singh", "Technical"], ["Vaishnavi Sagar Jadhav", "Technical"], ["Rakshit Raj", "Technical"],
    ["Anushka", "Design"], ["Rupankita Baruah", "Design"], ["Diya Gugale", "Design"],
    ["Tuhin Rakshit", "Content"], ["Ashmit Mudgal", "Content"], ["Eipshita Basuli", "Content"],
    ["Kaushal Kant", "Event Management"], ["Anupriya", "Content"], ["Aditya Kumar", "Technical"],
    ["Shrenika Rajpoot", "Design"], ["Deepti Singh", "Event Management"], ["Shivang Saini", "Technical"],
    ["Abhishek Mishra", "Technical"], ["Ayush Upadhyay", "Event Management"], ["Aryan Mishra", "Event Management"],
    ["Kashish Raj", "Design"], ["Tanisha Verma", "Design"], ["Mohammed Kaif", "Event Management"],
    ["Akshat Mishra", "Technical"], ["Yash Saxena", "Event Management"], ["K Kashyap", "Technical"],
    ["Gaurav Singh", "Event Management"], ["Nishita Gupta", "Design"], ["Lakshmi Hridyesha Peddinti", "Content"],
    ["Aditi Sinha", "Design"], ["Abdul Samad Khan", "Event Management"],
  ].map(([name, department]) => ({
    name,
    role: "Core Member",
    department: department,
    image: "",
    quote: "Making the next version better, together.",
    links: [],
  })),
];

const filters = ["All", "Leadership", "Technical", "Design", "Content", "Event Management"];

function getInitials(name) {
  return name.split(" ").map((part) => part[0]).slice(0, 2).join("").toUpperCase();
}

function ScrollLink({ href, children, onClick }) {
  return (
    <a className="nav-link" href={href} onClick={onClick}>
      {children}
    </a>
  );
}

export default function About() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [menuOpen, setMenuOpen] = useState(false);

  const visibleTeam = useMemo(
    () => (activeFilter === "All" ? team : team.filter((member) => member.department === activeFilter)),
    [activeFilter],
  );

  const teamGroups = (activeFilter === "All" ? filters.slice(1) : [activeFilter])
    .map((department) => ({ department, members: team.filter((member) => member.department === department) }))
    .filter((group) => group.members.length > 0);
  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="site-shell" id="top">

      <header className="site-nav">
        <div className="container nav-inner">
          <a className="brand" href="/" aria-label="The Matrix Club home">
            <span className="brand-mark-wrap">
              <img src={markImage} alt="" className="brand-mark" />
            </span>
            <span className="brand-copy">
              <span>THE MATRIX</span>
              <strong>CLUB</strong>
            </span>
          </a>

          <nav className={menuOpen ? "nav-links is-open" : "nav-links"} aria-label="Primary navigation">
            <ScrollLink href="#about" onClick={closeMenu}>About Us</ScrollLink>
            <ScrollLink href="#values" onClick={closeMenu}>Values</ScrollLink>
            <ScrollLink href="#team" onClick={closeMenu}>Team</ScrollLink>
          </nav>

          <button
            type="button"
            className="menu-toggle"
            aria-expanded={menuOpen}
            aria-label={menuOpen ? "Close navigation" : "Open navigation"}
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </header>

      <main>
        <section className="manifesto-section" id="about">
          <div className="container manifesto-grid">
            <div className="section-kicker"><span>01</span><span>WHY WE EXIST</span></div>
            <div className="manifesto-copy">
              <p className="manifesto-lede">A club for the moment before the answer.</p>
              <p>
                We believe the best work happens when people from different disciplines share a table. A camera can become a research tool. A line of code can become a moving image. A first draft can become the reason a whole team starts talking.
              </p>
              <a className="text-link" href="#team">Meet the people behind it <ArrowUpRight size={16} /></a>
            </div>
            <div className="manifesto-note">
              <span className="note-mark">[</span>
              <p>Learn by doing.<br />Make room for others.<br />Leave the door open.</p>
              <span className="note-mark">]</span>
            </div>
          </div>
        </section>

        <section className="values-section" id="values">
          <div className="container">
            <div className="section-header">
              <div className="section-kicker"><span>02</span><span>THE SIGNAL</span></div>
              <p className="section-aside">Four ways we show up<br />for the work and for each other.</p>
            </div>
            <div className="values-grid">
              {values.map(({ index, icon: Icon, title, body, tone }) => (
                <article className={`value-card value-${tone}`} key={title}>
                  <div className="value-topline"><span>{index}</span><Icon size={22} strokeWidth={1.7} /></div>
                  <h2>{title}</h2>
                  <p>{body}</p>
                  <span className="value-arrow"><ArrowUpRight size={17} /></span>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="team-section" id="team">
          <div className="container">
            <div className="team-heading-row">
              <div>
                <div className="section-kicker"><span>03</span><span>WHO MAKES IT HAPPEN</span></div>
                <h2 className="section-title">Meet the<br /><span>team.</span></h2>
              </div>
              <div className="team-heading-copy">
                <p>People with different tools, different instincts, and one shared habit: making the next version better.</p>
                <span className="team-count">{visibleTeam.length.toString().padStart(2, "0")} people in view</span>
              </div>
            </div>

            <div className="team-toolbar" aria-label="Filter team by department">
              <span className="toolbar-label">Browse by practice</span>
              <div className="filter-list">
                {filters.map((filter) => (
                  <button
                    type="button"
                    key={filter}
                    className={activeFilter === filter ? "filter-button active" : "filter-button"}
                    onClick={() => setActiveFilter(filter)}
                    aria-pressed={activeFilter === filter}
                  >
                    {filter}
                  </button>
                ))}
              </div>
            </div>

            <div className="team-groups">
              {teamGroups.map((group) => (
                <section className="team-group" key={group.department} aria-labelledby={`team-${group.department}`}>
                  <div className="team-group-heading">
                    <span className="team-group-number">{String(filters.indexOf(group.department)).padStart(2, "0")}</span>
                    <h3 id={`team-${group.department}`}>{group.department}</h3>
                    <span>{group.members.length.toString().padStart(2, "0")} members</span>
                  </div>
                  <div className="team-grid">
                    {group.members.map((member) => (
                      <article className="team-card" key={member.name}>
                        <div className="team-photo-wrap">
                          {member.image ? (
                            <img src={member.image} alt={`${member.name}, ${member.role}`} className="team-photo" loading="lazy" />
                          ) : (
                            <div className="team-initial-avatar" aria-label={`${member.name}, ${member.role}`}>
                              <span>{getInitials(member.name)}</span>
                            </div>
                          )}
                          <span className="team-department">{member.department}</span>
                        </div>
                        <div className="team-card-body">
                          <div className="team-name-line">
                            <div>
                              <h4>{member.name}</h4>
                              <p>{member.role}</p>
                            </div>
                            <ArrowUpRight size={18} />
                          </div>
                          <p className="team-quote">“{member.quote}”</p>
                          <div className="team-links">
                            {member.links.map((link) => (
                              <a key={link.label} href={link.href} target="_blank" rel="noreferrer" aria-label={`${member.name} ${link.label}`}>
                                {link.label === "LinkedIn" ? <Link size={13} /> : <ArrowUpRight size={13} />}
                                {link.label}
                              </a>
                            ))}
                          </div>
                        </div>
                      </article>
                    ))}
                  </div>
                </section>
              ))}
            </div>
          </div>
        </section>

      </main>

      <footer className="site-footer" id="footer">
        <div className="container footer-top">
          <a className="brand footer-brand" href="/" aria-label="The Matrix Club home">
            <span className="brand-mark-wrap"><img src={markImage} alt="" className="brand-mark" /></span>
            <span className="brand-copy"><span>THE MATRIX</span><strong>CLUB</strong></span>
          </a>
          <p className="footer-statement">Creativity meets technology<br />at VIT Bhopal.</p>
          <div className="footer-links">
            <a href="#about">About</a><a href="#values">Values</a><a href="#team">Team</a>
          </div>
        </div>
        <div className="container footer-bottom">
          <span>© 2026 The Matrix Club</span>
          <span>Built by the people in the room <span className="footer-cross">+</span></span>
          <div className="footer-socials"><a href="https://www.instagram.com" target="_blank" rel="noreferrer">Instagram</a><a href="https://www.linkedin.com" target="_blank" rel="noreferrer">LinkedIn</a></div>
        </div>
      </footer>
    </div>
  );
}
