import React, { useContext } from 'react';
import { RadioValue } from './Radio';

type RadioGroupContextValue<Value extends RadioValue> = {
  name: string;
  value: Value;
  onChange: (value: Value) => void;
};

const RadioGroupContext = React.createContext(
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  {} as RadioGroupContextValue<any>,
);

export function useRadioGroupContext() {
  return useContext(RadioGroupContext);
}

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
