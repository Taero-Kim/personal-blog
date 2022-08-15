import Link from "next/link";
import { IPostItemProps } from "@type/posts";
import { useRouter } from "next/router";

const PostItem = ({ post }: IPostItemProps) => {
  const router = useRouter();
  const authorClass = (author: string) => {
    if (author === "hulk") return "text-[#0C9A00]";
    else if (author === "spiderman") return "text-[#0067a3]";
    else if (author === "strange") return "text-[#ab0c0c]";
    else if (author === "wanda") return "text-[#ff3399]";
  };

  const onMovePostDetail = () => router.push(`/posts/${post.fileName}`);
  return (
    <div className="w-full">
      <div
        onClick={onMovePostDetail}
        className="mb-3 flex aspect-thumbnail w-full cursor-pointer items-center justify-center bg-[#D9D9D9]"
      >
        <img
          className="aspect-thumbnail cursor-pointer"
          src={post.thumbnail}
          alt="thumbnail"
        />
      </div>
      <div className="mb-2 font-normal leading-[26px] text-[#303030]">
        {post.category}
      </div>
      <div
        onClick={onMovePostDetail}
        className="mb-2 h-[42px] cursor-pointer overflow-hidden truncate text-xl font-bold leading-[42px]"
      >
        {post.title}
      </div>
      <div
        onClick={onMovePostDetail}
        className="line-clamp3 mb-3 h-[78px] w-full cursor-pointer font-normal leading-[26px] tracking-[-0.03em] text-[#525252]"
      >
        {post.content}
      </div>
      <div className="flex justify-between">
        <div className="leading-[26px] text-[#8C8C8C]">{post.date}</div>
        <Link href={`/${post.author}`}>
          <a className={authorClass(post.author)}>{post.author}</a>
        </Link>
      </div>
    </div>
  );
};

export default PostItem;
