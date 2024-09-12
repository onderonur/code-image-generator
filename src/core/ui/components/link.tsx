import Link from 'next/link';
import { twMerge } from 'tailwind-merge';

type NextLinkProps = React.ComponentPropsWithoutRef<typeof Link>;

export function NextLink({ href, className, ...rest }: NextLinkProps) {
  let { target, rel } = rest;

  // eslint-disable-next-line @typescript-eslint/no-base-to-string
  const hrefString = href.toString();

  if (!hrefString.startsWith('/')) {
    // Adding `target` and `rel` to external links.
    target = '_blank';
    rel = 'noopener noreferrer';
  }

  return (
    <Link
      {...rest}
      href={href}
      className={twMerge(
        'text-text-400 underline hover:text-text-300 active:text-text-200',
        className,
      )}
      target={target}
      rel={rel}
    />
  );
}
