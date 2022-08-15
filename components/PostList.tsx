import PostItem from "@components/PostItem";
import { IPosts } from "@type/posts";

const PostList = ({ posts }: IPosts) => {
  return (
    <div className="mx-auto grid max-w-[768px] gap-y-4 px-4 pb-[100px] md:max-w-[1080px] md:grid-cols-3 md:gap-x-6 md:gap-y-[30px]">
      {posts.map((post, i) => (
        <div key={i}>
          <PostItem post={post} />
        </div>
      ))}
    </div>
  );
};

export default PostList;
