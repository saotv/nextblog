import Head from 'next/head';
import Link from 'next/link';
import { GetStaticProps } from 'next';
import { getSortedPostsData } from '@/lib/posts';

export default function Home({ allPostsData }) {
  return (
    <>
      <Head>
        <title>我的博客</title>
        <meta name="description" content="欢迎来到我的个人博客" />
      </Head>
      <div className="prose dark:prose-invert lg:prose-xl mx-auto">
        <h1 className="text-3xl font-bold mb-4">欢迎来到我的博客</h1>
        <p className="mb-8">这里是我分享想法和经验的地方。</p>
        <h2 className="text-2xl font-semibold mb-4">最新文章</h2>
        <ul>
          {allPostsData.slice(0, 3).map(({ id, date, title }) => (
            <li key={id} className="mb-4">
              <Link href={`/posts/${id}`} className="text-blue-600 dark:text-blue-400 hover:underline">
                {title}
              </Link>
              <br />
              <small className="text-gray-500 dark:text-gray-400">{date}</small>
            </li>
          ))}
        </ul>
        <Link href="/posts" className="text-blue-600 dark:text-blue-400 hover:underline">
          查看所有文章
        </Link>
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