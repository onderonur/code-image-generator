import Label from "./Label";
import classNames from "classnames";
import styles from "./Checkbox.module.css";

type CheckboxProps = React.ComponentPropsWithoutRef<"input">;

export default function Checkbox({
  className,
  children,
  ...rest
}: CheckboxProps) {
  return (
    <Label className={classNames(className, styles.checkbox)}>
      <input {...rest} type="checkbox" className={styles.input} />
      {children}
    </Label>
  );
}
