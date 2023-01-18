import { useId } from "react";
import Select from "react-select";
import { langNames, LanguageName } from "@uiw/codemirror-extensions-langs";

type LanguageOption = { value: LanguageName; label: LanguageName };

const languageOptions: LanguageOption[] = [...langNames]
  .sort()
  .map((languageName) => ({ value: languageName, label: languageName }));

type LanguageSelectProps = {
  value: LanguageOption;
  onChange: (value: LanguageOption | null) => void;
};

export default function LanguageSelect(props: LanguageSelectProps) {
  const id = useId();

  return <Select instanceId={id} options={languageOptions} {...props} />;
}
