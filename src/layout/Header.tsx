import Link from '@/common/Link';
import { CodeBracketIcon } from '@heroicons/react/24/outline';

export default function Header() {
  return (
    <header className="p-4 flex justify-end">
      <Link
        aria-label="Check the source code on GitHub"
        href="https://github.com/onderonur/code-image-generator"
        isExternal
      >
        <CodeBracketIcon className="h-6 w-6" />
      </Link>
    </header>
  );
}
