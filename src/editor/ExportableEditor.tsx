import React from 'react';
import Editor from '@/editor/Editor';
import { SettingsValues } from '@/settings/Settings';
import { BackgroundPadding } from '@/settings/BackgroundPaddingRadioGroup';
import classNames from 'classnames';

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

const ExportableEditor = React.forwardRef<
  HTMLDivElement,
  ExportableEditorProps
>(function ExportableEditor({ settings }, ref) {
  const isPaddingNone = settings.backgroundPadding === BackgroundPadding.NONE;

  return (
    <div ref={ref} className="relative w-fit mx-auto">
      <div
        className={classNames(
          'absolute inset-0 transition-opacity duration-300',
          isPaddingNone && 'opacity-0',
        )}
        style={{
          background: settings.gradient,
        }}
      />
      <div
        className={classNames(
          "bg-no-repeat w-fit min-w-[theme('spacing.64')] mx-auto transition-all duration-300",
          settings.backgroundPadding === BackgroundPadding.XS && 'p-8',
          settings.backgroundPadding === BackgroundPadding.SM && 'p-12',
          settings.backgroundPadding === BackgroundPadding.MD && 'p-16',
          settings.backgroundPadding === BackgroundPadding.LG && 'p-20',
        )}
      >
        <div
          className={classNames(
            'mx-auto rounded-md overflow-hidden relative transition-shadow duration-300 shadow-md',
            isPaddingNone && 'shadow-none',
            '[&_.cm-editor]:p-8 [&_.cm-editor]:pt-12 [&_.cm-editor]:text-md',
          )}
        >
          <div className="absolute w-full z-10 py-4 px-6">
            <div className="flex gap-2">
              <div className={classNames('w-3 h-3 rounded-full', 'bg-error')} />
              <div className={classNames('w-3 h-3 rounded-full', 'bg-alert')} />
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
});

export default ExportableEditor;
