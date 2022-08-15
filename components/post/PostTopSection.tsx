import { IPost } from "@type/posts";

interface IPostTopSectionProps {
  data: IPost;
}

const PostTopSection = ({ data }: IPostTopSectionProps) => {
  const { title, date, thumbnail, tags } = data;
  const tagsList = tags?.split(" ");
  return (
    <div className="mx-auto mb-8 max-w-[1080px] px-4 md:px-0">
      <div className="mb-8 flex flex-col items-center justify-center">
        <div className="pt-[48px] text-[32px] font-bold leading-[45px] text-black40">
          {title}
        </div>
        <div className="py-5 text-base font-normal text-gray100">{date}</div>
        <img
          className="aspect-contents object-contain"
          src={thumbnail}
          alt=""
        ></img>
      </div>
      <div className="flex items-center">
        {tagsList?.map((tag, i) => (
          <div
            className="mr-[8px] flex h-9 min-w-[80px] items-center justify-center rounded-[20px] bg-gray20 px-4 text-sm font-normal text-gray100"
            key={i}
          >
            {tag}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PostTopSection;
