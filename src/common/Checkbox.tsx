import Label from './Label';
import classNames from 'classnames';

type CheckboxProps = React.ComponentPropsWithoutRef<'input'>;

export default function Checkbox({
  className,
  children,
  ...rest
}: CheckboxProps) {
  return (
    <Label
      className={classNames(
        className,
        'cursor-pointer select-none p-1 rounded-sm hover:bg-body-800 active:bg-body-700',
      )}
    >
      <input {...rest} type="checkbox" className="mr-2" />
      {children}
    </Label>
  );
}
