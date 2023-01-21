import classNames from "classnames";
import styles from "./Label.module.css";

type LabelProps = React.ComponentPropsWithoutRef<"label">;

export default function Label({ className, ...rest }: LabelProps) {
  return <label className={classNames(className, styles.label)} {...rest} />;
}
