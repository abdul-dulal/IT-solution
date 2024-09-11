"use client";
import { usePathname } from "next/navigation";
import MainHeader from "../../components/header/MainHeader";
import HeaderTwo from "../../components/header/HeaderTwo";

export default function Header() {
  const HeaderChooser = () => {
    const pathname = usePathname();
    if (pathname == "/") {
      return <MainHeader />;
    } else if (pathname == "/HomeOne") {
      return <MainHeader />;
    }
  };
  return HeaderChooser();
}
