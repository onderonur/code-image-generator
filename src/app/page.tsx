"use client";

import { useState } from "react";
import Editor from "@/editor/Editor";
import { gradients } from "@/settings/GradientRadioGroup";
import domtoimage from "dom-to-image";
import { saveAs } from "file-saver";
import Settings, { SettingsValues } from "@/settings/Settings";
import "./page.css";
import Hero from "@/hero/Hero";

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

async function getBlob() {
  const node = document.getElementById("to-be-exported");

  if (!node) {
    throw new Error("Node can not be found");
  }

  const blob = await domtoimage.toBlob(node);

  return blob;
}

export default function Page() {
  const [settings, setSettings] = useState<SettingsValues>({
    theme: { value: "vscodeDark", label: "vscodeDark" },
    language: { value: "tsx", label: "tsx" },
    lineNumbers: false,
    gradient: gradients[0],
  });

  return (
    <div>
      <header>
        <Hero />
      </header>
      <main className="main">
        <div className="settingsWrapper">
          <Settings
            values={settings}
            onChange={(newSettings) => setSettings(newSettings)}
            onCopy={async () => {
              const blob = await getBlob();
              navigator.clipboard.write([
                new ClipboardItem({ "image/png": blob }),
              ]);
            }}
            onDownload={async () => {
              const blob = await getBlob();
              saveAs(blob, "test.png");
            }}
          />
        </div>
        <div id="to-be-exported">
          <div
            className="editor-stage"
            style={{ background: settings.gradient }}
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
                language={settings.language.value}
                theme={settings.theme.value}
                basicSetup={{ lineNumbers: settings.lineNumbers }}
                value={defaultValue}
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
