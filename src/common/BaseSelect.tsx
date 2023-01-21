import Select from "react-select";
import React, { useId } from "react";
import styles from "./BaseSelect.module.css";
import classNames from "classnames";

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
        control: () => styles.control,
        input: () => styles.input,
        singleValue: () => styles.singleValue,
        option: ({ isSelected, isFocused }) =>
          classNames(
            styles.option,
            isSelected && styles.optionSelected,
            isFocused && styles.optionFocused
          ),
        menu: () => styles.menu,
      }}
    />
  );
}
