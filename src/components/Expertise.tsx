const pillars = [
  {
    title: "Collaborative.",
    accent: "text-primary",
    body: "Therapy works best when clients feel respected, understood, and actively involved in the process. My goal isn't just symptom relief \u2014 it's helping you develop insight, resilience, and a stronger relationship with yourself over time.",
  },
  {
    title: "Grounded.",
    accent: "text-secondary",
    body: "Sessions are structured enough to feel supportive, while still leaving space for reflection and depth. Trauma work in particular is paced carefully, with an emphasis on safety and helping you feel regulated in daily life.",
  },
  {
    title: "Evidence-Based.",
    accent: "text-accent",
    body: "I integrate cognitive-behavioral therapy (CBT), EMDR, mindfulness-based practices, and body-oriented techniques \u2014 addressing both the emotional and physiological sides of what you're experiencing.",
  },
];

export default function Expertise() {
  return (
    <section className="bg-surface-alt py-20 lg:py-28">
      <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-14 px-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-10 lg:px-12">
        {pillars.map((pillar) => (
          <div key={pillar.title}>
            <h3 className={`font-serif-display text-3xl font-light ${pillar.accent}`}>
              {pillar.title}
            </h3>
            <p className="mt-5 text-[15px] leading-relaxed text-muted">
              {pillar.body}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
