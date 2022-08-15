import Image from "next/image";
import { useRouter } from "next/router";
import { useState, useEffect, useRef } from "react";
import { useRecoilState } from "recoil";
import { globalNavAtom } from "states/common";
import Drawer from "./Drawer";
import Portal from "./Portal";

let logoHeight = 0;

const Header = () => {
  const router = useRouter();
  const currentPath = router.pathname;
  const logoRef = useRef<HTMLDivElement>();

  const [drawerOpen, setDrawerOpen] = useState<"open" | "close" | "animate">(
    "close"
  );
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const navList = [
    { content: "홈", route: "/" },
    // { content: "디벤져스", route: "/" },
    { content: "기술", route: "/tech" },
    { content: "디자인", route: "/design" },
    { content: "기타", route: "/etc" },
  ];
  const [globalNav, setGlobalNav] = useRecoilState(globalNavAtom);
  const onMoveMainHandler = () => {
    router.push("/");
    setGlobalNav("홈");
  };

  useEffect(() => {
    const onScroll = () => {
      const currentScroll = window.scrollY;
      setIsScrolled(currentScroll >= logoHeight);
    };

    logoHeight = logoRef.current.getBoundingClientRect().height;
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const navListClass = (item: string) => {
    const defaultClass =
      "flex flex-1 items-center justify-center text-lg cursor-pointer ";
    if (item === globalNav) return defaultClass + "black60 font-bold";
    else return defaultClass + "black20 font-normal";
  };

  return (
    <>
      <Portal selector="drawer">
        <Drawer drawerOpen={drawerOpen} setDrawerOpen={setDrawerOpen} />
      </Portal>

      <div className="hidden md:contents">
        <div ref={logoRef} className="pt-4 text-center">
          <Image
            onClick={onMoveMainHandler}
            className="cursor-pointer"
            src="/images/header/team-logo.svg"
            alt="main-logo"
            width={157}
            height={56}
          />
        </div>

        <div className="sticky top-0 mx-auto h-[60px] max-w-[1080px] bg-white bg-opacity-50 px-4">
          <div className="flex justify-between py-2">
            {isScrolled ? (
              <div className="flex cursor-pointer items-center">
                <Image
                  onClick={onMoveMainHandler}
                  className="cursor-pointer"
                  src="/images/header/team-logo.svg"
                  alt="main-logo"
                  width={118}
                  height={42}
                />
              </div>
            ) : (
              // <div className="h-[52px] w-[52px]"></div>
              <div className="h-[52px]"></div>
            )}

            <div className="flex flex-1">
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
            </div>

            {/* <div className="flex items-center">
              <Image
                src="/images/header/search-icon.svg"
                alt="search-icon"
                width={52}
                height={52}
              />
            </div> */}
          </div>
        </div>

        {currentPath === "/" ? (
          <div className="mt-2 h-[1px]"></div>
        ) : !isScrolled ? (
          <div className="mt-4 h-[1px] w-full bg-[#D9D9D9]"></div>
        ) : (
          <div className="mt-2 h-[1px]"></div>
        )}
      </div>

      {/* 768px break-points*/}
      <div className="contents md:hidden">
        <div className="sticky top-0 mx-auto h-[60px] max-w-[1080px] bg-white bg-opacity-50">
          <div className="flex h-full items-center justify-between px-4">
            <img
              onClick={() => setDrawerOpen("open")}
              src="/images/header/nav-icon.svg"
              alt="nav"
              className="cursor-pointer"
            />
            <img
              onClick={onMoveMainHandler}
              className="cursor-pointer"
              src="/images/header/sm-logo.png"
              alt="sm-logo"
            />
            <img src="/images/header/sm-search-icon.svg" alt="search-icon" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
