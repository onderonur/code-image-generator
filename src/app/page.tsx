"use client";

import { useState } from "react";
import CodeMirror from "@uiw/react-codemirror";
import * as themes from "@uiw/codemirror-themes-all";
import {
  loadLanguage,
  langNames,
  LanguageName,
} from "@uiw/codemirror-extensions-langs";
import { EditorView } from "@codemirror/view";
import EditorPreviews from "@/editor/EditorPreviews";
import { ThemeName } from "@/editor/EditorTypes";
import "./page.css";
import { createMockArray } from "@/common/CommonUtils";

// TODO: TypeScript intellisense tam çalışmıyor app içinde özellikle bi bak.

const sortedLangNames = [...langNames].sort();

const defaultValue = `import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count is: {count}</p>
      <button onClick={(e) => setCount((current) => current + 1)}>
        Increase
      </button>
      <button onClick={(e) => setCount((current) => current - 1)}>
        Decrease
      </button>
    </div>
  );
}`;

export default function Page() {
  const [selectedThemeName, setSelectedThemeName] =
    useState<ThemeName>("vscodeDark");
  const [selectedLangName, setSelectedLangName] = useState<LanguageName>("jsx");
  const [lineNumbers, setLineNumbers] = useState(false);
  const [selectedBackground, setSelectedBackground] = useState(0);

  return (
    <div>
      <div role="radiogroup" className="background-selector">
        {createMockArray(9).map((key) => {
          const isSelected = selectedBackground === key;

          return (
            <label key={key}>
              <div
                className={isSelected ? "background-selector-TODO" : ""}
                style={{
                  width: 20,
                  height: 20,
                  borderRadius: "50%",
                  background: `var(--gradient-${key})`,
                }}
              />
              <input
                type="radio"
                className="sr-only"
                value={key}
                checked={selectedBackground === key}
                onChange={() => setSelectedBackground(key)}
              />
            </label>
          );
        })}
      </div>
      <select
        value={selectedLangName}
        onChange={(e) => {
          setSelectedLangName(e.target.value as LanguageName);
        }}
      >
        {sortedLangNames.map((langName) => {
          return (
            <option key={langName} value={langName}>
              {langName}
            </option>
          );
        })}
      </select>
      <label>
        <input
          type="checkbox"
          checked={lineNumbers}
          onChange={(e) => setLineNumbers(e.target.checked)}
        />
        Show line numbers
      </label>
      <div
        className="editor-stage"
        style={{ background: `var(--gradient-${selectedBackground})` }}
      >
        <div className="editor-wrapper">
          <div className="editor-header">
            <div className="editor-header-buttons">
              <div className="editor-header-button editor-header-button-red" />
              <div className="editor-header-button editor-header-button-yellow" />
              <div className="editor-header-button editor-header-button-green" />
            </div>
          </div>
          <CodeMirror
            lang={selectedLangName}
            theme={themes[selectedThemeName]}
            value={defaultValue}
            extensions={[
              EditorView.lineWrapping,
              loadLanguage(selectedLangName) as any,
            ]}
            basicSetup={{
              lineNumbers,
              highlightActiveLine: false,
              highlightActiveLineGutter: false,
              foldGutter: false,
            }}
          />
        </div>
      </div>
      <EditorPreviews
        value={selectedThemeName}
        onChange={(themeName) => setSelectedThemeName(themeName)}
      />
    </div>
  );
}
