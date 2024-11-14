import "./globals.css";
// import { rubik } from "@/app/fonts";
import { jost } from "@/app/fonts";
import HeaderApply from "./HeaderApply";
import ScrollToTopButton from "../../components/ui/ScrollToTopButton";

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
