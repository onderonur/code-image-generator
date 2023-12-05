import { twMerge } from 'tailwind-merge';

type ButtonProps = React.ComponentPropsWithoutRef<'button'>;

export function Button({ className, type = 'button', ...rest }: ButtonProps) {
  return (
    <button
      type={type}
      className={twMerge(
        'flex items-center justify-center gap-1 rounded-sm bg-primary-700 px-4 py-2 font-semibold hover:bg-primary-600 active:bg-primary-500 [&>svg]:h-5 [&>svg]:w-5',
        className,
      )}
      {...rest}
    />
  );
}
