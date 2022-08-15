import { Dispatch, SetStateAction } from "react";

export interface ICarouselContent {
  id: number;
  title: string;
  url: string;
  image: string;
}

export interface IHeaderProps {
  setHasTabBorder: Dispatch<SetStateAction<boolean>>;
}
