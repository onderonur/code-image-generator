import { useRadioGroupContext } from './RadioGroupContext';
import classNames from 'classnames';
import { RadioValue } from './Radio';
import styles from './RadioButton.module.css';

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
      className={classNames(styles.radioButton, isChecked && styles.checked)}
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
