// Portfolio mock data for Krishaa Ravishankar
// All content is frontend-only for now; will move to backend later.

export const personal = {
  name: "Krishaa Ravishankar",
  firstName: "Krishaa",
  role: "UX / Service Designer",
  tagline: "your design team's newest member, XD!",
  emoji: "\uD83D\uDC4B",
  location: "Bangalore, India",
  email: "k.ravishankar@strate.design",
  phone: "+91 94839 00764",
  linkedin: "https://www.linkedin.com/in/krishaa-ravishankar",
  pitch:
    "I take complex problems and craft seamless solutions that work beautifully\u2014 whether you're holding it or clicking it.",
  longIntro:
    "I started in product design, then dove into UX on my own \u2014 and that's when I discovered my superpower: seeing how physical and digital experiences connect. I love untangling complex problems, spotting the patterns others miss, and designing holistic experiences that just work.",
  happyPlace: "Solving problems, my happy place!",
};

export const funFacts = [
  { label: "currently vibing in", value: "Bangalore\u2009\u2614" },
  { label: "coffee count today", value: "3 \u2014 send help" },
  { label: "favorite word", value: "why?" },
  { label: "design playlist", value: "lo-fi + Tame Impala" },
];

export const brainPieces = [
  { label: "User journey mapping", value: 32, color: "#E8532C" },
  { label: "Whiteboarding in my mind", value: 22, color: "#2D5F3F" },
  { label: "Questioning everything around me", value: 20, color: "#D9A441" },
  { label: "UX evaluation & testing", value: 11, color: "#4A6FA5" },
  { label: "Future casting", value: 7, color: "#A04668" },
  { label: "Mental mixtape", value: 5, color: "#6B4F8F" },
  { label: "Hunger pangs", value: 3, color: "#C45A3F" },
];

export const skills = {
  core: [
    "User Research",
    "Interaction Design",
    "Usability Testing",
    "Wireframing & Prototyping",
    "Design Thinking",
    "Journey Mapping",
    "System Design",
    "Storytelling",
  ],
  software: ["Figma", "Adobe Illustrator", "Procreate", "Miro"],
};

export const experience = [
  {
    company: "Harman Connected Services",
    role: "Associate Designer",
    period: "Nov 2024 \u2014 Present",
    blurb: "Crafting in-car and connected-product experiences.",
  },
  {
    company: "Bosch Siemens Home Appliances",
    role: "Design Intern",
    period: "Jul 2022 \u2014 May 2024",
    blurb: "Appliance UX + service touchpoints for home cooks.",
  },
  {
    company: "Futuring Design Pvt Ltd",
    role: "Design Intern",
    period: "Feb \u2014 Jul 2022",
    blurb: "Future-forward concepting & scenario building.",
  },
  {
    company: "Newcycl / Rawbin",
    role: "Freelance Designer",
    period: "2021 \u2014 2024",
    blurb: "Brand + UX for circular-economy startups.",
  },
  {
    company: "Think Ocean India",
    role: "Design Intern",
    period: "Apr \u2014 Jun 2021",
    blurb: "Awareness campaigns for marine conservation.",
  },
];

export const collaborations = [
  {
    brand: "IKEA",
    year: "2024",
    label: "Selective Student Project",
    role: "Research Plan, Primary & Secondary Research, Report Creation & Service Strategy",
  },
  {
    brand: "Alstom",
    year: "2023",
    label: "Shortlisted for Development",
    role: "Research Methodology, AI Explorations, Analysis & CMF Strategy, Service Mapping",
  },
  {
    brand: "Decathlon",
    year: "2021",
    label: "Shortlisted for Development",
    role: "Context Setting, Secondary Research, Ideation & Quick Prototyping",
  },
];

export const community = [
  {
    title: "Speaker \u2014 W Summit x Accenture Song",
    date: "March 2025",
    detail: "Invited to speak on service design for the next billion users.",
  },
  {
    title: "Bangalore Ambassador \u2014 UX India (Umo Design Foundation)",
    date: "Sep 2023 \u2014 Present",
    detail: "Speaker interviews, social creatives, event planning & management.",
  },
];

export const education = [
  { degree: "M.Sc Design", school: "Strate School of Design", period: "2022 \u2014 2024" },
  { degree: "B.Sc Design", school: "Strate School of Design", period: "2019 \u2014 2022" },
];

export const projects = [
  {
    id: "propark",
    number: "01",
    title: "ProPark",
    subtitle: "Turning idle driveways into parking gold.",
    description:
      "A peer-to-peer platform that connects everyday space owners with drivers hunting for convenient, affordable parking \u2014 tackling India's brutal parking math (1 spot for every 3,650 cars).",
    role: "Solo \u2022 UX Design",
    duration: "1 week sprint",
    year: "2024",
    tags: ["Mobile App", "Sharing Economy", "Urban Mobility"],
    accent: "#E8532C",
    bg: "#F3E7D9",
    hmw:
      "How might we make parking spaces more accessible in urban cities by unlocking unused private parking spots \u2014 reducing frustration and turning idle space into opportunity?",
    context: [
      "Indian cities have ~1 parking spot for every 3,650 cars.",
      "Residents sit on unused driveways while drivers circle for 20+ minutes.",
      "\u2018Jugaad\u2019 parking culture creates chaos, fines, and lost income.",
    ],
    process: [
      { step: "Empathise", note: "Interviewed residents (space providers) & drivers (space seekers)." },
      { step: "Define", note: "Mapped drivers & inhibitors for both sides of the marketplace." },
      { step: "Structure", note: "Built an information architecture that balances trust + speed." },
      { step: "Design", note: "Dark-mode mobile flows: onboarding \u2192 locator \u2192 booking \u2192 management." },
    ],
    outcomes: [
      "End-to-end booking flow with clear trust signals",
      "Dual persona system: Space Providers & Space Seekers",
      "Notification & past-bookings architecture",
    ],
  },
  {
    id: "airhop",
    number: "02",
    title: "Airhop",
    subtitle: "On-demand delivery, minus the rider burnout.",
    description:
      "A drone-powered on-demand service that rethinks last-mile delivery \u2014 faster for customers, safer and dignified for the humans behind the handoff.",
    role: "Solo \u2022 UX Design",
    duration: "2 week sprint",
    year: "2024",
    tags: ["Service Design", "Logistics", "Drone Tech"],
    accent: "#2D5F3F",
    bg: "#E1E8DC",
    hmw:
      "How might we reimagine on-demand delivery to serve instant needs faster without risking employee wellbeing \u2014 by leveraging drone technology?",
    context: [
      "Gig riders face unsafe speeds, weather extremes & burnout.",
      "Customers keep pushing for faster, cheaper delivery windows.",
      "Drone tech creates new roles but also displacement anxiety.",
    ],
    process: [
      { step: "Map", note: "Stakeholder + ecosystem map across riders, ops, brands, customers." },
      { step: "Frame", note: "Service blueprint for both customer and employee journeys." },
      { step: "Consumer UX", note: "Sign-up, food & Skymart order, cost estimate, live tracking." },
      { step: "Employee UX", note: "Ops dashboard + wellbeing-first role redesign." },
    ],
    outcomes: [
      "Dual-sided service blueprint",
      "Consumer + operator interfaces",
      "Framework for role redesign \u2018with\u2019 riders, not around them",
    ],
  },
  {
    id: "namma-sarathi",
    number: "03",
    title: "Namma Sarathi",
    subtitle: "A suburban train for Bangalore 2030.",
    description:
      "A 16-week collaboration with Alstom reimagining Bangalore's suburban rail \u2014 designed around blue-and-white collar commuters whose commutes today feel anything but joyful.",
    role: "Team \u2022 Design Research + Service Design",
    duration: "16 weeks",
    year: "2023",
    tags: ["Service Design", "Mobility", "Alstom Collab"],
    accent: "#4A6FA5",
    bg: "#DDE5EE",
    hmw:
      "How might we design a suburban train that meets the individual preferences of a diverse range of commuters \u2014 borrowing the best traits of personal mobility to make the commute genuinely enjoyable?",
    context: [
      "By 2030 Bangalore will need inclusive, sustainable mobility at scale.",
      "Public transport often sacrifices comfort & personalisation for throughput.",
      "Personal mobility wins on privacy, predictability, and dignity.",
    ],
    process: [
      { step: "Research", note: "Personas for white-collar and blue-collar commuters of 2030." },
      { step: "Systems", note: "Service ecosystem & system map for the end-to-end ride." },
      { step: "Touchpoints", note: "RFID boarding, crowd displays, vacant-seat indicators." },
      { step: "Coach Design", note: "Essential + Comfort coaches with adaptive & semi-seating." },
    ],
    outcomes: [
      "Shortlisted by Alstom for development",
      "Two coach typologies for economic & premium commutes",
      "Pre-book flow for comfort seating",
    ],
  },
];

export const navLinks = [
  { label: "about", href: "#about" },
  { label: "work", href: "#work" },
  { label: "resume", href: "#resume" },
  { label: "say hi", href: "#contact" },
];
