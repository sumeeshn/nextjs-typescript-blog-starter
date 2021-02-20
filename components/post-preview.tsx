import DateFormatter from "./date-formatter";
import Link from "next/link";
import Author from "../types/author";

type Props = {
  title: string;
  coverImage?: string;
  date: string;
  author: Author;
  slug: string;
};

const PostPreview = ({
  title,
  coverImage,
  date,
  author,
  slug,
}: Props) => {
  return (
    <div>
      <h3 className="text-3xl mb-3 leading-snug">
        <Link as={`/posts/${slug}`} href="/posts/[slug]">
          <a className="hover:underline">{title}</a>
        </Link>
      </h3>
      <div className="text-sm font-thin mb-4 text-gray-500 dark:text-gray-300">
        <DateFormatter dateString={date} /> &#10022; {author.name}
      </div>
    </div>
  );
};

export default PostPreview;
