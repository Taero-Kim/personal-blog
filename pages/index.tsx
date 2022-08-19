import Head from "next/head";
import { useEffect, useState } from "react";

import matter from "gray-matter";
import { readdirSync, readFileSync } from "fs";

import { Posts } from "@type/posts";
import type { GetStaticProps, NextPage } from "next";

import PostList from "@components/post/PostList";
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

    const timer = setTimeout(() => {
      const searchKeyword = posts.filter(
        (post) =>
          post.title.toLowerCase().includes(keyword.toLowerCase()) ||
          post.tags.toLowerCase().includes(keyword.toLowerCase())
      );
      setFilteredPost(searchKeyword);
      setSearching(false);
    }, 200);

    return () => clearTimeout(timer);
  }, [keyword, posts]);

  return (
    <>
      <Head>
        <title>태로 블로그</title>
        <meta charSet="UTF-8" />
        <meta name="description" content={"좋은 개발자로 성장하고 싶습니다."} />
        <meta
          property="og:image"
          content="https://cdn.discordapp.com/attachments/1002228584401870871/1008936551461441556/OG.png"
        />
        <meta property="og:url" content="https://taero.blog" />
        <meta property="og:description" content="태로의 개발 공부 여정" />
        <meta property="og:title" content="태로샐러드" />
      </Head>
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
    (a, b) => new Date(b.date).valueOf() - new Date(a.date).valueOf()
  );

  return {
    props: { posts: filteredPosts },
  };
};

export default Home;
