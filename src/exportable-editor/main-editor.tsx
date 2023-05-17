import Editor from '@/editor/editor';
import { SettingsValues } from '@/exportable-editor/settings';
import { BackgroundPadding } from '@/exportable-editor/background-padding-radio-group';
import classNames from 'classnames';
import { forwardRef } from 'react';

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

type MainEditorProps = {
  settings: SettingsValues;
};

const MainEditor = forwardRef<HTMLDivElement, MainEditorProps>(
  function ExportableEditor({ settings }, ref) {
    const isPaddingNone = settings.backgroundPadding === BackgroundPadding.NONE;

    return (
      <div ref={ref} className="relative w-fit mx-auto">
        <div
          className={classNames(
            'absolute inset-0 motion-safe:transition-opacity motion-safe:duration-300',
            isPaddingNone && 'opacity-0',
          )}
          style={{
            background: settings.background,
          }}
        />
        <div
          className={classNames(
            'bg-no-repeat w-fit min-w-[theme(spacing.64)] mx-auto motion-safe:transition-all motion-safe:duration-300',
            settings.backgroundPadding === BackgroundPadding.XS && 'p-8',
            settings.backgroundPadding === BackgroundPadding.SM && 'p-12',
            settings.backgroundPadding === BackgroundPadding.MD && 'p-16',
            settings.backgroundPadding === BackgroundPadding.LG && 'p-20',
          )}
        >
          <div
            className={classNames(
              'mx-auto rounded-md overflow-hidden relative motion-safe:transition-shadow motion-safe:duration-300 shadow-md',
              isPaddingNone && 'shadow-none',
              '[&_.cm-editor]:p-8 [&_.cm-editor]:pt-12',
            )}
          >
            <div className="absolute w-full z-10 py-4 px-6">
              <div className="flex gap-2">
                <div
                  className={classNames('w-3 h-3 rounded-full', 'bg-error')}
                />
                <div
                  className={classNames('w-3 h-3 rounded-full', 'bg-alert')}
                />
                <div
                  className={classNames('w-3 h-3 rounded-full', 'bg-success')}
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
  },
);

export default MainEditor;
