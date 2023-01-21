import Radio from "@/common/Radio";
import RadioGroup from "@/common/RadioGroup";
import classNames from "classnames";
import styles from "./GradientRadioGroup.module.css";

export const gradients = [
  "linear-gradient(0deg, #ffdee9 0%, #b5fffc 100%)",
  "linear-gradient(0deg, #08aeea 0%, #2af598 100%)",
  "linear-gradient(180deg, #52acff 25%, #ffe32c 100%)",
  "linear-gradient(147deg, #ffe53b 0%, #ff2525 74%)",
  "linear-gradient(19deg, #21d4fd 0%, #b721ff 100%)",
  "linear-gradient(19deg, #3eecac 0%, #ee74e1 100%)",
  "linear-gradient(45deg, #fa8bff 0%, #2bd2ff 52%, #2bff88 90%)",
  "linear-gradient(90deg, #ff9a8b 0%, #ff6a88 55%, #ff99ac 100%)",
  "linear-gradient(45deg, #fbda61 0%, #ff5acd 100%)",
];

type GradientRadioGroupProps = {
  value: string;
  onChange: (value: string) => void;
};

export default function GradientRadioGroup({
  value,
  onChange,
}: GradientRadioGroupProps) {
  return (
    <RadioGroup className={styles.radioGroup} value={value} onChange={onChange}>
      {gradients.map((gradient, i) => {
        const isSelected = value === gradient;

        return (
          <Radio key={gradient} value={gradient}>
            <div
              className={classNames(
                styles.gradientPreview,
                isSelected && styles.gradientPreviewSelected
              )}
              style={{
                background: gradient,
              }}
            />
            <span className="sr-only">Gradient Background {i + 1}</span>
          </Radio>
        );
      })}
    </RadioGroup>
  );
}
