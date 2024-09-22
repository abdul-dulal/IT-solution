import Link from "next/link";
import Footer from "../../components/ui/Footer/Footer";
import { rubik } from "./fonts";

export default function NotFound() {
  return (
    <div>
      <div className="container  mx-auto text-center space-y-5 my-10">
        <h2 className=" italic">404</h2>
        <p>Could not find requested resource</p>
        <Link
          href="/"
          className={`${rubik.className} mx-auto  h-[50px] w-[250px] flex  items-center text-[16px]  leading-[.8] text-white overflow-hidden relative z-[1] text-center capitalize font-medium bg-primary py-[14px] px-[25px]  cursor-pointer rounded-[5px] transform  transition-all duration-400 hover:text-white before:absolute before:content-[''] before:w-full before:h-0 before:left-0 before:top-0 before:-z-[1] before:bg-secondary before:transition-height before:duration-400 before:ease-custom-ease before:delay-0  hover:before:h-full hover:before:top-auto hover:before:bottom-0`}
        >
          back to homepage
        </Link>
      </div>
      <Footer />
    </div>
  );
}
