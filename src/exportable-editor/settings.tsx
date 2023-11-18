import { ThemeSelect } from '@/exportable-editor/theme-select';
import type { LanguageOption, ThemeOption } from '@/editor/editor-types';
import { LanguageSelect } from '@/exportable-editor/language-select';
import { BackgroundRadioGroup } from '@/exportable-editor/background-radio-group';
import { Button } from '@/common/button';
import { Label } from '@/common/label';
import { Divider } from '@/common/divider';
import { Checkbox } from '@/common/checkbox';
import type { BackgroundPadding } from './background-padding-radio-group';
import { BackgroundPaddingRadioGroup } from './background-padding-radio-group';

export type SettingsValues = {
  theme: ThemeOption;
  language: LanguageOption;
  lineNumbers: boolean;
  background: string;
  backgroundPadding: BackgroundPadding;
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
        <Label htmlFor="background-radiogroup">Background</Label>
        <BackgroundRadioGroup
          id="background-radiogroup"
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
          onChange={(language) => {
            if (language) {
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
          onChange={(theme) => {
            if (theme) {
              handleChange('theme', theme);
            }
          }}
        />
      </div>
      <div>
        <Label htmlFor="background-padding-radiogroup">Padding</Label>
        <BackgroundPaddingRadioGroup
          id="background-padding-radiogroup"
          value={values.backgroundPadding}
          onChange={(newBackgroundPadding) => {
            handleChange(
              'backgroundPadding',
              newBackgroundPadding as BackgroundPadding,
            );
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
