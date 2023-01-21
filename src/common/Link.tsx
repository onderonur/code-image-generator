import classNames from "classnames";
import styles from "./Link.module.css";

type LinkProps = React.ComponentPropsWithoutRef<"a">;

export default function Link({ className, ...rest }: LinkProps) {
  return <a className={classNames(className, styles.link)} {...rest} />;
}
