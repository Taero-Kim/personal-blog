import { Posts } from "@type/posts";
import type { GetStaticProps, NextPage } from "next";
import { readdirSync, readFileSync } from "fs";
import matter from "gray-matter";
import PostList from "@components/post/PostList";
import { useEffect, useState } from "react";
import SearchBar from "@components/common/SearchBar";
import Loading from "@components/common/Loading";
import NoContents from "@components/common/NoContents";

const Home: NextPage<Posts> = ({ posts }: Posts) => {
  const [filteredPost, setFilteredPost] = useState(posts);
  const [keyword, setKeyword] = useState("");
  const [searching, setSearching] = useState(false);

  useEffect(() => {
    if (!keyword.length) {
      setFilteredPost(posts);
      setSearching(false);
      return;
    }
    setSearching(true);

    const searchAction = setInterval(() => {
      const searchKeyword = [...posts].filter(
        (post) =>
          post.title.toLowerCase().includes(keyword.toLowerCase()) ||
          post.tags.toLowerCase().includes(keyword.toLowerCase())
      );
      setFilteredPost(searchKeyword);
      setSearching(false);
    }, 200);

    return () => clearInterval(searchAction);
  }, [keyword, posts]);

  return (
    <>
      <SearchBar keyword={keyword} setKeyword={setKeyword} />
      {searching ? (
        <Loading />
      ) : filteredPost.length ? (
        <PostList posts={filteredPost} />
      ) : (
        <NoContents />
      )}
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
