import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import SidebarLayout from "@/components/portfolio/navbar/siderbar";
import { ThemeProvider } from "@/components/theme-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// =====================
// 🔥 FULL SEO METADATA
// =====================
export const metadata: Metadata = {
  title: {
    default: "Pramod Tharu | Full Stack Developer",
    template: "%s | Pramod Tharu",
  },
  description:
    "I am a Full Stack Developer experienced in Next.js, Node.js, MongoDB, and modern web technologies. I build fast, responsive, and scalable web applications.",
  keywords: [
    "Pramod Tharu",
    "Full Stack Developer",
    "Next.js Developer",
    "MERN Stack Developer",
    "Frontend Developer",
    "Backend Developer",
    "Portfolio",
    "Web Developer Nepal",
  ],
  authors: [{ name: "Sajilo digital " }],
  creator: "Sajilo digital",
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
    },
  },

  // ---------- 🔵 Open Graph (Facebook, LinkedIn) ----------
  openGraph: {
    title: "Pramod Tharu | Full Stack Developer",
    description:
      "Explore my portfolio showcasing full-stack development projects built with Next.js, Node.js, and MongoDB.",
    type: "website",
    url: "https://www.pramodtharu.com.np/",
    siteName: "Pramod Portfolio",
    images: [
      {
        url: "/logo.jpg", // place image inside public/
        width: 1200,
        height: 630,
        alt: "Pramod Tharu Portfolio",
      },
    ],
  },

  // ---------- 🔵 Twitter Card SEO ----------
  twitter: {
    card: "summary_large_image",
    title: "Pramod Tharu | Full Stack Developer",
    description:
      "I build high-performance full-stack applications using Next.js, Node.js, and MongoDB.",
    images: ["/logo.jpg"],
    creator: "@your-twitter",
  },

  // ---------- 🔵 Icons / Favicon ----------
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/logo.jpg",
  },

  // ---------- 🔵 App Manifest (PWA optional) ----------
  manifest: "/manifest.json",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider>
          {/* 🔥 Your sidebar/navbar has theme toggle inside */}
          <SidebarLayout>{children}</SidebarLayout>
        </ThemeProvider>
      </body>
    </html>
  );
}
