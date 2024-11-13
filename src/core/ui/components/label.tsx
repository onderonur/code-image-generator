import { twMerge } from 'tailwind-merge';
import type { AsChildProps } from './slot';
import { Slot } from './slot';

type LabelProps = AsChildProps & React.ComponentProps<'label'>;

export function Label({ asChild, className, ...rest }: LabelProps) {
  const Component = asChild ? Slot : 'label';

  return (
    <Component
      {...rest}
      className={twMerge('mb-1 block font-medium text-text-300', className)}
    />
  );
}
