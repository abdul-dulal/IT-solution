import { Jost } from "next/font/google";
import "./globals.css";
import HeaderApply from "./HeaderApply";
import ScrollToTopButton from "../../components/ui/ScrollToTopButton";
const jost = Jost({
  weight: ["400", "500", "700"],
  style: ["normal"],
  subsets: ["latin"],
  display: "swap",
});
export default function RootLayout({ children }) {
  return (
    <html lang="en" className={jost.className}>
      <body>
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
