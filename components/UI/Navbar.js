import React from "react";
import { Navbar, NavbarBrand, NavbarContent } from "@nextui-org/react";
import Link from "next/link";
import dynamic from "next/dynamic";
import Video from "./Video";

const DynamicSwitch = dynamic(() => import("../Comp/ModeSwitch"), {
  ssr: false,
});

export default function NavBar() {
  return (
    <Navbar shouldHideOnScroll className="z-[20] shadow-lg" title="Navbar">
      <NavbarBrand>
        <Link href="/" className="flex flex-row">
          <Video className="mr-2" />
          <h4 className="font-bold text-inherit">Youtube Downloader</h4>
        </Link>
      </NavbarBrand>
      <NavbarContent justify="end">
        <DynamicSwitch />
      </NavbarContent>
    </Navbar>
  );
}
