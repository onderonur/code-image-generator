import { NextLink } from '@/core/ui/components/link';
import { FaGithub } from 'react-icons/fa';
import { Logo } from './logo';

export function Header() {
  return (
    <header className="flex items-center justify-between gap-2 p-4">
      <Logo className="size-8" />
      <NextLink
        aria-label="Check the source code on GitHub"
        href="https://github.com/onderonur/code-image-generator"
      >
        <FaGithub className="size-8" />
      </NextLink>
    </header>
  );
}
