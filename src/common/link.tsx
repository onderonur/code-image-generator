import { twMerge } from 'tailwind-merge';

type LinkProps = React.ComponentPropsWithoutRef<'a'> & {
  isExternal?: boolean;
};

export function Link({
  className,
  isExternal,
  target,
  rel,
  ...rest
}: LinkProps) {
  return (
    <a
      className={twMerge(
        'text-text-400 underline hover:text-text-300 active:text-text-200',
        className,
      )}
      target={isExternal ? '_blank' : target}
      rel={isExternal ? 'noopener noreferrer' : rel}
      {...rest}
    />
  );
}
