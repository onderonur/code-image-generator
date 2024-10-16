import { Radio, RadioGroup } from '@/core/ui/components/radio-group';
import { twJoin } from 'tailwind-merge';

// https://coolors.co/gradients
export const backgrounds = [
  'linear-gradient(90deg, hsla(329, 91%, 65%, 1) 0%, hsla(350, 91%, 65%, 1) 100%)',
  'linear-gradient(90deg, hsla(152, 100%, 50%, 1) 0%, hsla(186, 100%, 69%, 1) 100%)',
  'linear-gradient(90deg, hsla(217, 100%, 50%, 1) 0%, hsla(186, 100%, 69%, 1) 100%)',
  'linear-gradient(90deg, hsla(197, 100%, 63%, 1) 0%, hsla(294, 100%, 55%, 1) 100%)',
  'linear-gradient(90deg, hsla(238, 100%, 71%, 1) 0%, hsla(295, 100%, 84%, 1) 100%)',
  'linear-gradient(90deg, hsla(280, 84%, 41%, 1) 0%, hsla(218, 97%, 56%, 1) 100%)',
  'linear-gradient(90deg, hsla(169, 76%, 48%, 1) 0%, hsla(67, 87%, 82%, 1) 100%)',
  'linear-gradient(90deg, hsla(335, 91%, 70%, 1) 0%, hsla(49, 89%, 61%, 1) 100%)',
  'linear-gradient(90deg, hsla(40, 94%, 74%, 1) 0%, hsla(60, 89%, 72%, 1) 100%)',
];

type BackgroundRadioGroupProps = {
  id: string;
  value: string;
  onChange: (value: string) => void;
};

export function BackgroundRadioGroup({
  id,
  value,
  onChange,
}: BackgroundRadioGroupProps) {
  return (
    <RadioGroup
      id={id}
      name="background"
      className="flex flex-wrap gap-1"
      value={value}
      onChange={onChange}
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
