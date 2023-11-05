import RadioGroupProvider from './radio-group-context';
import type { RadioValue } from './radio';

type RadioGroupProps<Value extends RadioValue> = React.PropsWithChildren<{
  id: string;
  name: string;
  className?: string;
  value: Value;
  onChange: (value: Value) => void;
}>;

export default function RadioGroup<Value extends RadioValue>({
  id,
  name,
  className,
  value,
  children,
  onChange,
}: RadioGroupProps<Value>) {
  return (
    <div role="radiogroup" id={id} className={className}>
      <RadioGroupProvider name={name} value={value} onChange={onChange}>
        {children}
      </RadioGroupProvider>
    </div>
  );
}
