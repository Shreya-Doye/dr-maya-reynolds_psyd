"use client";

import { useState, type FormEvent } from "react";

type SessionType = "in-person" | "telehealth";
type Status = "idle" | "submitting" | "success" | "error";

const inputClasses =
  "w-full rounded-md border border-ink/20 bg-surface px-4 py-3 text-[15px] text-ink placeholder:text-muted/70 outline-none transition-colors focus:border-primary focus:ring-1 focus:ring-primary";

export default function AppointmentForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [sessionType, setSessionType] = useState<SessionType>("in-person");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  const emailIsValid = (value: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");

    if (!name.trim() || !email.trim()) {
      setError("Please share your name and email so I can get back to you.");
      return;
    }
    if (!emailIsValid(email)) {
      setError("That email address doesn't look quite right — mind double-checking it?");
      return;
    }

    setStatus("submitting");

    // NOTE: There is no backend or email address in Maya's profile to send
    // this to yet, so this simulates a submission locally. Before this site
    // goes live, wire this handler up to a real endpoint or service (e.g.
    // a Next.js API route that emails you, or a form service like
    // Formspree / Resend / EmailJS).
    await new Promise((resolve) => setTimeout(resolve, 700));

    setStatus("success");
  };

  if (status === "success") {
    return (
      <div className="rounded-md border border-accent/40 bg-accent/10 p-8 text-center">
        <p className="font-serif-display text-2xl text-ink">
          Thank you, {name.split(" ")[0] || "there"}.
        </p>
        <p className="mt-3 text-[15px] leading-relaxed text-muted">
          Your request has been received. I&rsquo;ll follow up at{" "}
          <span className="font-semibold text-ink">{email}</span> to confirm
          availability and next steps.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-2 block text-[12px] font-semibold uppercase tracking-[0.1em] text-ink/80">
            Full Name
          </label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            autoComplete="name"
            className={inputClasses}
            placeholder="Your name"
          />
        </div>
        <div>
          <label htmlFor="email" className="mb-2 block text-[12px] font-semibold uppercase tracking-[0.1em] text-ink/80">
            Email
          </label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            autoComplete="email"
            className={inputClasses}
            placeholder="you@email.com"
          />
        </div>
      </div>

      <div>
        <label htmlFor="phone" className="mb-2 block text-[12px] font-semibold uppercase tracking-[0.1em] text-ink/80">
          Phone <span className="normal-case text-muted">(optional)</span>
        </label>
        <input
          id="phone"
          type="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          autoComplete="tel"
          className={inputClasses}
          placeholder="(xxx) xxx-xxxx"
        />
      </div>

      <fieldset>
        <legend className="mb-2 block text-[12px] font-semibold uppercase tracking-[0.1em] text-ink/80">
          Preferred session type
        </legend>
        <div className="flex flex-wrap gap-3">
          {(
            [
              { value: "in-person", label: "In-person (Santa Monica)" },
              { value: "telehealth", label: "Telehealth (California residents)" },
            ] as { value: SessionType; label: string }[]
          ).map((option) => (
            <label
              key={option.value}
              className={`cursor-pointer rounded-full border px-5 py-2 text-[13px] transition-colors ${
                sessionType === option.value
                  ? "border-primary bg-primary text-white"
                  : "border-ink/20 text-ink hover:border-primary"
              }`}
            >
              <input
                type="radio"
                name="sessionType"
                value={option.value}
                checked={sessionType === option.value}
                onChange={() => setSessionType(option.value)}
                className="sr-only"
              />
              {option.label}
            </label>
          ))}
        </div>
      </fieldset>

      <div>
        <label htmlFor="message" className="mb-2 block text-[12px] font-semibold uppercase tracking-[0.1em] text-ink/80">
          What brings you to therapy? <span className="normal-case text-muted">(optional)</span>
        </label>
        <textarea
          id="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          rows={4}
          className={`${inputClasses} resize-none`}
          placeholder="Share as much or as little as you'd like."
        />
      </div>

      {error && (
        <p role="alert" className="text-sm font-medium text-primary">
          {error}
        </p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="inline-flex items-center justify-center rounded-full border border-primary bg-primary px-8 py-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-white transition-colors hover:bg-primary-dark hover:border-primary-dark disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status === "submitting" ? "Sending\u2026" : "Request an Appointment"}
      </button>
    </form>
  );
}
