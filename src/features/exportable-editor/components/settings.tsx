import { Button } from '@/core/ui/components/button';
import { Checkbox } from '@/core/ui/components/checkbox';
import { Divider } from '@/core/ui/components/divider';
import { Label } from '@/core/ui/components/label';
import { Ranger } from '@/core/ui/components/ranger';
import type {
  LanguageOption,
  ThemeOption,
} from '@/features/editor/editor.types';
import { BackgroundRadioGroup } from '@/features/exportable-editor/components/background-radio-group';
import { LanguageSelect } from '@/features/exportable-editor/components/language-select';
import { ThemeSelect } from '@/features/exportable-editor/components/theme-select';

export type SettingsValues = {
  theme: ThemeOption;
  language: LanguageOption;
  lineNumbers: boolean;
  background: string;
  padding: number;
};

type SettingsProps = {
  values: SettingsValues;
  onChange: (values: SettingsValues) => void;
  onCopy: VoidFunction;
  onDownload: VoidFunction;
};

export function Settings({
  values,
  onChange,
  onCopy,
  onDownload,
}: SettingsProps) {
  function handleChange<Key extends keyof SettingsValues>(
    key: Key,
    value: SettingsValues[Key],
  ) {
    const newValues = { ...values, [key]: value };
    onChange(newValues);
  }

  return (
    <div className="flex flex-col gap-4 border-2 p-4">
      <div>
        <Label as="div" id="background-radio-group-label">
          Background
        </Label>
        <BackgroundRadioGroup
          aria-labelledby="background-radio-group-label"
          value={values.background}
          onChange={(background) => {
            handleChange('background', background);
          }}
        />
      </div>
      <div>
        <Label htmlFor="language-select">Language</Label>
        <LanguageSelect
          inputId="language-select"
          value={values.language}
          // @ts-expect-error - TODO: Will fix this
          onChange={(language) => {
            if (language) {
              // eslint-disable-next-line @typescript-eslint/no-unsafe-argument -- TODO: Will fix this
              handleChange('language', language);
            }
          }}
        />
      </div>
      <div>
        <Label htmlFor="theme-select">Theme</Label>
        <ThemeSelect
          inputId="theme-select"
          value={values.theme}
          // @ts-expect-error - TODO: Will fix this
          onChange={(theme) => {
            if (theme) {
              // eslint-disable-next-line @typescript-eslint/no-unsafe-argument -- TODO: Will fix this
              handleChange('theme', theme);
            }
          }}
        />
      </div>
      <div>
        <Label htmlFor="padding-ranger">Padding</Label>
        <Ranger
          id="padding-ranger"
          name="padding"
          value={values.padding}
          max={5}
          step={0.01}
          onChange={(e) => {
            handleChange('padding', e.target.valueAsNumber);
          }}
        />
      </div>
      <div>
        <Checkbox
          name="show-line-numbers"
          checked={values.lineNumbers}
          onChange={(e) => {
            handleChange('lineNumbers', e.target.checked);
          }}
        >
          Show line numbers
        </Checkbox>
      </div>
      <Divider />
      <Button className="w-full" onClick={onCopy}>
        Copy
      </Button>
      <Button className="w-full" onClick={onDownload}>
        Download
      </Button>
    </div>
  );
}
