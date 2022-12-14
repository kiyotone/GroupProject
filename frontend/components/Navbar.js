import React, { use } from "react";
import logo from "../assets/logo.png";
import Image from "next/image";
import { RxDashboard } from "react-icons/rx";
import NavContents from "./NavContents";
import { useRouter } from "next/router";

const Navbar = () => {
  const router = useRouter();
  const buttons = [
    {
      name: "Dashboard",
      icon: <RxDashboard />,
      link: "/Dashboard",
    },
    {
      name: "Expense Tracker",
      icon: <RxDashboard />,
      link: "ExpenseTracker",
    },
    {
      name: "Logout",
      icon: <RxDashboard />,
      link: "/Logout",
    },
  ];

  const goHome = () => {
    if (router.asPath != "/") {
      router.push("/");
    }
  };
  return (
    <div className="bg-[#E4E8F0]  h-screen w-[300px] flex flex-col">
      <div className="flex flex-col items-center">
        <div className="flex items-center mt-3 cursor-pointer" onClick={goHome}>
          <Image priority alt="logo" src={logo} className="w-[60px] h-[60px]" />
          <div className="text-black font-bold text-xl">Company</div>
        </div>

        <div className=" flex flex-col mt-20 w-full">
          {buttons.map((element) => (
            <NavContents
              key={element.name}
              name={element.name}
              icon={element.icon}
              link={element.link}
              router={router}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
