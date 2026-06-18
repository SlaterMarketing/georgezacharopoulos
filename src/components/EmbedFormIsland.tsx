"use client";

import { EmbedForm, KintanaProvider } from "@kintana/sdk/react";

type Props = {
  apiKey: string;
  baseUrl: string;
  formId?: string;
  kind?: string;
  slug?: string;
};

export function EmbedFormIsland({ apiKey, baseUrl, formId, kind, slug }: Props) {
  return (
    <KintanaProvider apiKey={apiKey} baseUrl={baseUrl}>
      <EmbedForm id={formId} kind={kind} slug={slug} />
    </KintanaProvider>
  );
}
