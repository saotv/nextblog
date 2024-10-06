import Head from 'next/head';

export default function About() {
  return (
    <>
      <Head>
        <title>关于 - 我的博客</title>
        <meta name="description" content="了解更多关于我和这个博客的信息" />
      </Head>
      <div className="prose dark:prose-invert lg:prose-xl mx-auto">
        <h1 className="text-3xl font-bold mb-4">关于我</h1>
        <p>
          你好！我是这个博客的作者。我热爱技术、写作和分享知识。
          这个博客是我记录思考、分享经验和与读者交流的平台。
        </p>
        <h2 className="text-2xl font-semibold mt-8 mb-4">博客的目的</h2>
        <p>
          创建这个博客的目的是：
        </p>
        <ul>
          <li>分享我在技术领域的学习和实践经验</li>
          <li>记录个人成长和思考</li>
          <li>与志同道合的朋友交流和学习</li>
        </ul>
        <p>
          希望你能在这里找到有价值的内容。如果有任何问题或建议，欢迎与我联系！
        </p>
      </div>
    </>
  );
}