import { Label } from './label';
import classNames from 'classnames';

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
      className={classNames(
        className,
        'flex cursor-pointer select-none items-center gap-2 rounded-sm p-1 hover:bg-body-800 active:bg-body-700',
      )}
    >
      <input name={name} type="checkbox" {...rest} />
      {children}
    </Label>
  );
}
