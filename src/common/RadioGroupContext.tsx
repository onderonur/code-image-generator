import React from 'react';
import { useContext } from 'react';

type RadioGroupContextValue<Value = unknown> = {
  value: Value;
  onChange: (value: Value) => void;
};

const RadioGroupContext = React.createContext({} as RadioGroupContextValue);

export function useRadioGroupContext() {
  return useContext(RadioGroupContext);
}

type RadioGroupProviderProps<Value = unknown> = React.PropsWithChildren<{
  value: Value;
  onChange: (value: Value) => void;
}>;

export default function RadioGroupProvider<Value = unknown>({
  value,
  children,
  onChange,
}: RadioGroupProviderProps<Value>) {
  return (
    <RadioGroupContext.Provider value={{ value, onChange } as any}>
      {children}
    </RadioGroupContext.Provider>
  );
}
