import Link from '@/common/link';
import { FaGithub } from 'react-icons/fa';
import Logo from './logo';

export default function Header() {
  return (
    <header className="p-4 flex gap-2 justify-between items-center">
      <Logo className="h-8 w-8" />
      <Link
        aria-label="Check the source code on GitHub"
        href="https://github.com/onderonur/code-image-generator"
        isExternal
      >
        <FaGithub className="h-8 w-8" />
      </Link>
    </header>
  );
}
