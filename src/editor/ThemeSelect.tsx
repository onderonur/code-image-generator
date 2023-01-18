import { themeNames } from "./EditorUtils";
import { ThemeOption } from "./EditorTypes";
import Select, { components, OptionProps } from "react-select";
import { useId } from "react";
import Editor from "./Editor";
import "./ThemeSelect.css";

const editorValue = `function example() {
    console.log("Hello World");
}`;

function Option({ data, ...rest }: OptionProps<ThemeOption>) {
  return (
    <components.Option data={data} {...rest}>
      <div className="theme-select__item">
        <div className="theme-select__item__editor-wrapper">
          <Editor
            language="javascript"
            theme={data.value}
            value={editorValue}
            editable={false}
          />
        </div>
        <div className="theme-select__item__name">{data.label}</div>
      </div>
    </components.Option>
  );
}

type ThemeSelectProps = {
  value: ThemeOption;
  onChange: (value: ThemeOption | null) => void;
};

export default function ThemeSelect({ value, onChange }: ThemeSelectProps) {
  const id = useId();

  return (
    <Select<ThemeOption>
      instanceId={id}
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
