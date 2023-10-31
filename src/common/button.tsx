import classNames from 'classnames';

type ButtonProps = React.ComponentPropsWithoutRef<'button'>;

export default function Button({
  className,
  type = 'button',
  ...rest
}: ButtonProps) {
  return (
    <button
      type={type}
      className={classNames(
        className,
        'flex justify-center items-center gap-1 bg-primary-700 py-2 px-4 rounded-sm font-semibold hover:bg-primary-600 active:bg-primary-500 [&>svg]:h-5 [&>svg]:w-5',
      )}
      {...rest}
    />
  );
}
