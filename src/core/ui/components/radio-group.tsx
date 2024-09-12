import { createContext, useContext } from 'react';
import { twMerge } from 'tailwind-merge';
import { useFocusVisible } from '../ui.hooks';

type RadioGroupContextValue = {
  name: string;
  value: string;
  onChange: (newValue: string) => void;
};

const RadioGroupContext = createContext<RadioGroupContextValue>(
  {} as RadioGroupContextValue,
);

function useRadioGroupContext() {
  return useContext(RadioGroupContext);
}

type RadioGroupProps = React.PropsWithChildren<{
  id: string;
  name: string;
  className?: string;
  value: string;
  onChange: (value: string) => void;
}>;

export function RadioGroup({
  id,
  name,
  className,
  value,
  children,
  onChange,
}: RadioGroupProps) {
  return (
    <div role="radiogroup" id={id} className={className}>
      <RadioGroupContext.Provider value={{ name, value, onChange }}>
        {children}
      </RadioGroupContext.Provider>
    </div>
  );
}

type RadioProps = React.PropsWithChildren<{
  className?: string;
  value: string;
}>;

export function Radio({ className, value: optionValue, children }: RadioProps) {
  const { name, value, onChange } = useRadioGroupContext();
  const { isFocusVisible, onFocus, onBlur } = useFocusVisible();

  return (
    <label
      className={twMerge(
        'cursor-pointer',
        isFocusVisible && 'focused',
        className,
      )}
    >
      <input
        name={name}
        type="radio"
        className="sr-only"
        value={optionValue}
        checked={optionValue === value}
        onChange={() => {
          onChange(optionValue);
        }}
        onFocus={onFocus}
        onBlur={onBlur}
      />
      {children}
    </label>
  );
}
