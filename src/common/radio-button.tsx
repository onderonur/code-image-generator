import type { RadioGroupContextValue } from './radio-group-context';
import { useRadioGroupContext } from './radio-group-context';
import classNames from 'classnames';
import type { RadioValue } from './radio';
import { useFocusVisible } from './common-hooks';

type RadioButtonProps<Value extends RadioValue> = React.PropsWithChildren<{
  value: Value;
}>;

export default function RadioButton<Value extends RadioValue>({
  value: optionValue,
  children,
}: RadioButtonProps<Value>) {
  const { isFocusVisible, onFocus, onBlur } = useFocusVisible();
  // TODO: `as RadioGroupContextValue<Value>` is used since `createSafeContext`
  // does not provide a generically typed `useXContext` function.
  const { name, value, onChange } =
    useRadioGroupContext() as RadioGroupContextValue<Value>;
  const isChecked = optionValue === value;

  return (
    <label
      className={classNames(
        'group select-none cursor-pointer py-1 px-2 border-2 border-r-0 border-primary-700',
        isChecked
          ? 'bg-primary-700'
          : 'bg-body-900 hover:bg-body-800 active:bg-body-700',
        'first:rounded-tl-sm first:rounded-bl-sm last:rounded-tr-sm last:rounded-br-sm last:border-r-2',
        isFocusVisible && 'focused',
      )}
    >
      <input
        name={name}
        type="radio"
        className="sr-only"
        value={optionValue}
        checked={isChecked}
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
