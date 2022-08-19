import Head from "next/head";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote";
import { useEffect } from "react";

import type { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { PostDetailProps } from "@type/posts";

import PostTopSection from "@components/post/PostTopSection";
import PostBottomSection from "@components/post/PostBottomSection";
import PostImage from "@components/mdx/PostImage";

import { readdirSync, readFileSync } from "fs";
import matter from "gray-matter";
import hljs from "highlight.js";
import javascript from "highlight.js/lib/languages/javascript";

const components = {
  PostImage,
};

hljs.registerLanguage("javascript", javascript);

const PostDetail: NextPage<PostDetailProps> = ({
  mdxContent,
  data,
  prevPost,
  nextPost,
}: PostDetailProps) => {
  useEffect(() => {
    hljs.initHighlighting();
  }, []);

  return (
    <>
      <Head>
        <title>{data.title}</title>
        <meta charSet="UTF-8" />
        <meta name="description" content={data.content} />
        <meta name="description" content={data.tags} />
        <meta property="og:image" content={data.thumbnail} />
        <meta
          property="og:url"
          content={`https://taero.blog/${data.fileName}`}
        />
        <meta property="og:description" content={data.content} />
        <meta property="og:title" content={data.title} />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.6.0/styles/base16/dracula.min.css"
        />
      </Head>

      <PostTopSection data={data} />
      <div className="mx-auto mb-12 max-w-[1080px] px-4 md:px-2">
        <div className="prose-headings:text-black30 prose max-w-none prose-p:text-black20 prose-code:text-blue-400 dark:prose-headings:text-darkText dark:prose-p:text-darkPText dark:prose-a:text-yellow-600 dark:prose-strong:text-pink-500 dark:prose-code:bg-transparent dark:prose-code:text-green-400 dark:prose-li:text-darkPText dark:prose-li:marker:text-white">
          <MDXRemote {...mdxContent} components={components} />
        </div>
      </div>
      <PostBottomSection data={data} prevPost={prevPost} nextPost={nextPost} />
    </>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const fileList = readdirSync("./posts").map((fileName) => {
    const fileNameRoute = fileName.replace(".mdx", "");
    return { params: { slug: fileNameRoute } };
  });

  return {
    paths: fileList,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const { data, content } = matter.read(`./posts/${context?.params?.slug}.mdx`);
  const mdxContent = await serialize(content);

  const posts = readdirSync("./posts").map((fileName) => {
    const file = fileName.replace(".mdx", "");
    const info = readFileSync(`./posts/${fileName}`, "utf-8");

    const { data } = matter(info);
    return { ...data, fileName: file };
  });

  const filteredPosts = posts.sort(
    (a, b) => new Date(b.date).valueOf() - new Date(a.date).valueOf()
  );

  const currentPostIndex = filteredPosts.findIndex(
    (item) => item.fileName === context?.params?.slug
  );

  const prevPost = {
    title: filteredPosts[currentPostIndex + 1]?.title || null,
    route: filteredPosts[currentPostIndex + 1]?.fileName || null,
  };

  const nextPost = {
    title: filteredPosts[currentPostIndex - 1]?.title || null,
    route: filteredPosts[currentPostIndex - 1]?.fileName || null,
  };

  return {
    props: {
      mdxContent,
      data,
      prevPost,
      nextPost,
    },
  };
};

export default PostDetail;
