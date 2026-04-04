import type { Metadata } from "next";
import { Space_Grotesk, JetBrains_Mono } from "next/font/google";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { ThemeProvider } from "@/components/theme/theme-provider";
import { MatrixBackground } from "@/components/ui/matrix-background";
import { SecurityModal } from "@/components/ui/security-modal";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://gaeldevblog.vercel.app'),
  title: {
    default: 'Jairo Gael | Desarrollador Full-Stack & Cyber Enthusiast',
    template: '%s | Jairo Gael'
  },
  description: 'Software Engineer & Ciberseguridad. Ningún sistema es invencible. Especialista en Arquitectura escalable, Linux y Secure Code.',
  keywords: ['Jairo Gael', 'Hacker', 'Cybersecurity', 'Full-Stack', 'Linux', 'Ethical Hacking', 'Secure Code'],
  authors: [{ name: 'Jairo Gael Mota López' }],
  creator: 'Jairo Gael',
  openGraph: {
    type: 'website',
    locale: 'es_MX',
    url: 'https://gaeldevblog.vercel.app',
    title: 'Jairo Gael | Full-Stack & Cyber Enthusiast',
    description: 'Ningún sistema es invencible. Portafolio de Ciberseguridad y Desarrollo.',
    siteName: 'Jairo Gael',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Jairo Gael | Full-Stack & Cyber Enthusiast',
    description: 'Ningún sistema es invencible.',
    creator: '@gaxl_1',
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
        className={`${spaceGrotesk.variable} ${jetbrainsMono.variable} font-sans antialiased min-h-screen bg-background text-foreground`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <SecurityModal />
          <div className="relative flex min-h-screen flex-col overflow-hidden">
            <MatrixBackground />
            
            {/* Scanlines Effect Overlay */}
            <div className="fixed inset-0 pointer-events-none z-[50] opacity-[0.03] bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_4px,3px_100%]" />
            
            <Navbar />
            <main className="flex-1 w-full z-10">
              {children}
            </main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}


