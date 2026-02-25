import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { ThemeProvider } from "@/components/theme/theme-provider";
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
    default: 'Jairo Gael | Desarrollador Full-Stack',
    template: '%s | Jairo Gael'
  },
  description: 'Portafolio profesional y blog de Jairo Gael Mota López. Software Engineer especializado en Full-Stack Multiplataforma, Cloud & Infraestructura e Inteligencia Artificial.',
  keywords: ['Jairo Gael', 'Software Engineer', 'Full-Stack', 'Java', 'Spring', 'Python', 'AI Integration', 'DevOps', 'Cloud', 'React', 'Next.js'],
  authors: [{ name: 'Jairo Gael Mota López' }],
  creator: 'Jairo Gael',
  openGraph: {
    type: 'website',
    locale: 'es_MX',
    url: 'https://gaeldevblog.vercel.app',
    title: 'Jairo Gael | Desarrollador Full-Stack',
    description: 'Portafolio profesional y blog de desarrollo de software',
    siteName: 'Jairo Gael',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Jairo Gael | Desarrollador Full-Stack',
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
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <div className="relative flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-1 max-w-screen-2xl mx-auto w-full px-4 md:px-8 py-6">
              {children}
            </main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}

