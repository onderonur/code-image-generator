import type { BaseSelectProps } from '@/core/forms/components/base-select';
import { BaseSelect } from '@/core/forms/components/base-select';
import type { LanguageName } from '@uiw/codemirror-extensions-langs';
import { langNames } from '@uiw/codemirror-extensions-langs';

type LanguageOption = { value: LanguageName; label: LanguageName };

const languageOptions: LanguageOption[] = [...langNames]
  .sort()
  .map((languageName) => ({ value: languageName, label: languageName }));

type LanguageSelectProps = Pick<
  BaseSelectProps<LanguageOption>,
  'inputId' | 'value' | 'onChange'
>;

export function LanguageSelect(props: LanguageSelectProps) {
  return <BaseSelect {...props} name="language" options={languageOptions} />;
}
