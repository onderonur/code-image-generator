import { twMerge } from 'tailwind-merge';

type LabelProps<As extends React.ElementType = 'label'> =
  React.ComponentPropsWithoutRef<As> & {
    as?: As;
    className?: string;
  };

export function Label<As extends React.ElementType = 'label'>({
  as,
  className,
  ...rest
}: LabelProps<As>) {
  const As = as ?? 'label';

  return (
    <As
      {...rest}
      className={twMerge('mb-1 block font-medium text-text-300', className)}
    />
  );
}
