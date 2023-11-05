import type { RadioGroupContextValue } from './radio-group-context';
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
  // TODO: `as RadioGroupContextValue<Value>` is used since `createSafeContext`
  // does not provide a generically typed `useXContext` function.
  const { name, value, onChange } =
    useRadioGroupContext() as RadioGroupContextValue<Value>;
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
        onChange={() => {
          onChange(optionValue);
        }}
        onFocus={onFocus}
        onBlur={onBlur}
      />
      {children}
    </label>
  );
}
