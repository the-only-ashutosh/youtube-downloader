import { Inter } from "next/font/google";
import "./globals.css";
import "@radix-ui/themes/styles.css";
import { Theme } from "@radix-ui/themes";
import { Providers } from "./providers";
import NavBar from "../components/UI/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Download Youtube Video",
  description: "Your all new and easy youtube video downloader.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body className={inter.className}>
        <Theme
          accentColor="teal"
          grayColor="sand"
          panelBackground="translucent"
          scaling="100%"
          radius="full"
        >
          <Providers>
            <NavBar />
            {children}
          </Providers>
        </Theme>
      </body>
    </html>
  );
}
