import { useFocusVisible } from '@/core/ui/hooks';
import { createContext, use } from 'react';
import { twMerge } from 'tailwind-merge';

type RadioGroupContextValue = {
  name: string;
  value: string;
  onChange: (newValue: string) => void;
};

const RadioGroupContext = createContext<RadioGroupContextValue | null>(null);

function useRadioGroupContext() {
  const value = use(RadioGroupContext);
  if (!value) throw new Error('RadioGroupContext not found');
  return value;
}

export type RadioGroupProps = React.AriaAttributes & {
  name: string;
  className?: string;
  value: string;
  children: React.ReactNode;
  onChange: (value: string) => void;
};

export function RadioGroup({
  name,
  className,
  value,
  children,
  onChange,
  ...rest
}: RadioGroupProps) {
  return (
    <div role="radiogroup" className={className} {...rest}>
      <RadioGroupContext value={{ name, value, onChange }}>
        {children}
      </RadioGroupContext>
    </div>
  );
}

type RadioProps = {
  className?: string;
  value: string;
  children: React.ReactNode;
};

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
