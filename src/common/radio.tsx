import { useRadioGroupContext } from './radio-group-context';
import classNames from 'classnames';
import { useFocusVisible } from './common-hooks';

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
  const { isFocusVisible, onFocus, onBlur } = useFocusVisible();

  return (
    <label
      className={classNames(
        'cursor-pointer',
        className,
        isFocusVisible && 'focused',
      )}
    >
      <input
        name={name}
        type="radio"
        className="sr-only"
        value={optionValue}
        checked={optionValue === value}
        onChange={() => onChange(optionValue)}
        onFocus={onFocus}
        onBlur={onBlur}
      />
      {children}
    </label>
  );
}
