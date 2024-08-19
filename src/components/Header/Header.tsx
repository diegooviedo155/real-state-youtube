"use client";

import { CiMenuFries } from "react-icons/ci";
import { BsTelephone } from "react-icons/bs";
import Link from "next/link";
import { Navbar } from "../Navbar";
import { useState } from "react";

export function Header() {
  const [openMobileMenu, setOpenMobileMenu] = useState(false);

  return (
    <header className="container mx-auto my-5">
      <div className="flex items-center justify-between px-5 md:px-2">
        <Link href="/">
          <h1 className="font-medium">TarreReaState</h1>
        </Link>
        <CiMenuFries
          className="block text-2xl md:hidden"
          onClick={() => setOpenMobileMenu(!openMobileMenu)}
        ></CiMenuFries>

        <Navbar openMobileMenu={openMobileMenu}></Navbar>

        <div className="flex items-center gap-2 md:gap-5">
          <Link
            href="tel:2134234234"
            className="flex items-center gap-4 cursor-pointer"
          >
            <BsTelephone></BsTelephone>
            <span className="hidden md:block">+54 1112332112</span>
          </Link>
          <Link
            href="/login"
            className="px-3 py-2 text-white rounded-lg bg-secondary hover:bg-black"
          >
            Login
          </Link>
        </div>
      </div>
    </header>
  );
}
