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
  const { value, onChange } = useRadioGroupContext();

  return (
    <label className={classNames('cursor-pointer', className)}>
      <input
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
