import { useRouter } from "next/router";
import { Dispatch, SetStateAction, useEffect } from "react";
import { useRecoilState } from "recoil";
import { globalNavAtom } from "states/common";

interface IDrawerProps {
  drawerOpen: "open" | "close" | "animate";
  setDrawerOpen: Dispatch<SetStateAction<"open" | "close" | "animate">>;
}

const Drawer = ({ drawerOpen, setDrawerOpen }: IDrawerProps) => {
  const navList = [
    { content: "홈", route: "/" },
    { content: "디벤져스", route: "/" },
    { content: "기술", route: "/tech" },
    { content: "디자인", route: "/design" },
    { content: "기타", route: "/etc" },
  ];
  const router = useRouter();
  const [globalNav, setGlobalNav] = useRecoilState(globalNavAtom);

  const drawerClass = () => {
    const defaultClass =
      "fixed top-0 left-0 z-[100] min-h-[100vh] w-[70%] bg-white pl-[51px] pt-[54px] pr-6 md:hidden ";
    if (drawerOpen === "close") {
      return "hidden";
    } else if (drawerOpen === "animate") {
      return defaultClass + "animate-drawerClose";
    } else {
      return defaultClass + "animate-drawerOpen";
    }
  };

  const navListClass = (item: string) => {
    const defaultClass =
      "px-[10px] py-[10px] text-lg leading-[42px] cursor-pointer ";
    if (item === globalNav) return defaultClass + "text-black60 font-bold";
    else return defaultClass + "text-black20 font-normal";
  };

  const onCloseDrawerHandler = () => {
    setDrawerOpen("animate");
    setTimeout(() => {
      setDrawerOpen("close");
    }, 500);
  };

  useEffect(() => {
    if (drawerOpen === "open") {
      document.body.style.cssText = `
      position: fixed; 
      top: -${window.scrollY}px;
      overflow-y: scroll;
      width: 100%;`;
      return () => {
        const scrollY = document.body.style.top;
        document.body.style.cssText = "";
        window.scrollTo(0, parseInt(scrollY || "0", 10) * -1);
      };
    }
  }, [drawerOpen]);

  return (
    <>
      {drawerOpen === "open" && (
        <div
          onClick={onCloseDrawerHandler}
          className="fixed top-0 left-0 z-[80] min-h-[100vh] w-full bg-[rgba(48,48,48)] bg-opacity-50"
        />
      )}

      <div className={drawerClass()}>
        <div className="mb-8 flex justify-end">
          <img
            className="cursor-pointer"
            onClick={onCloseDrawerHandler}
            src="/images/drawer/close-button.svg"
            alt="close-button"
          />
        </div>

        {navList.map((item, i) => (
          <div
            onClick={() => {
              setGlobalNav(item.content);
              router.push(item.route);
              onCloseDrawerHandler();
            }}
            key={i}
            className={navListClass(item.content)}
          >
            {item.content}
          </div>
        ))}
      </div>
    </>
  );
};

export default Drawer;
