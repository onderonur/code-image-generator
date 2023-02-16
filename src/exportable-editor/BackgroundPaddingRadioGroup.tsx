import RadioGroup from '@/common/RadioGroup';
import RadioButton from '@/common/RadioButton';

export enum BackgroundPadding {
  NONE,
  XS,
  SM,
  MD,
  LG,
}

type BackgroundPaddingRadioGroupProps = {
  id: string;
  value: BackgroundPadding;
  onChange: (values: BackgroundPadding) => void;
};

export default function BackgroundPaddingRadioGroup(
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
