import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#050811",
};

export const metadata: Metadata = {
  title: "Samson Vincent Julius | Software Engineer & Blockchain Infrastructure",
  description:
    "Portfolio of Samson Vincent Julius — Backend Engineer, Blockchain Infrastructure Developer, and CS graduate from JUIT specializing in Java, Golang, Spring Boot, Cosmos SDK, and Hyperledger Fabric.",
  keywords: [
    "Samson Vincent Julius",
    "Software Engineer",
    "Backend Developer",
    "Blockchain Infrastructure Engineer",
    "Golang Developer",
    "Java Developer",
    "Cosmos SDK",
    "Hyperledger Fabric",
    "Distributed Systems",
    "JUIT",
  ],
  authors: [{ name: "Samson Vincent Julius" }],
  openGraph: {
    title: "Samson Vincent Julius | Software Engineer",
    description:
      "Backend Engineer & Blockchain Infrastructure Developer. Java · Golang · Spring Boot · Cosmos SDK · Hyperledger Fabric.",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Samson Vincent Julius — Portfolio" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Samson Vincent Julius | Software Engineer",
    description: "Backend Engineer & Blockchain Infrastructure Developer.",
    images: ["/og-image.png"],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className="antialiased" suppressHydrationWarning>{children}</body>
    </html>
  );
}
