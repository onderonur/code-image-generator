import { RadioButton, RadioGroup } from '@/common/radio-group';

export enum BackgroundPadding {
  NONE = 'none',
  XS = 'xs',
  SM = 'sm',
  MD = 'md',
  LG = 'lg',
}

type BackgroundPaddingRadioGroupProps = {
  id: string;
  value: BackgroundPadding;
  onChange: (newValue: string) => void;
};

export function BackgroundPaddingRadioGroup(
  props: BackgroundPaddingRadioGroupProps,
) {
  return (
    <RadioGroup {...props} name="background-padding">
      <RadioButton value={BackgroundPadding.NONE}>none</RadioButton>
      <RadioButton value={BackgroundPadding.XS}>xs</RadioButton>
      <RadioButton value={BackgroundPadding.SM}>sm</RadioButton>
      <RadioButton value={BackgroundPadding.MD}>md</RadioButton>
      <RadioButton value={BackgroundPadding.LG}>lg</RadioButton>
    </RadioGroup>
  );
}
