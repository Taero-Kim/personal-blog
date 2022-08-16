import { Post } from "@type/posts";
import ShareLink from "./ShareLink";

interface PostTopSectionProps {
  data: Post;
}

const PostBottomSection = ({ data }: PostTopSectionProps) => {
  return (
    <div>
      <ShareLink data={data} />
      <div className="relative flex h-[110px] justify-center bg-gray20 dark:bg-darkTag">
        <div className="absolute top-[-25px] flex w-full max-w-[1080px] justify-end px-4 md:px-0">
          <div className="itmes-end mr-4 flex flex-col justify-end">
            <div className="ml-auto font-bold leading-[26px] text-black60 dark:text-darkText">
              Taero
            </div>
            <div className="text-sm leading-6 text-black20 dark:text-darkPText">
              꾸준히 성장하고 싶은 개발자입니다.
            </div>
          </div>
          <div className="h-[100px] w-[100px] rounded-full bg-white">
            <img src="/images/salad.png" alt="main-logo" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostBottomSection;
