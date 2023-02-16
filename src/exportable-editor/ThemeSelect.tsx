import { components, OptionProps } from 'react-select';
import { themeNames } from '@/editor/EditorUtils';
import { ThemeOption } from '@/editor/EditorTypes';
import Editor from '@/editor/Editor';
import BaseSelect, { BaseSelectProps } from '@/common/BaseSelect';

const editorValue = `function example() {
  console.log("Hi");
}`;

function Option({ data, ...rest }: OptionProps<ThemeOption>) {
  return (
    <components.Option data={data} {...rest}>
      <div className="max-w-xs flex flex-col gap-2 cursor-pointer">
        <div className="rounded-md shadow-md relative overflow-hidden [&_.cm-editor]:gap-2 [&_.cm-editor]:text-sm">
          {/* To prevent clicking on the editor to not mess with select.
          Otherwise, select menu gets closed but selected option does not change. */}
          <Editor
            language="javascript"
            theme={data.value}
            value={editorValue}
            editable={false}
          />
          <div className="absolute inset-0" />
        </div>
        <div className="text-center font-semibold text-sm">{data.label}</div>
      </div>
    </components.Option>
  );
}

type ThemeSelectProps = Pick<
  BaseSelectProps<ThemeOption>,
  'inputId' | 'value' | 'onChange'
>;

export default function ThemeSelect(props: ThemeSelectProps) {
  return (
    <BaseSelect<ThemeOption>
      {...props}
      name="theme"
      options={themeNames.map((themeName) => ({
        value: themeName,
        label: themeName,
      }))}
      components={{ Option }}
    />
  );
}
