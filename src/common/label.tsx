import classNames from 'classnames';

type LabelProps = React.ComponentPropsWithoutRef<'label'>;

export function Label({ className, ...rest }: LabelProps) {
  return (
    <label
      className={classNames(className, 'mb-1 block font-medium text-text-300')}
      {...rest}
    />
  );
}
