import { ICarouselContent } from "@type/common";
import { useState, useRef, UIEvent, ReactElement } from "react";

const CarouselSlide = () => {
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const slideRef = useRef<HTMLDivElement>(null);

  // const onScrollHandler = (e: UIEvent<Element>) => {
  //   if (e.currentTarget.scrollLeft === 0) {
  //     setCurrentSlide(0);
  //   } else if (e.currentTarget.scrollLeft > 540 && 이게 < 1600) {
  //     setCurrentSlide(1);
  //   } else if (e.currentTarget.scrollLeft === 2160) {
  //     setCurrentSlide(2);
  //   }
  // };

  const onScrollHandler = (e: UIEvent<Element>) => {
    const scrollLeft = e.currentTarget.scrollLeft; // 왼쪽부터 시작한 기준 스크롤 값 (px)
    const slideWidth = slideRef.current.getBoundingClientRect().width; // 너비 (px)

    if (scrollLeft <= slideWidth * 0.5) {
      setCurrentSlide(0);
    } else if (
      scrollLeft > slideWidth * 0.5 &&
      scrollLeft <= slideWidth * 1.5
    ) {
      setCurrentSlide(1);
    } else if (scrollLeft > slideWidth * 1.5) {
      setCurrentSlide(2);
    }
    // console.log("left", e.currentTarget.scrollLeft);
    // console.log("slideRef", slideRef.current.getBoundingClientRect().width);
  };

  const changeSlide = (id: number) => {
    const slideWidth = slideRef.current.getBoundingClientRect().width;

    if (id === 0) {
      slideRef.current.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    } else if (id === 1) {
      slideRef.current.scrollTo({
        top: 0,
        left: slideWidth,
        behavior: "smooth",
      });
    } else if (id === 2) {
      slideRef.current.scrollTo({
        top: 0,
        left: slideWidth * 2,
        behavior: "smooth",
      });
    }
  };

  const buttonClass = (id: number) => {
    if (id === currentSlide) {
      return "mx-[10px] h-[10px] w-[10px] rounded-full bg-[#525252]";
    } else {
      return "mx-[10px] h-[10px] w-[10px] rounded-full bg-[#DBDBDB]";
    }
  };

  const contentsList: ICarouselContent[] | ReactElement = [
    {
      id: 0,
      title: "voteslug",
      url: "https://voteslug.com/",
      image: "/images/slider-test-1.png",
    },
    {
      id: 1,
      title: "voteslug",
      url: "https://voteslug.com/",
      image: "/images/slider-test-2.png",
    },
    {
      id: 2,
      title: "voteslug",
      url: "https://voteslug.com/",
      image: "/images/slider-test-3.png",
    },
  ];

  return (
    <div className="mx-auto flex max-w-[1080px] flex-col md:px-4">
      <div
        ref={slideRef}
        onScroll={onScrollHandler}
        className="no-scrollbar aspect-banner mb-8 flex snap-x snap-mandatory overflow-x-scroll"
      >
        {contentsList.map((project, id) => {
          return (
            <div
              key={id}
              className="flex min-w-full cursor-pointer snap-center items-center justify-center bg-[#EBEBEB]"
            >
              <img src={project.image} alt={project.title} />
            </div>
          );
        })}
      </div>

      <div className="flex justify-center">
        {[...new Array(Math.ceil(contentsList.length))].map((_, id) => {
          return (
            <div key={id}>
              <button
                onClick={() => changeSlide(id)}
                className={buttonClass(id)}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CarouselSlide;
