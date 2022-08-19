import { useRouter } from "next/router";
import { useState } from "react";

import { useRecoilState } from "recoil";
import { globalNavAtom } from "states/common";

import { HeaderProps } from "@type/common";
import Drawer from "./Drawer";
import Portal from "./Portal";
import DarkMode from "assets/DarkMode";
import HamburgerNav from "assets/HamburgerNav";
import LightMode from "assets/LightMode";

const Header = ({ dark, setDark }: HeaderProps) => {
  const router = useRouter();
  const [drawerOpen, setDrawerOpen] = useState<"open" | "close" | "animate">(
    "close"
  );

  const navList = [
    { content: "모든 글", route: "/" },
    { content: "소개", route: "/about" },
  ];
  const [globalNav, setGlobalNav] = useRecoilState(globalNavAtom);
  const onMoveMainHandler = () => {
    router.push("/");
    setGlobalNav("모든 글");
  };

  const navListClass = (item: string) => {
    const defaultClass =
      "flex items-center justify-center text-lg cursor-pointer dark:text-darkText ";
    if (item === globalNav) return defaultClass + "text-black60 font-bold";
    else return defaultClass + "text-black20 font-normal dark:font-light";
  };

  return (
    <>
      <Portal selector="drawer">
        <Drawer drawerOpen={drawerOpen} setDrawerOpen={setDrawerOpen} />
      </Portal>

      <div className="hidden md:contents">
        <div className="sticky top-0 mx-auto max-w-[1080px] bg-white bg-opacity-50 py-[8px] px-4 dark:bg-darkBg dark:bg-opacity-50">
          <div className="flex justify-between py-2">
            <div
              onClick={onMoveMainHandler}
              className="flex cursor-pointer items-center px-2 text-2xl font-bold text-black dark:text-white"
            >
              💻 Taero.blog
            </div>

            <div className="flex items-center space-x-8 px-2">
              {navList.map((item, i) => (
                <div
                  key={i}
                  className={navListClass(item.content)}
                  onClick={() => {
                    setGlobalNav(item.content);
                    router.push(item.route);
                  }}
                >
                  {item.content}
                </div>
              ))}

              {dark ? (
                <DarkMode onClick={() => setDark(false)} />
              ) : (
                <LightMode onClick={() => setDark(true)} />
              )}
            </div>
          </div>
        </div>
      </div>

      {/* 768px break-points*/}
      <div className="contents md:hidden">
        <div className="sticky top-0 mx-auto h-[60px] max-w-[1080px] bg-white bg-opacity-50 dark:bg-darkBg dark:bg-opacity-50">
          <div className="flex h-full items-center justify-between px-4">
            <HamburgerNav setDrawerOpen={setDrawerOpen} />
            <div
              onClick={onMoveMainHandler}
              className="flex cursor-pointer items-center px-2 text-lg font-bold text-black dark:text-white"
            >
              Taero.blog
            </div>

            {dark ? (
              <DarkMode onClick={() => setDark(false)} />
            ) : (
              <LightMode onClick={() => setDark(true)} />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
