import RadioGroupProvider from './RadioGroupContext';
import { RadioValue } from './Radio';

type RadioGroupProps<Value extends RadioValue> = React.PropsWithChildren<{
  id: string;
  className?: string;
  value: Value;
  onChange: (value: Value) => void;
}>;

export default function RadioGroup<Value extends RadioValue>({
  id,
  className,
  value,
  children,
  onChange,
}: RadioGroupProps<Value>) {
  return (
    <div role="radiogroup" id={id} className={className}>
      <RadioGroupProvider value={value} onChange={onChange}>
        {children}
      </RadioGroupProvider>
    </div>
  );
}
