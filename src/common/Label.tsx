import classNames from 'classnames';

type LabelProps = React.ComponentPropsWithoutRef<'label'>;

export default function Label({ className, ...rest }: LabelProps) {
  return (
    <label
      className={classNames(className, 'block mb-1 font-medium text-text-300')}
      {...rest}
    />
  );
}
