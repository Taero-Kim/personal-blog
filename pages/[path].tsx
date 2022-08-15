import { readdirSync, readFileSync } from "fs";
import matter from "gray-matter";
import { GetStaticPaths, GetStaticProps } from "next";
import { IPosts } from "@type/posts";
import PostList from "@components/PostList";

const Path = ({ posts, type }: IPosts) => {
  return (
    <div className="mx-auto max-w-[1080px] pt-[60px] pb-4">
      <div className="mb-9 px-4">
        <div className="text-[32px] font-bold leading-[45px] text-black">
          {type === "author" ? (
            <>
              {posts[0].author === "hulk" && "👊 Hulk"}
              {posts[0].author === "wanda" && "✌Wanda✌"}
              {posts[0].author === "strange" && "👌 Dr.strange"}
              {posts[0].author === "spiderman" && "🕷 Spiderman"}
            </>
          ) : (
            <>
              {/* {posts[0].category === "design" && "🎨 DESIGN"}
              {posts[0].category === "etc" && "🎸 ETC"} */}
              {posts[0].category === "tech" && "💻 TECH"}
            </>
          )}
        </div>
        <div className="text-xl font-bold leading-[42px] text-black">
          {type === "author" ? (
            <>{posts[0].slogan}</>
          ) : (
            <>
              {/* {posts[0].category === "design" && "오늘도 즐겁게 디자인하자"}
              {posts[0].category === "etc" && "기타 카테고리입니다"} */}
              {posts[0].category === "tech" && "오늘도 즐겁게 코딩하자"}
            </>
          )}
        </div>
      </div>
      <PostList posts={posts} />
    </div>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const pathList = ["hulk", "wanda", "strange", "spiderman", "tech"].map(
    (path) => {
      return { params: { path } };
    }
  );

  return {
    paths: pathList,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  if (
    context?.params?.path === "hulk" ||
    context?.params?.path === "wanda" ||
    context?.params?.path === "strange" ||
    context?.params?.path === "spiderman"
  ) {
    const postList = readdirSync("./posts").map((fileName) => {
      const file = fileName.replace(".mdx", "");
      const fileInfo = readFileSync(`./posts/${fileName}`, "utf-8");
      const { data } = matter(fileInfo);

      if (data.author === context?.params?.path)
        return { ...data, fileName: file };
      else return null;
    });

    const posts = postList.filter((post) => post !== null);

    const filteredPosts = posts.sort(
      (a: any, b: any) =>
        new Date(b.date).valueOf() - new Date(a.date).valueOf()
    );

    return {
      props: {
        posts: filteredPosts,
        type: "author",
      },
    };
  } else {
    const postList = readdirSync("./posts").map((fileName) => {
      const file = fileName.replace(".mdx", "");
      const fileInfo = readFileSync(`./posts/${fileName}`, "utf-8");
      const { data } = matter(fileInfo);

      if (data.category === context?.params?.path)
        return { ...data, fileName: file };
      else return null;
    });

    const posts = postList.filter((post) => post !== null);

    const filteredPosts = posts.sort(
      (a: any, b: any) =>
        new Date(b.date).valueOf() - new Date(a.date).valueOf()
    );

    return {
      props: {
        posts: filteredPosts,
        type: "category",
      },
    };
  }
};

export default Path;
