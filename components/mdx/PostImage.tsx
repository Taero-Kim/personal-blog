import { MdxImageProps } from "@type/mdx";

const PostImage = ({ src, width }: MdxImageProps) => {
  return (
    <div className="flex w-full justify-center">
      <img className="object-contain" src={src} width={width} alt="" />
    </div>
  );
};

export default PostImage;
