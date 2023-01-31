import React from 'react';
import { useContext } from 'react';
import { RadioValue } from './Radio';

type RadioGroupContextValue<Value extends RadioValue> = {
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
    value: Value;
    onChange: (value: Value) => void;
  }>;

export default function RadioGroupProvider<Value extends RadioValue>({
  value,
  children,
  onChange,
}: RadioGroupProviderProps<Value>) {
  return (
    <RadioGroupContext.Provider value={{ value, onChange }}>
      {children}
    </RadioGroupContext.Provider>
  );
}
