import ThemeSelect from '@/exportable-editor/ThemeSelect';
import { LanguageOption, ThemeOption } from '@/editor/EditorTypes';
import LanguageSelect from '@/exportable-editor/LanguageSelect';
import BackgroundRadioGroup from '@/exportable-editor/BackgroundRadioGroup';
import Button from '@/common/Button';
import Label from '@/common/Label';
import Divider from '@/common/Divider';
import Checkbox from '@/common/Checkbox';
import BackgroundPaddingRadioGroup, {
  BackgroundPadding,
} from './BackgroundPaddingRadioGroup';

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

export default function Settings({
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
    <div className="flex flex-col gap-4 p-4 border-2">
      <div>
        <Label htmlFor="background-radiogroup">Background</Label>
        <BackgroundRadioGroup
          id="background-radiogroup"
          value={values.background}
          onChange={(background) => handleChange('background', background)}
        />
      </div>
      <div>
        <Label htmlFor="language-select">Language</Label>
        <LanguageSelect
          inputId="language-select"
          value={values.language}
          onChange={(language) =>
            language && handleChange('language', language)
          }
        />
      </div>
      <div>
        <Label htmlFor="theme-select">Theme</Label>
        <ThemeSelect
          inputId="theme-select"
          value={values.theme}
          onChange={(theme) => theme && handleChange('theme', theme)}
        />
      </div>
      <div>
        <Label htmlFor="background-padding-radiogroup">Padding</Label>
        <BackgroundPaddingRadioGroup
          id="background-padding-radiogroup"
          value={values.backgroundPadding}
          onChange={(newBackgroundPadding) =>
            handleChange('backgroundPadding', newBackgroundPadding)
          }
        />
      </div>
      <div>
        <Checkbox
          name="show-line-numbers"
          checked={values.lineNumbers}
          onChange={(e) => handleChange('lineNumbers', e.target.checked)}
        >
          Show line numbers
        </Checkbox>
      </div>
      <Divider />
      <Button isFullWidth onClick={onCopy}>
        Copy
      </Button>
      <Button isFullWidth onClick={onDownload}>
        Download
      </Button>
    </div>
  );
}
