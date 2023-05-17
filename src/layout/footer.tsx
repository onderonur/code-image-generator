import Link from '@/common/link';

export default function Footer() {
  return (
    <footer className="py-14 text-center flex justify-center gap-2">
      <Link href="https://twitter.com/onderonur_" isExternal>
        Twitter
      </Link>
      <Link href="https://github.com/onderonur" isExternal>
        GitHub
      </Link>
      <Link href="https://www.linkedin.com/in/onderonur/" isExternal>
        LinkedIn
      </Link>
      <Link href="https://onderonur.netlify.app/blog" isExternal>
        Blog
      </Link>
    </footer>
  );
}
