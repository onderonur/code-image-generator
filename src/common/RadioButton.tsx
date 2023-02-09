import { useRadioGroupContext } from './RadioGroupContext';
import classNames from 'classnames';
import { RadioValue } from './Radio';

type RadioButtonProps<Value extends RadioValue> = React.PropsWithChildren<{
  value: Value;
}>;

export default function RadioButton<Value extends RadioValue>({
  value: optionValue,
  children,
}: RadioButtonProps<Value>) {
  const { value, onChange } = useRadioGroupContext();
  const isChecked = optionValue === value;

  return (
    <label
      className={classNames(
        'cursor-pointer py-1 px-2 border-2 border-r-0 last:border-r-2 border-primary-600',
        isChecked && 'bg-primary-600',
        'first:rounded-tl-sm first:rounded-bl-sm last:rounded-tr-sm last:rounded-br-sm',
      )}
    >
      <input
        type="radio"
        className="sr-only"
        value={optionValue}
        checked={isChecked}
        onChange={() => onChange(optionValue)}
      />
      {children}
    </label>
  );
}
