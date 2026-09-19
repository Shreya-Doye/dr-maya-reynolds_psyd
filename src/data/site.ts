// Central content for Dr. Maya Reynolds' site.
// Every fact here is sourced from her profile document — nothing invented.
// Kept separate from markup so Phase 3 (Our Office) can extend this file
// without touching component internals.

export const navLinks = [
  { label: "My Approach", href: "#approach" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Our Office", href: "#office" },
  { label: "FAQs", href: "#faqs" },
  { label: "Contact", href: "#contact" },
];

// ============================================================
// ALL IMAGE URLS LIVE HERE. To change any photo on the site,
// edit the value on the right — nothing else needs to change.
// You can swap in:
//   - another picsum.photos/seed/<anything>/<width>/<height> URL
//   - a real photo you've uploaded to /public/images/... (use a
//     path like "/images/your-file.jpg" instead of a full URL)
// ============================================================
export const siteImages = {
  hero: "https://picsum.photos/seed/maya-hero-calm/1200/1000",
  introOverlay: "https://picsum.photos/seed/maya-quiet-space/1920/1080",
  approach1: "https://picsum.photos/seed/maya-approach-1/1200/1000",
  approach2: "https://picsum.photos/seed/maya-approach-2/1200/1000",
  cta: "https://picsum.photos/seed/maya-cta-warm/1200/1000",
};

export type Service = {
  title: string;
  description: string;
  image: string;
  tone: "primary" | "secondary" | "accent";
};

// Exactly three services, each grounded in the profile's stated focus areas.
export const services: Service[] = [
  {
    title: "Anxiety & Stress",
    description:
      "For the constant worry, racing thoughts, and tension that make it hard to switch off — even when things look fine from the outside. We'll work on understanding both the emotional and physiological sides of what you're experiencing.",
    image: "https://picsum.photos/seed/maya-service-anxiety/900/700",
    tone: "primary",
  },
  {
    title: "Trauma-Informed Therapy",
    description:
      "Careful, paced support for single-incident trauma and more complex, long-standing patterns rooted in childhood, relationships, or chronic stress — using EMDR and body-oriented techniques to help you feel safe and regulated again.",
    image: "https://picsum.photos/seed/maya-service-trauma/900/700",
    tone: "accent",
  },
  {
    title: "Burnout & Perfectionism",
    description:
      "For entrepreneurs, creatives, and professionals who feel disconnected from themselves after years of pushing through high internal pressure — with space to slow down, reconnect, and build more sustainable ways of living and working.",
    image: "https://picsum.photos/seed/maya-service-burnout/900/700",
    tone: "secondary",
  },
];

export const methods = [
  {
    label: "Cognitive-Behavioral Therapy (CBT)",
    detail:
      "A structured, evidence-based method for understanding the links between thoughts, feelings, and behavior.",
  },
  {
    label: "EMDR",
    detail:
      "Used to help process single-incident and long-standing trauma at a pace that feels safe and manageable.",
  },
  {
    label: "Mindfulness-Based Practices",
    detail:
      "Tools for building present-moment awareness and easing the grip of overthinking and constant worry.",
  },
  {
    label: "Body-Oriented Techniques",
    detail:
      "Approaches that address the physiological side of anxiety and trauma, not just the thoughts behind them.",
  },
];

export const footerNav = [
  { label: "Home", href: "#top" },
  { label: "My Approach", href: "#approach" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Our Office", href: "#office" },
  { label: "FAQs", href: "#faqs" },
  { label: "Contact", href: "#contact" },
];

export const focusAreas = [
  { label: "Anxiety & Panic", href: "#services" },
  { label: "Trauma & EMDR", href: "#services" },
  { label: "Burnout & Perfectionism", href: "#services" },
  { label: "Mindfulness-Based Therapy", href: "#approach" },
];

export const officeInfo = {
  addressLine1: "123th Street 45 W",
  addressLine2: "Santa Monica, CA 90401",
  availability:
    "In-person sessions in Santa Monica, and secure telehealth for clients located anywhere in California.",
  // Used specifically in the "Our Office" section — every phrase here is
  // paraphrased directly from the profile, nothing invented.
  description:
    "When you visit in person, you'll find a quiet, private space in Santa Monica designed to feel calm and grounding rather than clinical. The room is comfortable and uncluttered, with natural light throughout — clients often share that the space itself helps them feel more at ease as soon as they arrive.",
  highlights: [
    "In-Person in Santa Monica",
    "Secure Telehealth (CA)",
    "Private & Quiet Setting",
    "Natural Light",
  ],
  // Real office photos from the profile, cropped from the source document.
  photos: [
    {
      src: "/images/office-1.jpg",
      alt: "A bright, uncluttered seating area in Dr. Maya Reynolds' Santa Monica therapy office, with natural light from large windows",
    },
    {
      src: "/images/office-2.jpg",
      alt: "A calm, comfortable therapy room in Dr. Maya Reynolds' Santa Monica office, with soft seating and a quiet, private atmosphere",
    },
  ],
};

// Every answer below is paraphrased directly from the profile — no
// invented specialties, credentials, or policies.
export const faqs = [
  {
    question: "What kinds of issues do you help with?",
    answer:
      "My work often focuses on anxiety, panic, trauma, and burnout. I also frequently support clients dealing with perfectionism and high internal pressure — many of them entrepreneurs, creatives, or professionals who feel disconnected from themselves after years of pushing through stress.",
  },
  {
    question: "Do you offer in-person or online sessions?",
    answer:
      "Both. I offer in-person therapy from my Santa Monica office, as well as secure telehealth sessions for clients located anywhere in California.",
  },
  {
    question: "What therapeutic approaches do you use?",
    answer:
      "I integrate evidence-based methods including cognitive-behavioral therapy (CBT), EMDR, mindfulness-based practices, and body-oriented techniques, tailored to what you're experiencing both emotionally and physiologically.",
  },
  {
    question: "Who do you typically work with?",
    answer:
      "I work with adults — many of them high-achieving, thoughtful, and self-aware people who internally feel exhausted, stuck in overthinking, or emotionally on edge, even if they look 'functional' on the outside.",
  },
  {
    question: "What can I expect from a session with you?",
    answer:
      "A warm, collaborative, and grounded approach. Sessions are structured enough to feel supportive, while still leaving space for reflection and depth. Trauma work in particular is paced carefully, with an emphasis on safety and stabilization.",
  },
  {
    question: "Where is your office located?",
    answer:
      "My office is at 123th Street 45 W, Santa Monica, CA 90401 — a quiet, private space designed to feel calm and grounding, with natural light and a comfortable, uncluttered environment.",
  },
];
