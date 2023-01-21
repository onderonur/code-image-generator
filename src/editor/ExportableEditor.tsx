import Editor from "@/editor/Editor";
import { SettingsValues } from "@/settings/Settings";
import { BackgroundPadding } from "@/settings/BackgroundPaddingRadioGroup";
import classNames from "classnames";
import styles from "./ExportableEditor.module.css";

export const EXPORTABLE_EDITOR_ID = "exportable-editor";

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

type ExportableEditorProps = {
  settings: SettingsValues;
};

export default function ExportableEditor({ settings }: ExportableEditorProps) {
  const isPaddingNone = settings.backgroundPadding === BackgroundPadding.NONE;

  return (
    <div id={EXPORTABLE_EDITOR_ID} className={styles.root}>
      <div
        className={classNames(
          styles.background,
          isPaddingNone && styles.backgroundHidden
        )}
        style={{
          background: settings.gradient,
        }}
      />
      <div
        className={classNames(
          styles.editorStage,
          settings.backgroundPadding === BackgroundPadding.XS &&
            styles.editorStagePaddingXs,
          settings.backgroundPadding === BackgroundPadding.SM &&
            styles.editorStagePaddingSm,
          settings.backgroundPadding === BackgroundPadding.MD &&
            styles.editorStagePaddingMd,
          settings.backgroundPadding === BackgroundPadding.LG &&
            styles.editorStagePaddingLg
        )}
      >
        <div
          className={classNames(
            styles.editorWrapper,
            isPaddingNone && styles.editorWrapperPaddingNone
          )}
        >
          <div className={styles.header}>
            <div className={styles.headerButtons}>
              <div
                className={classNames(
                  styles.headerButton,
                  styles.headerButtonRed
                )}
              />
              <div
                className={classNames(
                  styles.headerButton,
                  styles.headerButtonYellow
                )}
              />
              <div
                className={classNames(
                  styles.headerButton,
                  styles.headerButtonGreen
                )}
              />
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
  );
}
