import PageRenderer from "@/components/PageRenderer";
import { getPage } from "@/contentstack-sdk";
import { ContentType } from "@/contentstack-sdk/types";
import { type Locale } from "@/i18n-config";
import { getLocaleStaticParams } from "@/utils/staticRenderUtils";
import { type Metadata } from "next";
import { notFound } from "next/navigation";

export const revalidate = 60;

export async function generateStaticParams() {
  return getLocaleStaticParams();
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;

  return {};
}
interface HomeProps {
  params: Promise<{ lang: Locale }>;
}

export default async function Home({ params }: HomeProps) {
  const lang = (await params).lang;

  let pageContent = undefined;
  try {
    pageContent = await getPage(ContentType.HOMEPAGE, "/", lang);
  } catch (error) {
    console.error(`Unable to fetch homepage content: ${error}`);
  }

  if (!pageContent) notFound();

  return (
    <PageRenderer
      initialContent={pageContent}
      contentTypeUid={ContentType.HOMEPAGE}
      slug="/"
      locale={lang}
    />
  );
}
