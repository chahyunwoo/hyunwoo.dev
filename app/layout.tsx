import "./globals.css";

import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";

import Container from "@/components/Container";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

import Providers from "../context/Providers";

const sans = Open_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "hyunwoo.dev",
    template: "hyunwoo.dev | %s",
  },
  description: "기술과 일상을 공유하는 개발 블로그",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko" suppressHydrationWarning={true}>
      <body
        className={`${sans.className} bg-neutral-100 dark:bg-neutral-900 text-neutral-900 dark:text-neutral-100 flex flex-col`}
      >
        <Providers>
          <Header />
          <main className="grow w-full mt-16 py-16 px-8">
            <Container>{children}</Container>
          </main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
