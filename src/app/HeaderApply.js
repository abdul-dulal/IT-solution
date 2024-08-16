"use client";

import { useRouter } from "next/navigation";
import MainHeader from "../../components/header/MainHeader";
import HeaderTwo from "../../components/header/HeaderTwo";
const HeaderApply = () => {
  const { pathname } = useRouter();
  console.log(pathname);

  // if (pathname("/HomeOne")) {
  //   return <MainHeader />;
  // } else if (pathname("/ServiceOne")) {
  //   return <HeaderTwo />;
  // }
  return (
    <div>
      <h1>hello</h1>
    </div>
  );
};

export default HeaderApply;
