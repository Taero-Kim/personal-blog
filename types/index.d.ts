import { Post } from "./posts";

type Input = string | Buffer;

declare module "gray-matter" {
  declare namespace matter {
    interface GrayMatterFile {
      data: Post;
    }
  }

  export = matter;
}
