import React, { useId } from 'react';
import Select from 'react-select';
import classNames from 'classnames';

export type BaseSelectProps<Option> = React.ComponentPropsWithoutRef<
  typeof Select<Option>
>;

export default function BaseSelect<Option>(props: BaseSelectProps<Option>) {
  const id = useId();

  return (
    <Select<Option>
      instanceId={id}
      menuShouldBlockScroll
      {...props}
      classNames={{
        // TODO: react-select styles are injected after our custom styles.
        // So, we used `!important` as a temporary solution.
        control: () => '!bg-transparent !cursor-pointer',
        input: () => '!text-text-200',
        singleValue: () => '!text-text-200',
        option: ({ isSelected, isFocused }) =>
          classNames(
            '!cursor-pointer active:!bg-body-700',
            isSelected && '!bg-body-700',
            isFocused && '!bg-body-800 active:!bg-body-800',
          ),
        menu: () => '!bg-body-900 !z-50 !shadow-popper',
      }}
    />
  );
}
