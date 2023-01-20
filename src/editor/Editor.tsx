import { useState } from "react";
import { loadLanguage, LanguageName } from "@uiw/codemirror-extensions-langs";
import { EditorView } from "@codemirror/view";
import { Extension } from "@codemirror/state";
import { ThemeName } from "@/editor/EditorTypes";
import ReactCodeMirror, { ReactCodeMirrorProps } from "@uiw/react-codemirror";
import * as themes from "@uiw/codemirror-themes-all";
import styles from "./Editor.module.css";

type EditorProps = Pick<
  ReactCodeMirrorProps,
  "basicSetup" | "editable" | "value"
> & {
  language: LanguageName;
  theme: ThemeName;
};

export default function Editor({
  language,
  theme,
  value,
  basicSetup,
}: EditorProps) {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div>
      {isLoading && <div className={styles.editorSkeleton} />}
      <ReactCodeMirror
        className={isLoading ? "sr-only" : undefined}
        lang={language}
        theme={themes[theme]}
        value={value}
        extensions={[
          EditorView.lineWrapping,
          loadLanguage(language) as Extension,
        ]}
        basicSetup={{
          lineNumbers: false,
          highlightActiveLine: false,
          highlightActiveLineGutter: false,
          foldGutter: false,
          ...(typeof basicSetup === "object" ? basicSetup : {}),
        }}
        onCreateEditor={() => setIsLoading(false)}
      />
    </div>
  );
}
