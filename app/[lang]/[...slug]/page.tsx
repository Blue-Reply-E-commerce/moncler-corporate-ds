import PageRenderer from "@/components/PageRenderer";
import { getPage } from "@/contentstack-sdk";
import { ContentType } from "@/contentstack-sdk/types";
import { Locale } from "@/i18n-config";
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

interface PageProps {
  params: Promise<{ lang: Locale; slug: string }>;
}

export default async function ContentPage({ params }: PageProps) {
  const { lang, slug } = await params;

  let pageContent = undefined;
  try {
    pageContent = await getPage(ContentType.CONTENT_PAGE, `/${slug}`, lang);
  } catch (error) {
    console.error(`Unable to fetch page content: ${error}`);
  }

  if (!pageContent) notFound();

  return (
    <main className="font-[family-name:var(--font-geist-sans)]">
      <PageRenderer
        initialContent={pageContent}
        contentTypeUid={ContentType.CONTENT_PAGE}
        slug={`/${slug}`}
        locale={lang}
      />
    </main>
  );
}
