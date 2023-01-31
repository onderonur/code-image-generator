import { useRadioGroupContext } from './RadioGroupContext';
import classNames from 'classnames';
import styles from './Radio.module.css';

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
    <label className={classNames(styles.radio, className)}>
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
