import classNames from 'classnames';
import styles from './Button.module.css';

type ButtonProps = React.ComponentPropsWithoutRef<'button'>;

export default function Button({ className, ...rest }: ButtonProps) {
  return <button className={classNames(className, styles.button)} {...rest} />;
}
