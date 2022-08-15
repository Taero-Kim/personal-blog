import { IParagraphProps } from "@type/mdx";

const Paragraph = ({ children }: IParagraphProps) => {
  return <p className="max-w-[1080px]">{children}</p>;
};

export default Paragraph;
