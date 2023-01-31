import { useRadioGroupContext } from './RadioGroupContext';
import classNames from 'classnames';
import styles from './RadioButton.module.css';

type RadioButtonProps = React.PropsWithChildren<{
  value: string | number;
}>;

export default function RadioButton({
  value: optionValue,
  children,
}: RadioButtonProps) {
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
