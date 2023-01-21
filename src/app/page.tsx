"use client";

import { useState } from "react";
import Editor from "@/editor/Editor";
import { gradients } from "@/settings/GradientRadioGroup";
import domtoimage from "dom-to-image";
import { saveAs } from "file-saver";
import Settings, { SettingsValues } from "@/settings/Settings";
import "./page.css";
import Hero from "@/hero/Hero";
import classNames from "classnames";
import { BackgroundPadding } from "@/settings/BackgroundPaddingRadioGroup";
import Link from "@/common/Link";

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
    backgroundPadding: BackgroundPadding.MD,
  });

  const isPaddingNone = settings.backgroundPadding === BackgroundPadding.NONE;

  return (
    <div className="root">
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
          <div id="to-be-exported" className="editor-stage-wrapper">
            <div
              className={classNames(
                "background",
                isPaddingNone && "backgroundPaddingNone"
              )}
              style={{
                background: settings.gradient,
              }}
            />
            <div
              className={classNames(
                "editor-stage",
                settings.backgroundPadding === BackgroundPadding.XS &&
                  "background-padding-xs",
                settings.backgroundPadding === BackgroundPadding.SM &&
                  "background-padding-sm",
                settings.backgroundPadding === BackgroundPadding.MD &&
                  "background-padding-md",
                settings.backgroundPadding === BackgroundPadding.LG &&
                  "background-padding-lg"
              )}
            >
              <div
                className={classNames(
                  "editor-wrapper",
                  isPaddingNone && "editorWrapperPaddingNone"
                )}
              >
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
      <footer className="footer">
        <Link
          href="https://github.com/onderonur/code-image-generator"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </Link>
      </footer>
    </div>
  );
}
