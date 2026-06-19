"use client";

import { useState } from "react";
import { KintanaProvider, useKintanaSubmit } from "@kintana/sdk/react";

export type ShowRequestMode = "city" | "country";

type InnerProps = {
  endpointSlug?: string;
  mode?: ShowRequestMode;
  initialCountry?: string;
  initialCity?: string;
  className?: string;
};

function ShowRequestFormFields({
  endpointSlug = "contact",
  mode = "country",
  initialCountry = "",
  initialCity = "",
  className,
}: InnerProps) {
  const { submit, submitting, message, error } = useKintanaSubmit(endpointSlug);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [country, setCountry] = useState(initialCountry);
  const [city, setCity] = useState(initialCity);
  const [state, setState] = useState("");
  const [done, setDone] = useState(false);

  const showCountryField = mode === "country" && !initialCountry;
  const showCityField = mode === "country";

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const fields: Record<string, string> = {
      firstName,
      lastName,
      ...(phone ? { phone } : {}),
      ...(state ? { state } : {}),
    };

    if (showCountryField) fields.country = country;
    if (showCityField) fields.city = city;

    const context =
      mode === "city"
        ? { city: initialCity, country: initialCountry }
        : initialCountry && !showCountryField
          ? { country: initialCountry }
          : undefined;

    await submit({ email, phone: phone || undefined, fields, context });
    setDone(true);
    setFirstName("");
    setLastName("");
    setEmail("");
    setPhone("");
    setState("");
    if (showCityField) setCity(initialCity);
    if (showCountryField) setCountry("");
  }

  if (done && message) {
    return (
      <div className={className}>
        <p className="form-success">{message}</p>
        <button type="button" className="form-link-button" onClick={() => setDone(false)}>
          Submit another request
        </button>
      </div>
    );
  }

  return (
    <form className={className} onSubmit={(e) => void handleSubmit(e)}>
      <div className="form-grid">
        <label>
          First name *
          <input type="text" required value={firstName} onChange={(e) => setFirstName(e.target.value)} />
        </label>
        <label>
          Last name *
          <input type="text" required value={lastName} onChange={(e) => setLastName(e.target.value)} />
        </label>
        <label>
          Email *
          <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
        <label>
          Phone
          <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} />
        </label>
        {showCountryField ? (
          <label>
            Country *
            <input type="text" required value={country} onChange={(e) => setCountry(e.target.value)} />
          </label>
        ) : null}
        {showCityField ? (
          <label>
            City *
            <input type="text" required value={city} onChange={(e) => setCity(e.target.value)} />
          </label>
        ) : null}
        {showCountryField && country === "United States" ? (
          <label>
            State / province
            <input type="text" value={state} onChange={(e) => setState(e.target.value)} />
          </label>
        ) : null}
      </div>
      {error ? <p className="form-error">{error}</p> : null}
      <button type="submit" disabled={submitting}>
        {submitting ? "Sending…" : "Submit request"}
      </button>
    </form>
  );
}

type Props = InnerProps & {
  apiKey: string;
  baseUrl: string;
};

export function ShowRequestForm({ apiKey, baseUrl, ...inner }: Props) {
  return (
    <KintanaProvider apiKey={apiKey} baseUrl={baseUrl}>
      <ShowRequestFormFields {...inner} />
    </KintanaProvider>
  );
}
