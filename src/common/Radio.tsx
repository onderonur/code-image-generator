import { useRadioGroupContext } from './RadioGroupContext';
import classNames from 'classnames';

export type RadioValue = string | number;

type RadioProps<Value extends RadioValue> = React.PropsWithChildren<{
  className?: string;
  value: Value;
}>;

export default function Radio<Value extends RadioValue>({
  className,
  value: optionValue,
  children,
}: RadioProps<Value>) {
  const { name, value, onChange } = useRadioGroupContext();

  return (
    <label className={classNames('cursor-pointer', className)}>
      <input
        name={name}
        type="radio"
        className="sr-only"
        value={optionValue}
        checked={optionValue === value}
        onChange={() => onChange(optionValue)}
      />
      {children}
    </label>
  );
}
