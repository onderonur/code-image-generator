import RadioGroupProvider from './RadioGroupContext';
import styles from './RadioGroup.module.css';
import classNames from 'classnames';

type RadioGroupProps<Value> = React.PropsWithChildren<{
  className?: string;
  value: Value;
  onChange: (value: Value) => void;
}>;

export default function RadioGroup<Value>({
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
