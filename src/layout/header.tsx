import { Link } from '@/common/link';
import { FaGithub } from 'react-icons/fa';
import { Logo } from './logo';

export function Header() {
  return (
    <header className="flex items-center justify-between gap-2 p-4">
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
