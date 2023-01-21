"use client";

import { useState } from "react";
import { gradients } from "@/settings/GradientRadioGroup";
import domtoimage from "dom-to-image";
import { saveAs } from "file-saver";
import Settings, { SettingsValues } from "@/settings/Settings";
import Hero from "@/hero/Hero";
import { BackgroundPadding } from "@/settings/BackgroundPaddingRadioGroup";
import Link from "@/common/Link";
import ExportableEditor, {
  EXPORTABLE_EDITOR_ID,
} from "@/editor/ExportableEditor";
import styles from "./page.module.css";

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
  const node = document.getElementById(EXPORTABLE_EDITOR_ID);

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

  return (
    <div className={styles.root}>
      <div>
        <header>
          <Hero />
        </header>
        <main className={styles.main}>
          <div className={styles.settingsWrapper}>
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
          <div className={styles.exportableEditorWrapper}>
            <ExportableEditor settings={settings} />
          </div>
        </main>
      </div>
      <footer className={styles.footer}>
        <Link href="https://twitter.com/onderonur_" isExternal>
          Twitter
        </Link>
        <Link href="https://github.com/onderonur" isExternal>
          GitHub
        </Link>
        <Link href="https://www.linkedin.com/in/onderonur/" isExternal>
          LinkedIn
        </Link>
      </footer>
    </div>
  );
}
