import type { Metadata } from "next";
import "../globals.css";
import { headers } from "next/headers";
import { ErrorBoundary } from "react-error-boundary";
import Error from "./error/page";
import { ViewportProvider } from "@/providers/ViewportProvider";
import { DeviceType } from "@/providers/ViewportProvider/types";
import LivePreviewInit from "@/components/LivePreviewInit";
import { toBoolean } from "@/utils/miscellanea";
import localFont from "next/font/local";

const isLivePreviewEnabled = toBoolean(process.env.NEXT_PUBLIC_CONTENTSTACK_PREVIEW_ENABLED);

const monclerGothicWeb = localFont({
  src: "../fonts/MonclerGothic/MonclerGothicWeb-Regular.woff2",
  variable: "--font-moncler",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Moncler Corporate",
  description: "Moncler Group website",
};

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}>) {
  const lang = (await params).lang;

  const headersList = await headers();
  const device = headersList.get("x-viewport") || DeviceType.DESKTOP;
  return (
    <html lang={lang}>
      <head></head>
      <body className={`${monclerGothicWeb.variable} antialiased`}>
        <ErrorBoundary fallback={<Error />}>
          {isLivePreviewEnabled && <LivePreviewInit />}
          <ViewportProvider deviceType={device as DeviceType}>
            <header></header>
            {children}
            <footer></footer>
          </ViewportProvider>
        </ErrorBoundary>
      </body>
    </html>
  );
}
