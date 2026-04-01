import {
  MapPin,
  Radio,
  Camera,
  Shirt,
  Monitor,
  Package,
  Layers,
  Target,
  Video,
  Users,
  Trophy,
  Zap,
  Star,
  CheckCircle2,
  Tag,
} from "lucide-react";
import TNPAImg from "@/assets/TrustedBy/TNPA_LOGO.png";
import WPPlImg from "@/assets/TrustedBy/wppl-Inverse.png";
import BJ from "@/assets/Bangalore-Jawans-logo.svg";
import CSC from "@/assets/CSC-logo.svg";
import TNPPL from "@/assets/TrustedBy/TNPPL LOGO-S1.png";

// casestudies
import Wppl from "@/assets/case-studies/wppl.webp";
import TNPA from "@/assets/case-studies/tnpa.webp";
import bj from "@/assets/case-studies/bj.webp";
import csc from "@/assets/case-studies/csc.webp";

import professional from "../../assets/professional.png";
import association from "../../assets/association.png";

export const trustedBy = [
  { name: "Tamil Nadu Pickleball Association", img: TNPAImg },
  { name: "Women's Premier Pickleball League", img: WPPlImg },
  {
    name: "Bengaluru Jawans",
    tag: "WPBL",
    img: BJ,
  },
  {
    name: "Chennai Super Champs",
    tag: "WPBL",
    img: CSC,
  },
  {
    name: "Tamil Nadu Pickleball Premier League",
    img: TNPPL,
  },
];

export const trustBadges = [
  "Official Agency Partner — Tamil Nadu Pickleball Association",
  "WPBL Franchise Teams — Bengaluru Jawans & Chennai Super Champs",
  "Producers of the Women's Premier Pickleball League",
  "India's Only Dedicated Pickleball Agency",
];

export const oldWayVendors = [
  { icon: MapPin, label: "Venue" },
  { icon: Radio, label: "AV Company" },
  { icon: Camera, label: "Photographer" },
  { icon: Shirt, label: "Jersey Printer" },
  { icon: Monitor, label: "Social Media" },
  { icon: Package, label: "Catering" },
];

export const problems = [
  {
    title: "The Vendor Problems",
    titleColor: "#FF6B6B",
    desc: "Juggling 6 vendors separately leads to confusion and chaos. A single drop in service disrupts the entire event.",
    cta: "Simplify Vendor Management",
    ctaColor: "#FF6B6B",
  },
  {
    title: "The Brand Problem",
    titleColor: "#FF6B6B",
    desc: "Events should build your brand, but without proper follow-up, the momentum is lost post-event.",
    cta: "Improve Brand Recall",
    ctaColor: "#FF6B6B",
  },
  {
    title: "The Growth Problem",
    titleColor: "#FF6B6B",
    desc: "Events feel like you're starting from square one every time. It's difficult to repeat and grow when nothing is optimized.",
    cta: "Boost Event Growth",
    ctaColor: "#FF6B6B",
  },
];

export const costPoints = [
  { bold: "Sponsors don't return", sub: "Events look fragmented" },
  {
    bold: "Community stops growing",
    sub: "Social media goes quiet after match day",
  },
  {
    bold: "Next year starts at zero",
    sub: "No post-event report, no momentum",
  },
];

export const services = [
  {
    icon: Layers,
    title: "Event Production",
    desc: "Complete venue setup, logistics and live show execution.",
    tags: ["Stage", "AV", "Venue", "Lighting"],
  },
  {
    icon: Target,
    title: "Brand & Design",
    desc: "Tournament identity, court branding and visual assets.",
    tags: ["Court Branding", "Jerseys", "Signage"],
  },
  {
    icon: Monitor,
    title: "Social Media & Content",
    desc: "Pre-event hype to post-event highlights — fully managed.",
    tags: ["Reels", "Coverage", "Calendar"],
  },
  {
    icon: Video,
    title: "Photography & Videography",
    desc: "Broadcast-quality match coverage and athlete storytelling.",
    tags: ["Drone", "6K", "Highlights"],
  },
  {
    icon: Users,
    title: "Sponsorship & Partnerships",
    desc: "We design decks, close sponsors and deliver ROI reports.",
    tags: ["Decks", "Activations", "Reports"],
  },
  {
    icon: Radio,
    title: "Merchandising & Broadcast",
    desc: "Fan merchandise, team gear and professional live streaming.",
    tags: ["Merch", "Multi-cam", "Streaming"],
  },
];

export const fullChecklist = [
  "End-to-end event management",
  "On-ground production & logistics",
  "Stage design, LED walls & AV",
  "Event branding & identity",
  "Team & event merchandising",
  "Live broadcasting & streaming",
  "Social media management",
  "Photography & videography",
  "Content creation & reels",
  "Sponsor branding & collaterals",
  "Trophies, mementos & branded merchandise",
];

export const caseStudies = [
  {
    img: Wppl,
    tag: "WPPL",
    badge: "India First · Flagship Project",
    location: "VGP Heritage, ECR, Chennai",
    title: "Women's Premier Pickleball League — Season 1",
    subtitle: "India's First Professional Women's Pickleball League",
    stats: [
      { val: "8", label: "Teams" },
      { val: "8", label: "Sponsors" },
      { val: "200+", label: "Daily Spectators" },
      { val: "3", label: "Days" },
    ],
    desc: "End-to-end pickleball event management — stage, LED walls, AV, complete branding, vendor coordination, logistics, social media, and photography. EyeLevel produced India's first professional women's pickleball league from the ground up.",
    deliverables: [
      "Full stage & LED walls",
      "End-to-end AV production",
      "Complete event branding",
      "Photography & social media",
      "All vendor coordination",
    ],
    featured: true,
  },
  {
    img: csc,
    tag: "WPBL",
    location: "Chennai",
    title: "Chennai Super Champs Pickleball Open",
    subtitle: "WPBL Franchise Open",
    desc: "End-to-end event management, court branding, production, photography & social media — WPBL franchise standards.",
  },
  {
    img: bj,
    tag: "WPBL",
    location: "Bengaluru",
    title: "Bengaluru Jawans Bengaluru Open",
    subtitle: "WPBL Franchise Open",
    desc: "End-to-end event management, branding, production, and team merchandising — EyeLevel's first cross-city delivery.",
  },
  {
    img: TNPA,
    tag: "TNPA",
    location: "Chennai",
    title: "TNPA Women's Day Pickleball Event",
    subtitle: "Official Association Event",
    desc: "Full execution as official TNPA agency — venue, on-ground management, photography, social media.",
  },
];

export const eventFormats = [
  {
    img: professional,
    icon: Trophy,
    title: "Professional Leagues",
    desc: "Multi-day · Multi-team · Full production",
  },
  {
    img: association,
    icon: Zap,
    title: "WPBL Franchise Events",
    desc: "World Pickleball League standard",
  },
  {
    img: Wppl,
    icon: Users,
    title: "Association Events",
    desc: "Official TNPA activations",
  },
  {
    img: Wppl,
    icon: Target,
    title: "Open Tournaments",
    desc: "End-to-end tournament management",
  },
];

export const ecosystemItems = [
  {
    icon: Users,
    title: "Official Agency Partner",
    org: "Tamil Nadu Pickleball Association",
    desc: "EyeLevel manages TNPA's social media, events, photography, and brand presence — as an institutional partnership, not just a vendor relationship.",
  },
  {
    icon: Trophy,
    title: "Franchise Marketing Agency",
    org: "Bengaluru Jawans & Chennai Super Champs — WPBL",
    desc: "Two of India's most prominent World Pickleball League franchises trust EyeLevel for event management, branding, and marketing.",
  },
  {
    icon: Star,
    title: "Production Partner — Season 1",
    org: "Women's Premier Pickleball League",
    desc: "India's first professional women's pickleball league. Stage, LED walls, AV, 8 teams, 8 sponsors, 200+ daily spectators. Built from scratch.",
  },
];

export const ecosystemStats = [
  {
    label: "Pickleball Only",
    title: "Sport Specialisation",
    desc: "We don't split focus",
  },
  {
    label: "Inside TNPA",
    title: "Ecosystem Position",
    desc: "Official association partner",
  },
  {
    label: "WPBL Franchises",
    title: "League Level",
    desc: "India's top teams",
  },
  {
    label: "Pan-India + Global",
    title: "Geographic Reach",
    desc: "South India base, national capability",
  },
  {
    label: "All Formats",
    title: "Event Formats",
    desc: "League · Open · Association",
  },
];

export const processSteps = [
  {
    num: "01",
    time: "1–2 days",
    title: "Brief & Build",
    desc: "Tell us about your event or project. We listen, ask the right questions, and come back with a clear scope, timeline, and team — no jargon, no fluff.",
    items: [
      "Discovery call",
      "Event scoping",
      "Timeline built",
      "Team assigned",
    ],
    icon: "📋",
  },
  {
    num: "02",
    time: "Event window",
    title: "Produce & Create",
    desc: "Our team takes full ownership. Production, design, content, coordination — everything runs through one point of contact.",
    items: [
      "Full production crew",
      "Brand execution",
      "Content creation",
      "Vendor management",
    ],
    icon: "⚡",
  },
  {
    num: "03",
    time: "3–5 days post",
    title: "Deliver & Report",
    desc: "The event runs. Content goes live. Within days, sponsors receive a post-event ROI report. You're ready for next year.",
    items: [
      "Live coverage",
      "Post-event content",
      "Sponsor ROI report",
      "Next year planning",
    ],
    icon: "📊",
  },
];

export const whoWeServe = [
  {
    icon: Trophy,
    title: "League & Tournament Owners",
    tagline: "Run a league, not a logistics operation.",
    desc: "You run events that deserve world-class production. EyeLevel handles everything from the first court line to the last trophy lift.",
    pains: [
      "6 vendors to manage",
      "No post-event content",
      "Sponsors don't return",
    ],
    delivers: [
      "End-to-end production",
      "Post-event sponsor reports",
      "Content that outlives the event",
    ],
    cta: "Plan Your Event",
  },
  {
    icon: Users,
    title: "Sports Associations",
    tagline: "Build the brand. Attract the sponsors. Grow the sport.",
    desc: "Your association needs a brand that attracts national sponsors and builds pickleball across India. We manage your social media, events, photography, and annual sponsorship decks — year-round.",
    pains: [
      "Inconsistent brand presence",
      "Sponsors need ROI proof",
      "Member growth is slow",
    ],
    delivers: [
      "Year-round social management",
      "Annual sponsorship decks",
      "Official event production",
    ],
    cta: "Build Your Brand",
  },
  {
    icon: Shirt,
    title: "WPBL & Franchise Teams",
    tagline: "Your team is a brand. We build it.",
    desc: "We build your team identity, manage social media, design jerseys, create content, and make your franchise as recognisable off the court as on it.",
    pains: [
      "No identity beyond match days",
      "Fan community not growing",
      "Sponsors want more visibility",
    ],
    delivers: [
      "Full team branding",
      "Jersey design & print",
      "Social media management",
    ],
    cta: "Elevate Your Team",
  },
  {
    icon: Target,
    title: "Court Owners & Clubs",
    tagline: "Fill your courts. Build your community.",
    desc: "You have the infrastructure. We build the community around it — social media, event production, content, and the digital presence that fills your courts.",
    pains: [
      "Courts underutilised",
      "No digital presence",
      "Events feel ad-hoc",
    ],
    delivers: [
      "Community events",
      "Social media & content",
      "Club branding & identity",
    ],
    cta: "Grow Your Club",
  },
];

export const testimonials = [
  {
    role: "League Owner",
    quote:
      "EyeLevel transformed how we run our pickleball events. From the LED walls to the Instagram content — everything was handled. Our sponsors were genuinely impressed with the post-event report.",
    name: "Client Name",
    event: "WPPL Season 1",
  },
  {
    role: "Tournament Director",
    quote:
      "We've worked with general event agencies before and it was always a coordination nightmare. With EyeLevel, we had one contact, one team, and zero dropped balls. They know pickleball inside out.",
    name: "Client Name",
    event: "WPBL Franchise Event",
  },
  {
    role: "Association",
    quote:
      "The social media work EyeLevel did during and after our event was incredible. Our sponsors kept messaging us asking for the analytics. We've never had that happen before.",
    name: "Client Name",
    event: "TNPA Event",
  },
];

export const faqs = [
  {
    q: "Do you only work with established leagues, or can you help with a first-time event?",
    a: "We work with organisers at every stage — from a first-time open tournament to a multi-season professional league. Our scope adapts to your scale and budget. If you're running your first event, we help you do it right from day one so you don't have to rebuild later.",
  },
  {
    q: "We already have some vendors. Can EyeLevel just handle part of the work?",
    a: "Yes. While our clients typically find that using EyeLevel end-to-end removes coordination headaches entirely, we can also step in for specific services — event production, social media, branding, or photography — as standalone engagements.",
  },
  {
    q: "We're a non-profit association with a limited budget. Are your services viable for us?",
    a: "We work with associations and have experience structuring engagements that work within association budgets. Reach out and we'll have a transparent conversation about scope and pricing — no obligation.",
  },
  {
    q: "We're based outside Chennai or outside India — do you work in other cities or countries?",
    a: "Yes. We have delivered events in Chennai and Bangalore and are fully equipped to operate across India and internationally. EyeLevel is South India-headquartered with national and global capability.",
  },
  {
    q: "How do you handle sponsor deliverables and ROI reporting?",
    a: "Every event includes a post-event sponsor report covering attendance, reach, brand placement coverage, social media impressions, and photography documentation. Your sponsors get proof. You get renewals.",
  },
  {
    q: "What makes EyeLevel different from a general event management company?",
    a: "A general event company has to learn pickleball on your budget. EyeLevel already knows the sport, the community, the vendors, and the culture. We don't need to be briefed on what a run of show looks like for a pickleball league — we've written dozens of them. That depth of specialisation is the difference between an adequate event and an exceptional one.",
  },
];

export const footerStats = [
  { label: "Response time", value: "< 24 Hr" },
  { label: "Events delivered", value: "4 & counting" },
  { label: "Cities covered", value: "Chennai, Bangalore +" },
  { label: "Sport specialisation", value: "Pickleball only" },
];

export const serviceOptions = [
  "Full Event Production",
  "Social Media & Content",
  "Branding & Design",
  "Association Management",
  "Team Marketing",
  "Multiple Services",
  "Not Sure",
];

export const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 },
};

export const stagger = (i: number) => ({
  ...fadeUp,
  transition: { ...fadeUp.transition, delay: i * 0.08 },
});
