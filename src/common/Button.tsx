import classNames from 'classnames';

type ButtonProps = React.ComponentPropsWithoutRef<'button'> & {
  isFullWidth?: boolean;
};

export default function Button({
  className,
  isFullWidth,
  ...rest
}: ButtonProps) {
  return (
    <button
      className={classNames(
        className,
        'flex justify-center items-center gap-1 bg-primary-600 cursor-pointer py-2 px-4 rounded-sm font-semibold hover:bg-primary-500 active:bg-primary-400',
        isFullWidth && 'w-full',
        '[&>svg]:h-5 [&>svg]:w-5',
      )}
      {...rest}
    />
  );
}
