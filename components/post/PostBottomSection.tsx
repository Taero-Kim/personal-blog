import { useRouter } from "next/router";
import ShareLink from "./ShareLink";
import { Post, PrevOrNextPost } from "@type/posts";

interface PostTopSectionProps {
  data: Post;
  prevPost: PrevOrNextPost;
  nextPost: PrevOrNextPost;
}

const PostBottomSection = ({
  data,
  prevPost,
  nextPost,
}: PostTopSectionProps) => {
  const router = useRouter();
  return (
    <div>
      <ShareLink data={data} />
      <div className="mx-auto mb-10 max-w-[1080px] space-y-4 border-t border-b border-gray-200 py-4">
        {prevPost.title && (
          <div className="px-4">
            <div className="mb-1 text-sm font-bold text-[#6B7280] dark:text-white">
              이전 글
            </div>
            <div
              onClick={() => router.push(`/posts/${prevPost.route}`)}
              className="cursor-pointer text-sm text-[#64748B] hover:font-bold dark:text-gray-300"
            >
              {prevPost.title}
            </div>
          </div>
        )}
        {nextPost.title && (
          <div className="px-4">
            <div className="mb-1 text-sm font-bold text-[#6B7280] dark:text-white">
              다음 글
            </div>
            <div
              onClick={() => router.push(`/posts/${nextPost.route}`)}
              className="cursor-pointer text-sm text-[#64748B] hover:font-bold dark:text-gray-300"
            >
              {nextPost.title}
            </div>
          </div>
        )}
      </div>
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
