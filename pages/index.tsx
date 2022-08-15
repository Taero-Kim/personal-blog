import { IPosts } from "@type/posts";
import type { GetStaticProps, NextPage } from "next";
import { readdirSync, readFileSync } from "fs";
import matter from "gray-matter";
import PostList from "@components/PostList";
import CarouselSlide from "@components/CarouselSlide";

const Home: NextPage<IPosts> = ({ posts }: IPosts) => {
  return (
    <>
      <CarouselSlide />
      <div className="pt-[48px] pb-5 text-center text-[18px] font-bold leading-[42px] text-[#303030]">
        최신글
      </div>
      <PostList posts={posts} />
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const posts = readdirSync("./posts").map((fileName) => {
    const file = fileName.replace(".mdx", "");
    const info = readFileSync(`./posts/${fileName}`, "utf-8");

    const { data } = matter(info);
    return { ...data, fileName: file };
  });

  const filteredPosts = posts.sort(
    (a: any, b: any) => new Date(b.date).valueOf() - new Date(a.date).valueOf()
  );

  return {
    props: { posts: filteredPosts },
  };
};

export default Home;
