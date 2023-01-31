import { useRadioGroupContext } from './RadioGroupContext';
import classNames from 'classnames';
import styles from './Radio.module.css';

type RadioProps = React.PropsWithChildren<{
  className?: string;
  // TODO: Bu radio, radiogroup vs'lerin value type'larını düzelt.
  value: string;
}>;

export default function Radio({
  className,
  value: optionValue,
  children,
}: RadioProps) {
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
