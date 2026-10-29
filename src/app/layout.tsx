import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/context/ThemeContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Cynbit Technologies — Autonomous AI & Scalable Software Architecture",
  description:
    "Jaipur's premier AI & software architecture hub. Autonomous AI agents, custom software development, and scalable business platforms. Bridge the gap between technical precision and global business growth.",
  keywords: [
    "Cynbit Technologies",
    "AI Automation",
    "Autonomous AI Agents",
    "Custom Software Development",
    "Scalable Business Platforms",
    "Jaipur",
    "BitElevate",
  ],
  authors: [{ name: "Cynbit Technologies", url: "https://cynbit.in" }],
  openGraph: {
    title: "Cynbit Technologies — Architecting the future with AI automation",
    description:
      "Cynbit Technologies architects the digital future with autonomous AI agents, custom software development, and scalable business platforms.",
    type: "website",
    locale: "en_IN",
    siteName: "Cynbit Technologies",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body
        suppressHydrationWarning
        className="min-h-full flex flex-col transition-colors duration-250"
      >
        <script
          id="theme-initializer"
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var saved = localStorage.getItem('cynbit-theme');
                  var isDark = saved === 'dark' || (!saved && window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches);
                  var root = document.documentElement;
                  if (isDark) {
                    root.classList.add('dark');
                    root.setAttribute('data-theme', 'dark');
                  } else {
                    root.classList.remove('dark');
                    root.setAttribute('data-theme', 'light');
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
