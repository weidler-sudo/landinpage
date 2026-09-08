import "./globals.css";
import { SITE } from "./content";
import { StreamBackground, SiteHeader } from "./client";
import { SiteFooter } from "./blocks";

export const metadata = {
  metadataBase: new URL(SITE),
  title: {
    default: "KI-Agenten & Webdesign für den B2B-Mittelstand | Novastream.ai",
    template: "%s",
  },
  applicationName: "Novastream.ai",
  authors: [{ name: "Novastream.ai" }],
};

export const viewport = {
  themeColor: "#0D1533",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="de">
      <body>
        <div className="ns">
          <StreamBackground />
          <a className="skip" href="#main">Zum Inhalt springen</a>
          <SiteHeader />
          <main id="main">{children}</main>
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
