import classNames from 'classnames';
import styles from './Link.module.css';

type LinkProps = React.ComponentPropsWithoutRef<'a'> & {
  isExternal?: boolean;
};

export default function Link({
  className,
  isExternal,
  target,
  rel,
  ...rest
}: LinkProps) {
  return (
    <a
      className={classNames(className, styles.link)}
      target={isExternal ? '_blank' : target}
      rel={isExternal ? 'noopener noreferrer' : rel}
      {...rest}
    />
  );
}
