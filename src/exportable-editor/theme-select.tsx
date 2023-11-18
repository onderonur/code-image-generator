import type { OptionProps } from 'react-select';
import { components } from 'react-select';
import { themeNames } from '@/editor/editor-utils';
import type { ThemeOption } from '@/editor/editor-types';
import { Editor } from '@/editor/editor';
import type { BaseSelectProps } from '@/common/base-select';
import { BaseSelect } from '@/common/base-select';

const editorValue = `function example() {
  console.log("Hi");
}`;

function Option({ data, ...rest }: OptionProps<ThemeOption>) {
  return (
    <components.Option data={data} {...rest}>
      <div className="mx-auto flex max-w-xs cursor-pointer flex-col gap-2">
        <div className="relative overflow-hidden rounded-md shadow-md [&_.cm-editor]:text-sm">
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
        <div className="text-center text-sm font-semibold">{data.label}</div>
      </div>
    </components.Option>
  );
}

type ThemeSelectProps = Pick<
  BaseSelectProps<ThemeOption>,
  'inputId' | 'value' | 'onChange'
>;

export function ThemeSelect(props: ThemeSelectProps) {
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
