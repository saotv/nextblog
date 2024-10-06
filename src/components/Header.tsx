import Link from 'next/link';
import ThemeToggle from './ThemeToggle';

const Header = () => {
  return (
    <header className="bg-white dark:bg-gray-800 shadow-md">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-gray-800 dark:text-white">
          我的博客
        </Link>
        <div className="flex items-center space-x-4">
          <Link href="/posts" className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white">
            文章
          </Link>
          <Link href="/about" className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white">
            关于
          </Link>
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
};

export default Header;