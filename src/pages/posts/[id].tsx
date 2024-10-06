import Head from 'next/head';
import { GetStaticProps, GetStaticPaths } from 'next';
import { getAllPostIds, getPostData } from '@/lib/posts';
import Date from '@/components/Date';
import Link from 'next/link';

export default function Post({ postData }) {
  return (
    <>
      <Head>
        <title>{postData.title} - 我的博客</title>
        <meta name="description" content={postData.excerpt} />
      </Head>
      <article className="prose dark:prose-invert lg:prose-xl mx-auto">
        <h1 className="text-3xl font-bold mb-4">{postData.title}</h1>
        <div className="text-gray-500 dark:text-gray-400 mb-4">
          <Date dateString={postData.date} />
        </div>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
        <div className="mt-8">
          <Link href="/posts" className="text-blue-600 dark:text-blue-400 hover:underline">
            ← 返回文章列表
          </Link>
        </div>
      </article>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const postData = await getPostData(params.id as string);
  return {
    props: {
      postData,
    },
  };
};