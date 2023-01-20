import { components, OptionProps } from "react-select";
import { themeNames } from "@/editor/EditorUtils";
import { ThemeOption } from "@/editor/EditorTypes";
import Editor from "@/editor/Editor";
import BaseSelect from "@/common/BaseSelect";
import styles from "./ThemeSelect.module.css";

const editorValue = `function example() {
  console.log("Hi");
}`;

// TODO: option içindeki editor'e tıklayınca menu kapanıyor ama option seçili olmuyor.
function Option({ data, ...rest }: OptionProps<ThemeOption>) {
  return (
    <components.Option data={data} {...rest}>
      <div className={styles.option}>
        <div className={styles.editorWrapper}>
          {/* To prevent clicking on the editor to not mess with select.
          Otherwise, select menu gets closed but selected option does not change. */}
          <Editor
            language="javascript"
            theme={data.value}
            value={editorValue}
            editable={false}
          />
          <div className={styles.editorOverlay} />
        </div>
        <div className={styles.optionLabel}>{data.label}</div>
      </div>
    </components.Option>
  );
}

type ThemeSelectProps = {
  value: ThemeOption;
  onChange: (value: ThemeOption | null) => void;
};

export default function ThemeSelect({ value, onChange }: ThemeSelectProps) {
  return (
    <BaseSelect<ThemeOption>
      value={value}
      onChange={onChange}
      options={themeNames.map((themeName) => ({
        value: themeName,
        label: themeName,
      }))}
      components={{ Option }}
    />
  );
}
