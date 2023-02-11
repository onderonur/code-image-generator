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
        'group select-none cursor-pointer py-1 px-2 border-2 border-r-0 border-primary-700',
        isChecked
          ? 'bg-primary-700'
          : 'bg-body-900 hover:bg-body-800 active:bg-body-700',
        'first:rounded-tl-sm first:rounded-bl-sm last:rounded-tr-sm last:rounded-br-sm last:border-r-2',
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
