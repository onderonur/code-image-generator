import type { BaseSelectProps } from '@/core/ui/components/base-select';
import { BaseSelect } from '@/core/ui/components/base-select';
import { Editor } from '@/features/editor/components/editor';
import type { ThemeOption } from '@/features/editor/editor.types';
import { themeNames } from '@/features/editor/editor.utils';
import type { OptionProps } from 'react-select';
import { components } from 'react-select';

const editorValue = `function example() {
  console.log("Hi");
}`;

function Option({ data, ...rest }: OptionProps<ThemeOption>) {
  return (
    <components.Option {...rest} data={data}>
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
