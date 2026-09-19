# Dr. Maya Reynolds, PsyD — Website

A Next.js (App Router) + TypeScript + Tailwind CSS site for the fictional
therapist Dr. Maya Reynolds, PsyD, built from her profile document as the
single source of truth for all content.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000. (First run needs internet once, so
`next/font/google` can fetch Cormorant Infant, Mulish, and Parisienne.)

Production build check:

```bash
npm run build
npm start
```

---

## 🎨 Where to change colors

**Everything is in one place:** `src/app/globals.css`, inside the `:root {}`
block near the top.

```css
--color-background: #fbf6ef;   /* page background */
--color-surface: #ffffff;      /* white section backgrounds */
--color-surface-alt: #ede2d2;  /* alternating section background */
--color-ink: #322c26;          /* headings / main text */
--color-muted: #6c6259;        /* body copy */
--color-primary: #a35c3d;      /* main buttons, key labels (terracotta) */
--color-primary-dark: #8a4a2f; /* primary button hover */
--color-secondary: #7d5a66;    /* secondary buttons/labels (mauve) */
--color-secondary-dark: #6b4b56;
--color-accent: #628070;       /* script accents, highlights (sage) */
--color-accent-dark: #4d6455;  /* footer band */
```

Just change the hex value on the right of any line — every button, heading,
label, and tint across the whole site updates automatically, since every
component uses these variables (e.g. `text-primary`, `bg-secondary`,
`border-accent`) instead of hardcoded colors.

## 🖼️ Where to change images

**Also one place:** `src/data/site.ts`, at the top, in the `siteImages`
object — plus each service's `image` field a little further down.

```ts
export const siteImages = {
  hero: "https://picsum.photos/seed/maya-hero-calm/1200/1000",
  introOverlay: "https://picsum.photos/seed/maya-quiet-space/1920/1080",
  approach1: "https://picsum.photos/seed/maya-approach-1/1200/1000",
  approach2: "https://picsum.photos/seed/maya-approach-2/1200/1000",
  cta: "https://picsum.photos/seed/maya-cta-warm/1200/1000",
};
```

To swap any photo:
- Paste in any other image URL, **or**
- Drop your own file into `public/images/` and use a path like
  `"/images/your-file.jpg"` instead of a full URL.

The three service photos live just below that, inside the `services` array
(each entry has its own `image:` line).

Every photo also gets a soft color-tint overlay (`.photo-tint-primary`,
`.photo-tint-secondary`, `.photo-tint-accent` in `globals.css`) so it reads
as part of the same palette — you can adjust how strong that tint is there
too (the `30%`/`18%` numbers control opacity).

---

## Contact form — please read before launch

`AppointmentForm.tsx` (used inside the Contact section) is a fully working
front-end form — it validates required fields and shows a real success
message — but it doesn't send anywhere yet, because Maya's profile has no
email address, phone number, or booking system to connect it to, and none
was invented. Before this goes live, connect its `handleSubmit` function to:

- A Next.js API route (`app/api/contact/route.ts`) that emails you via
  [Resend](https://resend.com) or similar, or
- A drop-in form backend like [Formspree](https://formspree.io) or
  [EmailJS](https://www.emailjs.com/).

## Components

- `Navbar.tsx` — photo logo (Maya's real headshot) + anchor nav (My
  Approach / Services / About / FAQs / Contact). All nav/CTA links use
  native `<a href="#...">` anchors so they reliably scroll to their section.
- `Hero.tsx` (`siteImages.hero`)
- `IntroSection.tsx` (`siteImages.introOverlay`) — empathetic framing drawn
  from the profile's description of her typical client
- `HowWeWork.tsx` (`#approach`, `siteImages.approach1` / `approach2`) — her
  stated approach, methods, and pacing
- `Expertise.tsx` — three value pillars (Collaborative / Grounded /
  Evidence-Based), one per brand color
- `MethodsSection.tsx` — accordion of her actual four modalities
- `Services.tsx` (`#services`) — **exactly three** services, photos pulled
  from the `services` array in `data/site.ts`
- `About.tsx` (`#about`) — Maya's bio + real photo + her own closing quote
- `OurOffice.tsx` (`#office`) — **Phase 3.** The office/practice-space
  section: description, highlight tags, address, and Maya's two real office
  photos (`public/images/office-1.jpg`, `office-2.jpg`)
- `FAQSection.tsx` (`#faqs`) — six FAQs, each paraphrased directly from the
  profile
- `AppointmentCTA.tsx` (`#contact`, `siteImages.cta`) — intro copy + office
  address + the appointment form
- `AppointmentForm.tsx` — the booking request form
- `Footer.tsx` — solo-practice footer; legal links are plain text (not
  linked) since those pages don't exist
- `src/data/site.ts` — **all** Maya-specific content and images in one file

## Images

- `public/images/maya-profile.jpg` — Maya's real headshot, cropped from the
  profile document and upscaled. Used in the Navbar and About section.
- `public/images/office-1.jpg`, `office-2.jpg` — her real office photos,
  now used in the **Our Office** section (`OurOffice.tsx`).
- All other photos are placeholder stock imagery (see `siteImages` in
  `data/site.ts`), color-tinted to match the theme — swap them for real
  photography whenever it's available.

## Information from the profile that was unavailable

- No phone number, email, or booking link — none invented. The form
  collects a request but needs a real backend connected (see above).
- No stated years of experience, licensure number, or credentials beyond
  "PsyD" / "Licensed Clinical Psychologist."
- The profile's "(Fictional Therapist)" label was treated as a note for
  this assignment, not marketing copy, so it doesn't appear on the site.

## Phase history

- Phase 1: cloned the original Conejo Valley Family Counseling homepage.
- Phase 2: redesigned it for Dr. Maya Reynolds — new theme, copy, services,
  About, FAQs, and a working appointment form.
- Phase 3 (this version): added the **Our Office** section using her real
  office photos and profile-supported details.
