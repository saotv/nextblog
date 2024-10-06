import Head from 'next/head';
import Link from 'next/link';
import { GetStaticProps } from 'next';
import { getSortedPostsData } from '@/lib/posts';

export default function Posts({ allPostsData }) {
  return (
    <>
      <Head>
        <title>所有文章 - 我的博客</title>
        <meta name="description" content="浏览我的所有博客文章" />
      </Head>
      <div className="prose dark:prose-invert lg:prose-xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">所有文章</h1>
        <ul>
          {allPostsData.map(({ id, date, title, excerpt }) => (
            <li key={id} className="mb-8">
              <Link href={`/posts/${id}`} className="text-2xl text-blue-600 dark:text-blue-400 hover:underline">
                {title}
              </Link>
              <br />
              <small className="text-gray-500 dark:text-gray-400">{date}</small>
              <p>{excerpt}</p>
              <Link href={`/posts/${id}`} className="text-blue-600 dark:text-blue-400 hover:underline">
                阅读全文
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
};