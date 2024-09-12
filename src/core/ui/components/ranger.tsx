import { twMerge } from 'tailwind-merge';
import type { Omit } from '../../core.types';

type RangerProps = Omit<React.ComponentPropsWithoutRef<'input'>, 'type'>;

export function Ranger({ className, ...rest }: RangerProps) {
  return (
    <input
      {...rest}
      type="range"
      className={twMerge('w-full cursor-pointer accent-primary-700', className)}
    />
  );
}
