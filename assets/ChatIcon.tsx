import React from "react";

const ChatIcon = () => {
  return (
    <a href="https://open.kakao.com/o/gzGH6Vve">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 hover:fill-[#FF5100] hover:stroke-black20 dark:stroke-white"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
        />
      </svg>
    </a>
  );
};

export default ChatIcon;
