import { langNames, LanguageName } from "@uiw/codemirror-extensions-langs";
import BaseSelect from "@/common/BaseSelect";

type LanguageOption = { value: LanguageName; label: LanguageName };

const languageOptions: LanguageOption[] = [...langNames]
  .sort()
  .map((languageName) => ({ value: languageName, label: languageName }));

type LanguageSelectProps = {
  value: LanguageOption;
  onChange: (value: LanguageOption | null) => void;
};

export default function LanguageSelect(props: LanguageSelectProps) {
  return <BaseSelect options={languageOptions} {...props} />;
}
