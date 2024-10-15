import "./globals.css";
import { jost } from "./fonts";
import HeaderApply from "./HeaderApply";
import ScrollToTopButton from "../../components/ui/ScrollToTopButton";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${jost.className}`}>
        <div className="">
          <HeaderApply />
          {children}
          <ScrollToTopButton />
          {/* <Footer /> */}
        </div>
      </body>
    </html>
  );
}
