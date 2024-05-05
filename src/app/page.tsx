import TextScroll from "@/app/_components/text_scroll";
import MenuButton from "@/app/_components/menu_button";
import HeaderCitation from "@/app/_components/header_citation";
import {InfiniteMoving} from "@/app/_components/infinit_moving";
import React from "react";



export default function Home() {
  return (
    <div className="bg-[#000]">
      <MenuButton/>
      <div className="  flex justify-center items-center h-[80vh]">
          <HeaderCitation/>
      </div>
      <div className="infinit-moving ">
        <InfiniteMoving/>
      </div>
      <TextScroll/>
    </div>
  );
}
