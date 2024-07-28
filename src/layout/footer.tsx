import { NextLink } from '@/common/link';
import { FaGithub, FaLinkedin, FaXTwitter } from 'react-icons/fa6';
import { TbWorld } from 'react-icons/tb';

export function Footer() {
  return (
    <footer className="flex justify-center gap-4 py-14 text-center text-2xl">
      <NextLink href="https://twitter.com/onderonur_" title="X">
        <FaXTwitter />
      </NextLink>
      <NextLink href="https://github.com/onderonur" title="GitHub">
        <FaGithub />
      </NextLink>
      <NextLink href="https://www.linkedin.com/in/onderonur/" title="LinkedIn">
        <FaLinkedin />
      </NextLink>
      <NextLink href="https://onderonur.github.io" title="Website & Blog">
        <TbWorld />
      </NextLink>
    </footer>
  );
}
