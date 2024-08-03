import "./globals.css";
import TopHeader from "../../components/header/TopHeader";
import { jost } from "./fonts";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <title>Graptor</title>
      <body className={jost.className}>
        <div>
          <TopHeader />
          {children}
        </div>
      </body>
    </html>
  );
}
