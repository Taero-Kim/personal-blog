/* thumbnail : 1032 x 750 */
import { MdxImageProps } from "@type/mdx";

const PostImage = ({ src, width, caption }: MdxImageProps) => {
  return (
    <div className="flex w-full flex-col items-center">
      <img className="mb-2 object-contain" src={src} width={width} alt="" />
      <div className="text-sm italic text-gray-400">{caption}</div>
    </div>
  );
};

export default PostImage;
