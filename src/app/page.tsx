"use client";

import { useRef, useState } from "react";
import { gradients } from "@/settings/GradientRadioGroup";
import { saveAs } from "file-saver";
import Settings, { SettingsValues } from "@/settings/Settings";
import Hero from "@/hero/Hero";
import { BackgroundPadding } from "@/settings/BackgroundPaddingRadioGroup";
import Link from "@/common/Link";
import ExportableEditor from "@/editor/ExportableEditor";
import html2canvas from "html2canvas";
import styles from "./page.module.css";

// TODO: 404 page vs ekle

export default function Page() {
  const [settings, setSettings] = useState<SettingsValues>({
    theme: { value: "vscodeDark", label: "vscodeDark" },
    language: { value: "tsx", label: "tsx" },
    lineNumbers: false,
    gradient: gradients[0],
    backgroundPadding: BackgroundPadding.MD,
  });

  const editorRef = useRef<HTMLDivElement>(null);

  async function getBlob() {
    const editor = editorRef.current;

    if (!editor) {
      throw new Error("Editor node can not be found");
    }

    const canvas = await html2canvas(editor);

    return new Promise<Blob>((resolve, reject) => {
      canvas.toBlob((blob) => {
        if (blob) {
          resolve(blob);
        } else {
          reject(new Error("Blob not found"));
        }
      });
    });
  }

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
                saveAs(blob, "code-image-generator.png");
              }}
            />
          </div>
          <div className={styles.exportableEditorWrapper}>
            <ExportableEditor ref={editorRef} settings={settings} />
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
