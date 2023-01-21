import { langNames, LanguageName } from "@uiw/codemirror-extensions-langs";
import BaseSelect, { BaseSelectProps } from "@/common/BaseSelect";

type LanguageOption = { value: LanguageName; label: LanguageName };

const languageOptions: LanguageOption[] = [...langNames]
  .sort()
  .map((languageName) => ({ value: languageName, label: languageName }));

type LanguageSelectProps = Pick<
  BaseSelectProps<LanguageOption>,
  "inputId" | "value" | "onChange"
>;

export default function LanguageSelect(props: LanguageSelectProps) {
  return <BaseSelect options={languageOptions} {...props} />;
}
