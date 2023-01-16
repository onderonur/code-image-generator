import ReactCodeMirror from "@uiw/react-codemirror";
import { themeNames } from "./EditorUtils";
import * as themes from "@uiw/codemirror-themes-all";
import { ThemeName } from "./EditorTypes";
import { EditorView } from "@codemirror/view";
import { loadLanguage } from "@uiw/codemirror-extensions-langs";
import { useDeferredValue, useState } from "react";
import "./EditorPreviews.css";

type EditorPreviewsProps = {
  value: ThemeName;
  onChange: (value: ThemeName) => void;
};

const editorValue = `function example() {
    console.log("Hello World");
}`;

export default function EditorPreviews({
  value,
  onChange,
}: EditorPreviewsProps) {
  const [filterValue, setFilterValue] = useState("");
  const trimmedFilterValue = filterValue.trim();
  const deferredTrimmedFilterValue = useDeferredValue(trimmedFilterValue);

  const filteredThemeNames = deferredTrimmedFilterValue
    ? themeNames.filter((themeName) =>
        themeName
          .toLocaleLowerCase()
          .includes(deferredTrimmedFilterValue.toLocaleLowerCase())
      )
    : themeNames;

  return (
    <div>
      <input
        value={filterValue}
        onChange={(e) => setFilterValue(e.target.value)}
      />
      <div role="radiogroup" className="editor-previews">
        {filteredThemeNames.map((themeName) => {
          return (
            <label key={themeName} className="editor-previews__item">
              {/* TODO: Bunları disabled yap */}
              <div className="editor-previews__item__editor-wrapper">
                <ReactCodeMirror
                  lang="javascript"
                  theme={themes[themeName] as any}
                  value={editorValue}
                  editable={false}
                  extensions={[
                    EditorView.lineWrapping,
                    loadLanguage("javascript") as any,
                  ]}
                  basicSetup={{
                    lineNumbers: false,
                    highlightActiveLine: false,
                    highlightActiveLineGutter: false,
                    foldGutter: false,
                  }}
                />
              </div>
              <div className="editor-previews__item__input-wrapper">
                <input
                  type="radio"
                  value={themeName}
                  checked={value === themeName}
                  onChange={() => {
                    onChange(themeName);
                  }}
                />
                <div className="editor-previews__item__name">{themeName}</div>
              </div>
            </label>
          );
        })}
      </div>
    </div>
  );
}
