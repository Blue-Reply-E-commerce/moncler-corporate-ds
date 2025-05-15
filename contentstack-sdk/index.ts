import { toBoolean } from "@/utils/miscellanea";
import contentstack, { QueryOperation, Region } from "@contentstack/delivery-sdk";
import ContentstackLivePreview, { IStackSdk } from "@contentstack/live-preview-utils";
import type { ContentType, Homepage, ContentPage } from "./types";
import { Locale } from "@/i18n-config";

const REGION_TO_CONTENTSTACK_APP_HOST: Record<Region, string> = {
  [Region.AZURE_EU]: "azure-eu-app.contentstack.com",
  [Region.US]: "app.contentstack.com",
  [Region.EU]: "eu-app.contentstack.com",
  [Region.AZURE_NA]: "app.contentstack.com",
  [Region.GCP_NA]: "app.contentstack.com",
  [Region.GCP_EU]: "eu-app.contentstack.com",
};

const REGION_TO_CONTENTSTACK_PREVIEW_HOST: Record<Region, string> = {
  [Region.AZURE_EU]: "azure-eu-rest-preview.contentstack.com",
  [Region.US]: "rest-preview.contentstack.com",
  [Region.EU]: "eu-rest-preview.contentstack.com",
  [Region.AZURE_NA]: "azure-na-rest-preview.contentstack.com",
  [Region.GCP_NA]: "gcp-na-rest-preview.contentstack.com",
  [Region.GCP_EU]: "eu-rest-preview.contentstack.com",
};

const stackConfigs = {
  apiKey: process.env.NEXT_PUBLIC_CONTENTSTACK_API_KEY || "",
  deliveryToken: process.env.NEXT_PUBLIC_CONTENTSTACK_DELIVERY_TOKEN || "",
  env: process.env.NEXT_PUBLIC_CONTENTSTACK_ENVIRONMENT || "development",
  previewEnabled: toBoolean(process.env.NEXT_PUBLIC_CONTENTSTACK_PREVIEW_ENABLED),
  previewToken: process.env.NEXT_PUBLIC_CONTENTSTACK_PREVIEW_TOKEN || "",
  previewApiHost:
    process.env.NEXT_PUBLIC_CONTENTSTACK_REGION !== undefined
      ? REGION_TO_CONTENTSTACK_PREVIEW_HOST[process.env.NEXT_PUBLIC_CONTENTSTACK_REGION as Region]
      : "azure-eu-rest-preview.contentstack.com",
  deliveryApiHost: process.env.NEXT_PUBLIC_CONTENTSTACK_DELIVERY_HOST || "",
  clientUrlPreview:
    process.env.NEXT_PUBLIC_CONTENTSTACK_REGION !== undefined
      ? REGION_TO_CONTENTSTACK_APP_HOST[process.env.NEXT_PUBLIC_CONTENTSTACK_REGION as Region]
      : "azure-eu-app.contentstack.com",
};

export const stack: ReturnType<typeof contentstack.stack> = contentstack.stack({
  apiKey: stackConfigs.apiKey,
  deliveryToken: stackConfigs.deliveryToken,
  environment: stackConfigs.env,
  host: stackConfigs.deliveryApiHost,
  region: Region.AZURE_EU,
  live_preview: {
    enable: stackConfigs.previewEnabled,
    preview_token: stackConfigs.previewToken,
    host: stackConfigs.previewApiHost,
  },
});

export function initPreview() {
  ContentstackLivePreview.init({
    ssr: false,
    enable: toBoolean(stackConfigs.previewEnabled),
    mode: "builder",
    stackSdk: stack.config as IStackSdk,
    stackDetails: {
      apiKey: stackConfigs.apiKey,
      environment: stackConfigs.env,
    },
    clientUrlParams: {
      host: stackConfigs.clientUrlPreview,
    },
  });
}

export async function getPage(type: ContentType, url: string, locale: Locale) {
  const result = await stack
    .contentType(type)
    .entry()
    .locale(locale)
    .includeFallback()
    .query()
    .where("url", QueryOperation.EQUALS, url)
    .find<Homepage | ContentPage>();

  if (result.entries) {
    const entry = result.entries[0];

    if (stackConfigs.previewEnabled) {
      contentstack.Utils.addEditableTags(entry as contentstack.Utils.EntryModel, type, true);
    }

    return entry;
  }
}
