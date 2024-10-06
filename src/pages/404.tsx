import Head from 'next/head';
import Link from 'next/link';

export default function Custom404() {
  return (
    <>
      <Head>
        <title>404 - 页面未找到</title>
        <meta name="description" content="抱歉，您请求的页面不存在" />
      </Head>
      <div className="flex flex-col items-center justify-center min-h-screen text-center">
        <h1 className="text-6xl font-bold mb-4">404</h1>
        <p className="text-xl mb-8">抱歉，您请求的页面不存在。</p>
        <Link href="/" className="text-blue-600 dark:text-blue-400 hover:underline">
          返回首页
        </Link>
      </div>
    </>
  );
}