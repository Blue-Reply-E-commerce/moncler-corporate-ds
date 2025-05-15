import { i18n } from "@/i18n-config";
import { getLocaleStaticParams } from "@/utils/staticRenderUtils";
import type { Metadata } from "next";

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

export default async function NotFoundPage({ params }: { params: Promise<{ lang?: string }> }) {
  const lang = (await params)?.lang || i18n.defaultLocale;

  return <div>Not found page</div>;
}
