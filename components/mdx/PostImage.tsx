interface ImageProps {
  src: string;
  width: number;
  alt?: string;
}
const PostImage = ({ src, width }: ImageProps) => {
  return (
    <div className="flex w-full justify-center">
      <img className="object-contain" src={src} width={width} alt="" />
    </div>
  );
};

export default PostImage;
