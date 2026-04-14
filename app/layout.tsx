import { Metadata } from "next";
import "./globals.css";
import TanStackProvider from "@/components/TanStackProvider/TanStackProvider";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  weight: ["400", "700"], // Вага шрифта
  subsets: ["latin", "cyrillic"], // Підтримка української
  display: "swap", // Текст з'являється одразу
  variable: "--font-roboto", // CSS-змінна для стилів
});

export default function RootLayout({
  children,
  modal,
}: {
  children: React.ReactNode;
  modal: React.ReactNode;
}) {
  return (
    <html lang="en" className={roboto.variable}>
      <body>
        <TanStackProvider>
          <Header />
          {children}
          {modal}
          <Footer />
        </TanStackProvider>
      </body>
    </html>
  );
}

export const metadata: Metadata = {
  //Basic metadata
  title: "NoteHub",
  description:
    "NoteHub is a powerful note-taking application. It offers a seamless user experience for creating, organizing, and managing notes efficiently.",

  //Open Graph metadata
  openGraph: {
    title: "NoteHub",
    description: "NoteHub is a powerful note-taking application",
    url: "https://07-routing-nextjs-6z5t84csi-wladzio1s-projects.vercel.app/",
    siteName: "NoteHub",
    images: [
      {
        url: "https://ac.goit.global/fullstack/react/notehub-og-meta.jpg",
        width: 1200,
        height: 630,
        alt: "NoteHub Open Graph Image",
      },
    ],
  },
};
