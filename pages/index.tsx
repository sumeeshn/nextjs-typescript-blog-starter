import Container from "../components/container";
import AllStories from "../components/all-posts";
import Intro from "../components/intro";
import Layout from "../components/layout";
import { postFilePaths, POSTS_PATH } from "../utils/mdxUtils";
import fs from "fs";
import matter from "gray-matter";
import { join } from "path";
import Head from "next/head";
import Post from "../types/post";

type Props = {
  allPosts: Post[];
};

const Index = ({ allPosts }: Props) => {
  return (
    <>
      <Layout>
        <Head>
          <title>Next.js Blog Example</title>
        </Head>
        <Container>
          <Intro />
          {allPosts.length > 0 && <AllStories posts={allPosts} />}
        </Container>
      </Layout>
    </>
  );
};

export default Index;

export function getStaticProps() {
  const allPosts = postFilePaths.map((filePath) => {
    const source = fs.readFileSync(join(POSTS_PATH, filePath));
    const { content, data } = matter(source);

    return {
      content,
      data: {
        ...data,
        slug: filePath.replace(/\.mdx?$/, ""),
      },
    };
  });

  return { props: { allPosts } };
}
