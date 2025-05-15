import DesignSection from "@/components/mock-ds/DesignSection";
import { type Locale } from "@/i18n-config";
import { getLocaleStaticParams } from "@/utils/staticRenderUtils";
import { type Metadata } from "next";

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

export default async function DesignSystemPage({ params }: HomeProps) {
  return <DesignSection />;
}
