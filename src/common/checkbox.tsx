import { twMerge } from 'tailwind-merge';
import { Label } from './label';

type CheckboxProps = React.ComponentPropsWithoutRef<'input'> & {
  name: string;
};

export function Checkbox({
  name,
  className,
  children,
  ...rest
}: CheckboxProps) {
  return (
    <Label
      className={twMerge(
        'flex cursor-pointer select-none items-center gap-2 rounded-sm p-1 hover:bg-body-800 active:bg-body-700',
        className,
      )}
    >
      <input name={name} type="checkbox" {...rest} />
      {children}
    </Label>
  );
}
