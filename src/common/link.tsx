import classNames from 'classnames';

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
      className={classNames(
        className,
        'text-text-400 underline hover:text-text-300 active:text-text-200',
      )}
      target={isExternal ? '_blank' : target}
      rel={isExternal ? 'noopener noreferrer' : rel}
      {...rest}
    />
  );
}
