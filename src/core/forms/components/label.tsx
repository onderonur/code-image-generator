import type { AsChildProps } from '@/core/ui/components/slot';
import { Slot } from '@/core/ui/components/slot';
import { twMerge } from 'tailwind-merge';

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
