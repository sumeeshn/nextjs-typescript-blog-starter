import PostPreview from "./post-preview";
import Post from "../types/post";

type Props = {
  posts: Post[];
};

const MoreStories = ({ posts }: Props) => {
  return (
    <section>
      {posts.map((post) => (
        <PostPreview
          key={post.data.slug}
          title={post.data.title}
          date={post.data.date}
          author={post.data.author}
          slug={post.data.slug}
        />
      ))}
    </section>
  );
};

export default MoreStories;
