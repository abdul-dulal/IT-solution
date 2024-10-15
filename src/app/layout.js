import "./globals.css";
import HeaderApply from "./HeaderApply";
import ScrollToTopButton from "../../components/ui/ScrollToTopButton";
import { jost } from "./fonts";

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
