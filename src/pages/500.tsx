import Head from 'next/head';
import Link from 'next/link';

export default function Custom500() {
  return (
    <>
      <Head>
        <title>500 - 服务器错误</title>
        <meta name="description" content="抱歉，服务器出现了错误" />
      </Head>
      <div className="flex flex-col items-center justify-center min-h-screen text-center">
        <h1 className="text-6xl font-bold mb-4">500</h1>
        <p className="text-xl mb-8">抱歉，服务器出现了错误。</p>
        <Link href="/" className="text-blue-600 dark:text-blue-400 hover:underline">
          返回首页
        </Link>
      </div>
    </>
  );
}