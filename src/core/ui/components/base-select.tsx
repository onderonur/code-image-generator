import { useId } from 'react';
import Select from 'react-select';
import { twJoin } from 'tailwind-merge';

export type BaseSelectProps<Option> = React.ComponentPropsWithoutRef<
  typeof Select<Option>
> & {
  name: string;
};

export function BaseSelect<Option>(props: BaseSelectProps<Option>) {
  const id = useId();

  return (
    <Select<Option>
      {...props}
      instanceId={id}
      menuShouldBlockScroll
      unstyled
      classNames={{
        container: ({ isFocused }) => (isFocused ? 'focused rounded-md' : ''),
        control: () => 'cursor-pointer border border-text-100 rounded-md p-2',
        input: () => 'text-text-200',
        singleValue: () => 'text-text-200',
        option: ({ isSelected, isFocused }) =>
          twJoin(
            '!cursor-pointer active:bg-body-700 p-2',
            isSelected && 'bg-body-700',
            isFocused && 'bg-body-800 active:bg-body-700',
          ),
        menu: () =>
          'bg-body-900 z-50 shadow-popper rounded-md overflow-hidden mt-3',
        noOptionsMessage: () => 'p-4',
      }}
    />
  );
}
