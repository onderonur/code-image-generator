"use client";

import { useState } from "react";
import ThemeSelect from "@/editor/ThemeSelect";
import { LanguageOption, ThemeOption } from "@/editor/EditorTypes";
import LanguageSelect from "@/editor/LanguageSelect";
import Editor from "@/editor/Editor";
import GradientRadioGroup from "@/editor/GradientRadioGroup";
import domtoimage from "dom-to-image";
import { saveAs } from "file-saver";
import "./page.css";

// TODO: 404 page vs ekle

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
  const [selectedTheme, setSelectedTheme] = useState<ThemeOption>({
    value: "vscodeDark",
    label: "vscodeDark",
  });
  const [selectedLanguage, setSelectedLanguage] = useState<LanguageOption>({
    value: "jsx",
    label: "jsx",
  });
  const [lineNumbers, setLineNumbers] = useState(false);
  const [selectedBackground, setSelectedBackground] = useState(0);

  async function getBlob() {
    const node = document.getElementById("to-be-exported");

    if (!node) {
      throw new Error("Node can not be found");
    }

    const blob = await domtoimage.toBlob(node);

    return blob;
  }

  return (
    <div>
      <button
        onClick={async () => {
          const blob = await getBlob();
          saveAs(blob, "test.png");
        }}
      >
        Download
      </button>
      <button
        onClick={async () => {
          const blob = await getBlob();
          navigator.clipboard.write([new ClipboardItem({ "image/png": blob })]);
        }}
      >
        Copy to Clipboard
      </button>
      <header className="header">
        <h1 className="title">Code Image Generator</h1>
        <p>Lorem ipsum dolor sit amet.</p>
      </header>
      <main>
        <div className="settings">
          <div className="settings-item">
            <GradientRadioGroup
              value={selectedBackground}
              onChange={(gradient) => setSelectedBackground(gradient)}
            />
          </div>
          <div className="settings-item">
            <LanguageSelect
              value={selectedLanguage}
              onChange={(language) => {
                if (language) {
                  setSelectedLanguage(language);
                }
              }}
            />
          </div>
          <div className="settings-item">
            <ThemeSelect
              value={selectedTheme}
              onChange={(theme) => {
                if (theme) {
                  setSelectedTheme(theme);
                }
              }}
            />
          </div>
          <div className="settings-item">
            <label>
              <input
                type="checkbox"
                checked={lineNumbers}
                onChange={(e) => setLineNumbers(e.target.checked)}
              />
              Show line numbers
            </label>
          </div>
        </div>
        <div id="to-be-exported">
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
              <Editor
                language={selectedLanguage.value}
                theme={selectedTheme.value}
                basicSetup={{ lineNumbers }}
                value={defaultValue}
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
