"use client";
import { usePathname } from "next/navigation";
import MainHeader from "../../components/header/MainHeader";
import HeaderTwo from "../../components/header/HeaderTwo";
import HeaderThree from "../../components/header/HeaderThree";
import TopheaderTwo from "../../components/header/TopheaderTwo";
import TopHeader from "../../components/header/TopHeader";

export default function Header() {
  const HeaderChooser = () => {
    const pathname = usePathname();
    if (pathname == "/" || pathname == "/HomeOne") {
      return <MainHeader />;
    } else if (pathname == "/HomeThree") {
      return <HeaderThree />;
    }
    return <HeaderTwo />;
  };
  return HeaderChooser();
}
