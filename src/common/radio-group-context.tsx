import type { RadioValue } from './radio';
import { createSafeContext } from './safe-context';

export type RadioGroupContextValue<Value extends RadioValue> = {
  name: string;
  value: Value;
  onChange: (value: Value) => void;
};

const [RadioGroupContext, useRadioGroupContext] = createSafeContext<
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  RadioGroupContextValue<any>
>({
  displayName: 'RadioGroupContext',
});

export { useRadioGroupContext };

type RadioGroupProviderProps<Value extends RadioValue> =
  React.PropsWithChildren<{
    name: string;
    value: Value;
    onChange: (value: Value) => void;
  }>;

export default function RadioGroupProvider<Value extends RadioValue>({
  name,
  value,
  children,
  onChange,
}: RadioGroupProviderProps<Value>) {
  return (
    <RadioGroupContext.Provider value={{ name, value, onChange }}>
      {children}
    </RadioGroupContext.Provider>
  );
}
