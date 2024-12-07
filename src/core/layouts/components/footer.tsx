import { NextLink } from '@/core/ui/components/link';
import { FaGithub, FaLinkedin, FaXTwitter } from 'react-icons/fa6';
import { SiBluesky } from 'react-icons/si';
import { TbWorld } from 'react-icons/tb';

export function Footer() {
  return (
    <footer className="flex justify-center gap-4 py-14 text-center text-2xl">
      <NextLink href="https://onderonur.github.io" title="Website & Blog">
        <TbWorld />
      </NextLink>
      <NextLink href="https://github.com/onderonur" title="GitHub">
        <FaGithub />
      </NextLink>
      <NextLink href="https://www.linkedin.com/in/onderonur/" title="LinkedIn">
        <FaLinkedin />
      </NextLink>
      <NextLink
        href="https://bsky.app/profile/onderonur.bsky.social"
        title="Bluesky"
      >
        <SiBluesky />
      </NextLink>
      <NextLink href="https://twitter.com/onderonur_" title="X">
        <FaXTwitter />
      </NextLink>
    </footer>
  );
}
