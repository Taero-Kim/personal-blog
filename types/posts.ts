export interface IPost {
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

export interface IPostItemProps {
  post: IPost;
}

export interface IPosts {
  posts: IPost[];
  type?: string;
}
