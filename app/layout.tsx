import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://gaeldevblog.vercel.app'),
  title: {
    default: 'Gael Dev | Desarrollador Full-Stack',
    template: '%s | Gael Dev'
  },
  description: 'Portafolio profesional y blog de Jairo Gael Mota López. Desarrollador Full-Stack especializado en React, Next.js, Java, Kotlin y tecnologías modernas.',
  keywords: ['Gael Dev', 'Desarrollador Full-Stack', 'React', 'Next.js', 'TypeScript', 'Java', 'Kotlin', 'Portfolio', 'Blog'],
  authors: [{ name: 'Jairo Gael Mota López' }],
  creator: 'Gael Dev',
  openGraph: {
    type: 'website',
    locale: 'es_MX',
    url: 'https://gaeldevblog.vercel.app',
    title: 'Gael Dev | Desarrollador Full-Stack',
    description: 'Portafolio profesional y blog de desarrollo de software',
    siteName: 'Gael Dev',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Gael Dev | Desarrollador Full-Stack',
    description: 'Portafolio profesional y blog de desarrollo de software',
    creator: '@gaxl_1',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen bg-background text-foreground`}
      >
        <div className="relative flex min-h-screen flex-col">
          <Navbar />
          <main className="flex-1 max-w-screen-2xl mx-auto w-full px-4 md:px-8 py-6">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}

