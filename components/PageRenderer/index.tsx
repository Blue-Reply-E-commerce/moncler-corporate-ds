"use client";

import { getPage } from "@/contentstack-sdk/index";
import { ContentPage, ContentType, Homepage } from "@/contentstack-sdk/types";
import { useViewport } from "@/providers/ViewportProvider";
import { Locale } from "@/i18n-config";
import ContentstackLivePreview from "@contentstack/live-preview-utils";
import { useEffect, useState } from "react";

const getCmsContent = async ({
  slug,
  contentTypeUid,
  locale,
}: {
  slug: string;
  contentTypeUid: ContentType;
  locale: Locale;
}) => {
  // get data from Contentstack
  const content: Homepage | ContentPage | undefined = await getPage(contentTypeUid, slug, locale);
  return { content };
};

interface PageRendererProps {
  contentTypeUid: ContentType;
  slug: string;
  locale: Locale;
  initialContent?: Homepage | ContentPage;
}

const PageRenderer: React.FC<PageRendererProps> = ({
  initialContent,
  contentTypeUid,
  slug,
  locale,
}) => {
  const [content, setContent] = useState(initialContent);

  const fetchFreshData = async () => {
    const { content } = await getCmsContent({ contentTypeUid, slug, locale });
    setContent(content);
  };

  useEffect(() => {
    const callbackUid = ContentstackLivePreview.onEntryChange(fetchFreshData, {
      skipInitialRender: true,
    });

    return () => {
      ContentstackLivePreview.unsubscribeOnEntryChange(callbackUid);
    };
  }, [contentTypeUid]);

  return <>{JSON.stringify(content)}</>;
};

export default PageRenderer;
