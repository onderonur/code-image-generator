import type { RadioGroupProps } from '@/core/forms/components/radio-group';
import { Radio, RadioGroup } from '@/core/forms/components/radio-group';
import { twJoin } from 'tailwind-merge';

// https://coolors.co/gradients
export const backgrounds = [
  'linear-gradient(90deg, hsl(329 91% 65% / 1) 0%, hsl(350 91% 65% / 1) 100%)',
  'linear-gradient(90deg, hsl(152 100% 50% / 1) 0%, hsl(186 100% 69% / 1) 100%)',
  'linear-gradient(90deg, hsl(217 100% 50% / 1) 0%, hsl(186 100% 69% / 1) 100%)',
  'linear-gradient(90deg, hsl(197 100% 63% / 1) 0%, hsl(294 100% 55% / 1) 100%)',
  'linear-gradient(90deg, hsl(238 100% 71% / 1) 0%, hsl(295 100% 84% / 1) 100%)',
  'linear-gradient(90deg, hsl(280 84% 41% / 1) 0%, hsl(218 97% 56% / 1) 100%)',
  'linear-gradient(90deg, hsl(169 76% 48% / 1) 0%, hsl(67 87% 82% / 1) 100%)',
  'linear-gradient(90deg, hsl(335 91% 70% / 1) 0%, hsl(49 89% 61% / 1) 100%)',
  'linear-gradient(90deg, hsl(40 94% 74% / 1) 0%, hsl(60 89% 72% / 1) 100%)',
];

type BackgroundRadioGroupProps = Pick<
  RadioGroupProps,
  'aria-labelledby' | 'value' | 'onChange'
>;

export function BackgroundRadioGroup({
  value,
  ...rest
}: BackgroundRadioGroupProps) {
  return (
    <RadioGroup
      name="background"
      className="flex flex-wrap gap-1"
      value={value}
      {...rest}
    >
      {backgrounds.map((background, i) => {
        const isSelected = value === background;

        return (
          <Radio key={background} value={background}>
            <div
              className={twJoin(
                'size-6 overflow-hidden rounded-md',
                isSelected && 'border-2 border-primary-600 p-1',
              )}
            >
              <div
                className="h-full w-full"
                style={{
                  background,
                }}
              />
              <span className="sr-only">Gradient Background {i + 1}</span>
            </div>
          </Radio>
        );
      })}
    </RadioGroup>
  );
}
