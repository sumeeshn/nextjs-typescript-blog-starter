import { useRouter } from "next/router";
import ErrorPage from "next/error";
import Container from "../../components/container";
import PostBody from "../../components/post-body";
import Header from "../../components/header";
import PostHeader from "../../components/post-header";
import Layout from "../../components/layout";
import PostTitle from "../../components/post-title";
import Head from "next/head";
import PostType, { PostDataType } from "../../types/post";
import { postFilePaths, POSTS_PATH } from "../../utils/mdxUtils";
import { join } from "path";
import matter from "gray-matter";
import fs from "fs";
import hydrate from "next-mdx-remote/hydrate";
import renderToString from "next-mdx-remote/render-to-string";
import mdxPrism from "mdx-prism";
import { MdxRemote } from "next-mdx-remote/types";

type Props = {
  source: MdxRemote.Source;
  frontMatter: PostDataType;
  preview?: boolean;
};

const Post = ({ source, frontMatter, preview }: Props) => {
  const content = hydrate(source);
  const router = useRouter();
  // if (!router.isFallback && !frontMatter?.slug) {
  //   return <ErrorPage statusCode={404} />
  // }
  return (
    <Layout preview={preview}>
      <Container>
        <Header />
        {router.isFallback ? (
          <PostTitle>Loading…</PostTitle>
        ) : (
          <>
            <article className="mb-32">
              <Head>
                <title>{frontMatter.title} | Next.js Blog Example</title>
              </Head>
              <PostHeader
                title={frontMatter.title}
                coverImage={frontMatter.coverImage}
                date={frontMatter.date}
                author={frontMatter.author}
              />
              <PostBody content={content} />
            </article>
          </>
        )}
      </Container>
    </Layout>
  );
};

export default Post;

type Params = {
  params: {
    slug: string;
  };
};

export const getStaticProps = async ({ params }: Params) => {
  const postFilePath = join(POSTS_PATH, `${params.slug}.mdx`);
  const source = fs.readFileSync(postFilePath);

  const { content, data } = matter(source);

  const mdxSource = await renderToString(content, {
    // Optionally pass remark/rehype plugins
    mdxOptions: {
      remarkPlugins: [
        require("remark-autolink-headings"),
        require("remark-code-titles"),
      ],
      rehypePlugins: [mdxPrism],
    },
    scope: data,
  });

  return {
    props: {
      source: mdxSource,
      frontMatter: data,
    },
  };
};

export const getStaticPaths = async () => {
  const paths = postFilePaths
    // Remove file extensions for page paths
    .map((path) => path.replace(/\.mdx?$/, ""))
    // Map the path into the static paths object required by Next.js
    .map((slug) => ({ params: { slug } }));

  return {
    paths,
    fallback: false,
  };
};
