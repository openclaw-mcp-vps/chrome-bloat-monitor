import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Chrome Bloat Monitor – Track Unauthorized Chrome Activity",
  description: "Monitor unwanted Chrome installations and data usage from background AI models. Real-time privacy dashboard for power users and IT admins."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="220d6541-551d-49f4-a251-e5d1d0a5ad5c"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
