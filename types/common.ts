import { ChangeEvent, Dispatch, SetStateAction } from "react";

export interface CarouselContent {
  id: number;
  title: string;
  url: string;
  image: string;
}

export interface HeaderProps {
  setDark: Dispatch<SetStateAction<boolean>>;
  dark: boolean;
}

export interface DrawerProps {
  drawerOpen: "open" | "close" | "animate";
  setDrawerOpen: Dispatch<SetStateAction<"open" | "close" | "animate">>;
}

export interface SearchBarProps {
  keyword: string;
  setKeyword: Dispatch<SetStateAction<string>>;
  handleInputChange: (event: ChangeEvent<HTMLInputElement>) => void;
}
