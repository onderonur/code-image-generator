import { useId } from 'react';
import Select from 'react-select';
import { twJoin } from 'tailwind-merge';

// eslint-disable-next-line @typescript-eslint/no-redundant-type-constituents -- TODO: Will fix this
export type BaseSelectProps<Option = unknown> = React.ComponentProps<
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
        // @ts-expect-error - TODO: Will fix this
        container: ({ isFocused }) => (isFocused ? 'focused rounded-md' : ''),
        control: () => '!cursor-text border border-text-100 rounded-md p-2',
        input: () => 'text-text-200',
        singleValue: () => 'text-text-200',
        // @ts-expect-error -- TODO: Will fix this
        option: ({ isSelected, isFocused }) =>
          twJoin(
            '!cursor-pointer active:bg-body-700 p-2',
            // eslint-disable-next-line @typescript-eslint/no-unsafe-argument -- TODO: Will fix this
            isSelected && 'bg-body-700',
            // eslint-disable-next-line @typescript-eslint/no-unsafe-argument -- TODO: Will fix this
            isFocused && 'bg-body-800 active:bg-body-700',
          ),
        menu: () =>
          'bg-body-900 z-50 shadow-popper rounded-md overflow-hidden mt-3',
        noOptionsMessage: () => 'p-4',
      }}
    />
  );
}
