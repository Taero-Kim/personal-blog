export interface Post {
  title: string;
  content: string;
  date: string;
  author: string;
  category: string;
  slogan?: string;
  thumbnail?: string;
  tags?: string;
  fileName: string;
}

export interface PostItemProps {
  post: Post;
}

export interface Posts {
  posts: Post[];
  type?: string;
}

export interface PostTopSectionProps {
  data: Post;
}
