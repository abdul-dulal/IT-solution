"use client";
import { usePathname } from "next/navigation";
import MainHeader from "../../components/header/MainHeader";
import HeaderTwo from "../../components/header/HeaderTwo";
import HeaderThree from "../../components/header/HeaderThree";
import TopheaderTwo from "../../components/header/TopheaderTwo";
import TopHeader from "../../components/header/TopHeader";

export default function Header() {
  const pathname = usePathname();
  const HeaderChooser = () => {
    if (pathname == "/HomeTwo") {
      return <MainHeader />;
    } else if (pathname == "/HomeThree") {
      return <HeaderThree />;
    }
    return <HeaderTwo />;
  };
  const footerChooser = () => {
    if (pathname == "/HomeThree") {
      return <TopheaderTwo />;
    }
    return <TopHeader />;
  };
  const result = [footerChooser(), HeaderChooser()];
  return result;
}
