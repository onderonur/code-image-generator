import classNames from 'classnames';
import { createSafeContext } from './safe-context';
import { useFocusVisible } from './common-hooks';

export type RadioGroupContextValue = {
  name: string;
  value: string;
  onChange: (newValue: string) => void;
};

const [RadioGroupContext, useRadioGroupContext] =
  createSafeContext<RadioGroupContextValue>({
    displayName: 'RadioGroupContext',
  });

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
      className={classNames(
        'cursor-pointer',
        className,
        isFocusVisible && 'focused',
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

type RadioButtonProps = React.PropsWithChildren<{
  value: string;
}>;

export function RadioButton({
  value: optionValue,
  children,
}: RadioButtonProps) {
  const { isFocusVisible, onFocus, onBlur } = useFocusVisible();
  const { name, value, onChange } = useRadioGroupContext();
  const isChecked = optionValue === value;

  return (
    <label
      className={classNames(
        'group cursor-pointer select-none border-2 border-r-0 border-primary-700 px-2 py-1',
        isChecked
          ? 'bg-primary-700'
          : 'bg-body-900 hover:bg-body-800 active:bg-body-700',
        'first:rounded-bl-sm first:rounded-tl-sm last:rounded-br-sm last:rounded-tr-sm last:border-r-2',
        isFocusVisible && 'focused',
      )}
    >
      <input
        name={name}
        type="radio"
        className="sr-only"
        value={optionValue}
        checked={isChecked}
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
