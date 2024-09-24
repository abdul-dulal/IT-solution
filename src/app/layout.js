import "./globals.css";
import TopHeader from "../../components/header/TopHeader";
import { jost } from "./fonts";
import MainHeader from "../../components/header/MainHeader";
import Footer from "../../components/ui/Footer/Footer";
import HeaderTwo from "../../components/header/HeaderTwo";
import HeaderApply from "./HeaderApply";
import ScrollToTopButton from "../../components/ui/ScrollToTopButton";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head></head>
      <title></title>
      <body className={jost.className}>
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
