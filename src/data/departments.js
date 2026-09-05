export const DEPARTMENTS = [
  {
    id: 'technical',
    name: 'Technical',
    badgeLabel: 'TECHNICAL',
    trackId: 'core_builder',
    trackName: 'CORE BUILDER',
    slideTag: 'Slide 16:9 - 4',
    badgeBgColor: '#cbe7e7',
    badgeAccentColor: '#0d9488',
    tagline:
      'Architecting the digital foundation and intelligent software systems of The Matrix.',
    description:
      'The Technical division is the engine behind all Matrix products, algorithms, and infrastructure. From high-performance web systems and AI microservices to real-time pipelines and hardware integrations, we turn ambitious ideas into robust reality.',
    tools: [
      'React / Next.js',
      'TypeScript',
      'Node.js & Python',
      'Docker & Kubernetes',
      'PostgreSQL',
      'Tailwind CSS',
      'Git & CI/CD'
    ],
    perks: [
      'Top-tier dev hardware & cloud compute stipends',
      'Mentorship from senior software engineers & tech leads',
      'Hands-on architecture reviews and real production scale',
      'Hackathons, open-source sponsorship, and Matrix gear'
    ],
    roles: [
      {
        id: 'fullstack-dev',
        title: 'Full Stack Engineer',
        type: 'Full-time',
        openPositions: 3,
        experienceLevel: 'Intermediate',
        tags: ['React', 'TypeScript', 'Node.js', 'Tailwind'],
        summary:
          'Build high-performance web applications, responsive user interfaces, and resilient backend endpoints.',
        responsibilities: [
          'Design and implement fluid frontend interfaces and robust microservices',
          'Optimize rendering performance, bundle sizes, and state synchronization',
          'Participate in code reviews and collaborate closely with product designers'
        ],
        requirements: [
          'Strong proficiency in modern TypeScript, React, and REST/GraphQL APIs',
          'Familiarity with SQL/NoSQL databases and component-driven architecture',
          'Passion for clean code, automated testing, and developer ergonomics'
        ]
      },
      {
        id: 'systems-architect',
        title: 'Systems & Cloud Architect',
        type: 'Full-time',
        openPositions: 2,
        experienceLevel: 'Advanced',
        tags: ['DevOps', 'Docker', 'Kubernetes', 'Cloud Infra'],
        summary:
          'Own the infrastructure, deployment automation, and scaling reliability of the Matrix ecosystem.',
        responsibilities: [
          'Design resilient cloud topologies with automated rollouts and zero-downtime deployments',
          'Implement observability, logging, and performance alert systems',
          'Harden cluster security and streamline developer environments'
        ],
        requirements: [
          'Experience configuring Linux server environments and container orchestration',
          'Proficiency with CI/CD automation pipelines and infrastructure as code',
          'Deep understanding of networking protocols, latency, and caching strategies'
        ]
      },
      {
        id: 'ai-automation',
        title: 'AI & Automation Specialist',
        type: 'Fellowship',
        openPositions: 2,
        experienceLevel: 'Intermediate',
        tags: ['Python', 'LLMs', 'Prompt Engineering', 'LangChain'],
        summary:
          'Pioneer next-generation generative AI integrations, internal agent tooling, and autonomous workflows.',
        responsibilities: [
          'Build practical LLM-powered tools to accelerate Matrix team operations',
          'Evaluate model performance, fine-tuning opportunities, and prompt architectures',
          'Integrate intelligent recommendations into core member workflows'
        ],
        requirements: [
          'Comfortable working with modern AI APIs and Python/TypeScript SDKs',
          'Knowledge of vector embeddings, context management, and safety guardrails',
          'Creative problem solver eager to prototype rapidly'
        ]
      }
    ]
  },

  {
    id: 'design',
    name: 'Design',
    badgeLabel: 'DESIGN',
    trackId: 'core_builder',
    trackName: 'CORE BUILDER',
    slideTag: 'Slide 16:9 - 4',
    badgeBgColor: '#f9cea6',
    badgeAccentColor: '#ea580c',
    tagline:
      'Crafting mesmerizing visual identities, intuitive interfaces, and tactile motion.',
    description:
      'The Design team shapes the sensory aesthetic of The Matrix. We turn complex flows into seamless, frictionless user experiences while developing a signature visual language that stands out across digital surfaces, brand assets, and physical merchandise.',
    tools: [
      'Figma',
      'Adobe Creative Suite',
      'Spline 3D',
      'After Effects',
      'Rive Motion',
      'Pen & Paper Doodling'
    ],
    perks: [
      'Design software subscriptions & high-res monitor allowance',
      'Direct ownership of product aesthetic and brand evolution',
      'Creative freedom to experiment with custom animations and tactile design',
      'Collaboration with world-class engineers to bring designs to pixel perfection'
    ],
    roles: [
      {
        id: 'ui-ux-designer',
        title: 'UI/UX & Product Designer',
        type: 'Full-time',
        openPositions: 2,
        experienceLevel: 'Intermediate',
        tags: ['Figma', 'Design Systems', 'User Research', 'Prototyping'],
        summary:
          'Lead end-to-end user journeys, create design tokens, and deliver intuitive, accessible digital experiences.',
        responsibilities: [
          'Craft wireframes, interactive prototypes, and modular Figma design systems',
          'Conduct user testing sessions to uncover friction and validate design decisions',
          'Collaborate with front-end engineers during design handover and QA passes'
        ],
        requirements: [
          'Proven portfolio demonstrating high-fidelity UI design and user flow clarity',
          'Deep appreciation for typography, visual hierarchy, spacing, and micro-interactions',
          'Strong communication skills to articulate design rationales'
        ]
      },
      {
        id: 'brand-motion-artist',
        title: 'Brand & Motion Designer',
        type: 'Part-time',
        openPositions: 2,
        experienceLevel: 'Intermediate',
        tags: ['Motion', 'After Effects', 'Illustration', '3D'],
        summary:
          'Bring the Matrix brand to life through playful illustrations, animated graphics, and cinematic promotional videos.',
        responsibilities: [
          'Create distinctive brand illustrations, badge stickers, and graphic assets',
          'Produce kinetic motion graphics and animated teasers for product launches',
          'Maintain visual brand guidelines across digital, social, and print media'
        ],
        requirements: [
          'Portfolio showing fluid 2D/3D motion graphics and illustration versatility',
          'Proficiency with After Effects, Premiere, Illustrator, or 3D tools (Blender/Spline)',
          'Eye for timing, easing, and playful storytelling'
        ]
      }
    ]
  },

  {
    id: 'pr_outreach',
    name: 'PR & Outreach',
    badgeLabel: 'PR & OUTREACH',
    trackId: 'voice_of_the_matrix',
    trackName: 'VOICE OF THE MATRIX',
    slideTag: 'Slide 16:9 - 5',
    badgeBgColor: '#fbe9c4',
    badgeAccentColor: '#ca8a04',
    tagline:
      'Bridging the Matrix with external communities, institutional partners, and talent.',
    description:
      'The PR & Outreach division amplifies our message across the globe. We build strategic alliances with technology ecosystems, manage press releases, orchestrate flagship meetups and hackathons, and recruit passionate builders into our collaborative circle.',
    tools: [
      'Notion',
      'HubSpot / CRM',
      'Discord & Slack',
      'Google Workspace',
      'Eventbrite & Luma',
      'Public Speaking'
    ],
    perks: [
      'Travel and networking stipends for major tech conferences',
      'Direct interaction with ecosystem leaders, founders, and sponsors',
      'Exclusive event hosting budgets and community swag kits',
      'Leadership training in public relations and strategic communications'
    ],
    roles: [
      {
        id: 'community-lead',
        title: 'Ecosystem & Community Lead',
        type: 'Full-time',
        openPositions: 2,
        experienceLevel: 'Intermediate',
        tags: ['Community', 'Discord', 'Event Hosting', 'Moderation'],
        summary:
          'Nurture an energetic, supportive community of developers, designers, and innovators passionate about The Matrix.',
        responsibilities: [
          'Organize virtual town halls, workshops, demo days, and office hours',
          'Foster daily engagement, discussions, and welcome rituals in community channels',
          'Gather community feedback and advocate for user needs to core builders'
        ],
        requirements: [
          'Experience cultivating active online or campus technical communities',
          'Empathetic communicator with natural enthusiasm and moderation tact',
          'Resourcefulness in organizing engaging virtual and physical gatherings'
        ]
      },
      {
        id: 'partnerships-lead',
        title: 'Strategic Partnerships & Sponsorships',
        type: 'Part-time',
        openPositions: 1,
        experienceLevel: 'Advanced',
        tags: ['Partnerships', 'Fundraising', 'Outreach', 'Negotiation'],
        summary:
          'Establish win-win collaborations with tech corporations, venture studios, university clubs, and event sponsors.',
        responsibilities: [
          'Identify and pitch prospective sponsors and academic collaborators',
          'Draft partnership agreements and ensure fulfillment of mutual deliverables',
          'Represent The Matrix at flagship conferences, career fairs, and symposiums'
        ],
        requirements: [
          'Demonstrated track record in outreach, sponsorship acquisition, or business dev',
          'Professional demeanor, exceptional pitch presentation skills, and follow-through',
          'Strong network within technology, startup, or educational circles'
        ]
      }
    ]
  },

  {
    id: 'social_media',
    name: 'Social Media',
    badgeLabel: 'SOCIAL MEDIA',
    trackId: 'voice_of_the_matrix',
    trackName: 'VOICE OF THE MATRIX',
    slideTag: 'Slide 16:9 - 5',
    badgeBgColor: '#d4dcf7',
    badgeAccentColor: '#4f46e5',
    tagline:
      'Commanding feeds with viral tech content, clever memes, and insightful storytelling.',
    description:
      'The Social Media crew governs our digital voice across X (Twitter), LinkedIn, Instagram, TikTok, and YouTube. We translate complex engineering milestones and design breakthroughs into captivating, snackable stories that educate, entertain, and inspire thousands of followers.',
    tools: [
      'X / Twitter',
      'LinkedIn Creator',
      'CapCut & Premiere',
      'Canva / Figma',
      'Buffer / Hootsuite',
      'Analytics Dashboards'
    ],
    perks: [
      'Dedicated creative equipment & mobile production gear',
      'Creative autonomy to pioneer viral trends and unique voice',
      'Access to exclusive product leaks and behind-the-scenes engineering',
      'Performance bonuses based on audience growth and engagement milestones'
    ],
    roles: [
      {
        id: 'content-creator',
        title: 'Short-Form Video & Content Creator',
        type: 'Full-time',
        openPositions: 2,
        experienceLevel: 'Intermediate',
        tags: ['Reels', 'TikTok', 'Video Editing', 'Storytelling'],
        summary:
          'Film, script, and edit high-velocity short-form tech reels, day-in-the-life clips, and product breakdowns.',
        responsibilities: [
          'Script and produce 3-5 high-engagement reels/TikToks per week highlighting Matrix projects',
          'Monitor trending audio, memes, and tech culture formats to jump on relevant conversations',
          'Collaborate with developers to explain intricate technical concepts simply and humorously'
        ],
        requirements: [
          'Proven portfolio of published reels, shorts, or TikToks with strong audience retention',
          'Fast-paced editing skills (CapCut, Premiere, or DaVinci Resolve)',
          'High energy on-camera presence or creative voiceover capability'
        ]
      },
      {
        id: 'growth-copywriter',
        title: 'Tech Copywriter & Growth Hacker',
        type: 'Part-time',
        openPositions: 2,
        experienceLevel: 'Intermediate',
        tags: ['X / Threads', 'LinkedIn', 'Copywriting', 'SEO & Viral Hooks'],
        summary:
          'Write irresistible hooks, insightful technical threads, and launch announcements that drive massive clicks.',
        responsibilities: [
          'Draft engaging daily updates, thought leadership articles, and developer memes',
          'Optimize post distribution times, hashtag strategies, and audience engagement loops',
          'Analyze engagement analytics to continuously refine our content playbook'
        ],
        requirements: [
          'Exceptional writing skill with the ability to explain tech jargon clearly',
          'Deep understanding of Twitter/X algorithms, LinkedIn engagement, and viral psychology',
          'Data-driven mindset with obsession over CTR, impressions, and follower sentiment'
        ]
      }
    ]
  },

  {
    id: 'event',
    name: 'Event',
    badgeLabel: 'EVENT',
    trackId: 'experience_creators',
    trackName: 'EXPERIENCE CREATORS',
    badgeBgColor: '#fde047',
    badgeAccentColor: '#ca8a04',
    tagline:
      'Orchestrating unforgettable tech meetups, hackathons, and immersive flagship experiences.',
    description:
      'The Event division designs and executes high-energy hackathons, technical workshops, live demo days, and annual Matrix summits that connect hundreds of developers and creators.',
    tools: [
      'Luma & Eventbrite',
      'Notion Logistics',
      'Venue Management',
      'Audio / Visual Setup',
      'Budget Planning'
    ],
    perks: [
      'VIP access to major tech summits & conferences',
      'Event hosting budgets and exclusive Matrix team merchandise',
      'Hands-on experience managing large-scale live productions'
    ],
    roles: []
  },

  {
    id: 'content',
    name: 'Content',
    badgeLabel: 'CONTENT',
    trackId: 'experience_creators',
    trackName: 'EXPERIENCE CREATORS',
    badgeBgColor: '#fbcfe8',
    badgeAccentColor: '#db2777',
    tagline:
      'Scripting narratives, publishing editorial pieces, and filming cinematic stories.',
    description:
      'The Content division crafts compelling written articles, podcasts, video scripts, and newsletter releases that document the evolution of Matrix and educate our community.',
    tools: [
      'Notion Editorial',
      'Grammarly Pro',
      'DaVinci / Premiere',
      'Podcast Recording Setup',
      'Substack & Medium'
    ],
    perks: [
      'Creative editorial freedom on topics you are passionate about',
      'Production gear and software subscriptions',
      'Byline exposure to thousands of readers worldwide'
    ],
    roles: []
  },

  {
    id: 'finance',
    name: 'Finance',
    badgeLabel: 'FINANCE',
    trackId: 'the_backbone',
    trackName: 'THE BACKBONE',
    badgeBgColor: '#bbf7d0',
    badgeAccentColor: '#16a34a',
    tagline:
      'Managing fiscal allocation, sponsorship budgets, and financial infrastructure.',
    description:
      'The Finance team stewards Matrix funds, oversees event stipends, handles sponsorship invoices, and plans long-term fiscal strategy to ensure club sustainability.',
    tools: [
      'QuickBooks',
      'Excel / Sheets',
      'Stripe & Banking APIs',
      'Financial Modeling',
      'Budget Auditing'
    ],
    perks: [
      'Direct experience managing real organization capital',
      'Sponsorship negotiation exposure with industry sponsors',
      'Mentorship from corporate finance and fintech leads'
    ],
    roles: []
  }
];


export const MATRIX_STATS = [
  { label: 'Core Departments', value: '4' },
  { label: 'Open Positions', value: '15+' },
  { label: 'Global Members', value: '120+' },
  { label: 'Accepted Tracks', value: '100% Remote' }
];

export const MATRIX_PERKS_GENERAL = [
  {
    title: 'Work With High-Caliber Builders',
    desc:
      'Surround yourself with passionate engineers, designers, and operators who push boundaries every day.'
  },
  {
    title: 'Real World Impact',
    desc:
      'Your code, designs, and content are shipped directly to tens of thousands of active users worldwide.'
  },
  {
    title: 'Flexible Remote Culture',
    desc:
      'Work asynchronously from anywhere in the world on a schedule built for deep focus and autonomy.'
  },
  {
    title: 'Career Acceleration',
    desc:
      'Matrix alumni frequently land senior positions at top tech firms, unicorn startups, and research labs.'
  }
];