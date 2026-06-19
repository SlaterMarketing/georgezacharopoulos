"use client";

import { useState } from "react";
import { KintanaProvider, useKintanaSubmit } from "@kintana/sdk/react";

function NewsletterFormFields({
  endpointSlug = "newsletter",
  className,
}: {
  endpointSlug?: string;
  className?: string;
}) {
  const { submit, submitting, message, error } = useKintanaSubmit(endpointSlug);
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [done, setDone] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    await submit({
      email,
      fields: {
        ...(firstName ? { firstName } : {}),
        ...(lastName ? { lastName } : {}),
      },
    });
    setDone(true);
    setEmail("");
    setFirstName("");
    setLastName("");
  }

  if (done && message) {
    return (
      <div className={className}>
        <p className="form-success">{message}</p>
      </div>
    );
  }

  return (
    <form className={className} onSubmit={(e) => void handleSubmit(e)}>
      <label>
        Email *
        <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} />
      </label>
      <label>
        First name
        <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
      </label>
      <label>
        Last name
        <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} />
      </label>
      {error ? <p className="form-error">{error}</p> : null}
      <button type="submit" disabled={submitting}>
        {submitting ? "Joining…" : "Join mailing list"}
      </button>
    </form>
  );
}

type Props = {
  apiKey: string;
  baseUrl: string;
  endpointSlug?: string;
  className?: string;
};

export function NewsletterForm({ apiKey, baseUrl, endpointSlug, className }: Props) {
  return (
    <KintanaProvider apiKey={apiKey} baseUrl={baseUrl}>
      <NewsletterFormFields endpointSlug={endpointSlug} className={className} />
    </KintanaProvider>
  );
}
