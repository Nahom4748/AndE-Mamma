import { Inter } from "next/font/google";
import "@/assets/css/bootstrap.min.css";
import "aos/dist/aos.css";
import "@/assets/css/icofont.min.css";
import "@/assets/css/glightbox.min.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./globals.css";
// import "@/assets/css/responsive.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
  variable: "--fontInter",
});

export const metadata = {
  title: "AndE Mamma | Sprit of Love",
  keywords: "AndE Mamma, AndE Mamma | Sprit of Love",
  authors: [
    {
      name: "AndE Mamma",
      url: "https://www.andemamma.com/",
    },
  ],
  description: "AndE Mamma | Sprit of Love",
  creator: "AndE Mamma",
  publisher: "AndE Mamma",
  applicationName: "AndE Mamma",
  themeColor: "#000000",
  colorScheme: "dark",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.variable}>
      <body >{children}</body>
    </html>
  );
}
