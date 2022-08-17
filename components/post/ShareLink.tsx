import { PostTopSectionProps } from "@type/posts";
import { useRouter } from "next/router";
import Script from "next/script";
import React from "react";

declare global {
  // Kakao 함수를 전역에서 사용할 수 있도록 선언
  interface Window {
    Kakao: any;
  }
}

const ShareLink = ({ data }: PostTopSectionProps) => {
  const router = useRouter();

  const shareWithKakao = () => {
    window.Kakao.Share.sendDefault({
      objectType: "feed",
      content: {
        title: data.title,
        description: data.content,
        imageUrl: data.thumbnail,
        link: {
          mobileWebUrl: `https://devengers-blog.com${router.asPath}`,
          webUrl: `https://devengers-blog.com${router.asPath}`,
        },
      },
      buttons: [
        {
          title: "해당 글로 이동",
          link: {
            mobileWebUrl: `https://devengers-blog.com${router.asPath}`,
            webUrl: `https://devengers-blog.com${router.asPath}`,
          },
        },
      ],
    });
  };

  const shareWithLink = () => {
    navigator.clipboard
      .writeText(`https://devengers-blog.com${router.asPath}`)
      .then(() => alert("링크가 복사되었습니다."));
  };

  return (
    <>
      <Script
        src="https://developers.kakao.com/sdk/js/kakao.js"
        onLoad={() => {
          window.Kakao.init(process.env.NEXT_PUBLIC_KAKAO_JAVASCRIPT_KEY);
          window.Kakao.isInitialized();
        }}
      />
      <div className="mb-[20px] flex justify-center space-x-4">
        <div
          onClick={shareWithKakao}
          className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-full bg-gray20"
        >
          <img src="/images/share/kakao-share.svg" alt="kakao-share" />
        </div>
        <div
          onClick={shareWithLink}
          className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-full bg-gray20"
        >
          <img src="/images/share/link-share.svg" alt="link-share" />
        </div>
      </div>
    </>
  );
};

export default ShareLink;
