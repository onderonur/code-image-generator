import { twMerge } from 'tailwind-merge';

type LabelProps = React.ComponentPropsWithoutRef<'label'>;

export function Label({ className, ...rest }: LabelProps) {
  return (
    <label
      {...rest}
      className={twMerge('mb-1 block font-medium text-text-300', className)}
    />
  );
}
