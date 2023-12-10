import "./globals.css";
import { getServerSession } from "next-auth";
import SessionProvider from "@/components/SessionProvider";
import { Providers } from "./providers";

export const metadata = {
  title: "Nirwana Temporary Message Platform",
  description:
    "Nirwana Temporary Message Platform for Temporary Message cleared each session",
};

export default async function RootLayout({ children }) {
  const session = await getServerSession();

  return (
    <html lang="en">
      <body>
        <SessionProvider session={session}>
          <Providers>{children}</Providers>
        </SessionProvider>
      </body>
    </html>
  );
}
