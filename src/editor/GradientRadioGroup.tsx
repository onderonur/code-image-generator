import { createMockArray } from "@/common/CommonUtils";

// TODO: css'leri toparla

type GradientRadioGroupProps = {
  value: number;
  onChange: (value: number) => void;
};

export default function GradientRadioGroup({
  value,
  onChange,
}: GradientRadioGroupProps) {
  return (
    <div role="radiogroup" className="background-selector">
      {createMockArray(9).map((key) => {
        const isSelected = value === key;

        return (
          <label key={key}>
            <div
              className={isSelected ? "background-selector-TODO" : ""}
              style={{
                width: 20,
                height: 20,
                borderRadius: "50%",
                background: `var(--gradient-${key})`,
              }}
            />
            <input
              type="radio"
              className="sr-only"
              value={key}
              checked={value === key}
              onChange={() => onChange(key)}
            />
          </label>
        );
      })}
    </div>
  );
}
