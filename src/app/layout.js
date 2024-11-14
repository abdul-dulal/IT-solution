import "./globals.css";
import { Jost } from "next/font/google";
import HeaderApply from "./HeaderApply";
import ScrollToTopButton from "../../components/ui/ScrollToTopButton";
export const jost = Jost({
  weight: ["400", "500", "700"],
  style: ["normal"],
  subsets: ["latin"],
  display: "swap",
});
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={jost.className}>
        <div>
          <HeaderApply />
          {children}
          <ScrollToTopButton />
          {/* <Footer /> */}
        </div>
      </body>
    </html>
  );
}
