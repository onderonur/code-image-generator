import RadioGroupProvider from './RadioGroupContext';
import { RadioValue } from './Radio';
import classNames from 'classnames';
import styles from './RadioGroup.module.css';

type RadioGroupProps<Value extends RadioValue> = React.PropsWithChildren<{
  className?: string;
  value: Value;
  onChange: (value: Value) => void;
}>;

export default function RadioGroup<Value extends RadioValue>({
  className,
  value,
  children,
  onChange,
}: RadioGroupProps<Value>) {
  return (
    <div role="radiogroup" className={classNames(styles.radioGroup, className)}>
      <RadioGroupProvider value={value} onChange={onChange}>
        {children}
      </RadioGroupProvider>
    </div>
  );
}
