import { Editor } from '@/editor/editor';
import { BackgroundPadding } from '@/exportable-editor/background-padding-radio-group';
import type { SettingsValues } from '@/exportable-editor/settings';
import { forwardRef } from 'react';
import { twJoin } from 'tailwind-merge';

const defaultValue = `import { useState } from "react";

export function Counter() {
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

export const MainEditor = forwardRef<React.ElementRef<'div'>, MainEditorProps>(
  function ExportableEditor({ settings }, ref) {
    const isPaddingNone = settings.backgroundPadding === BackgroundPadding.NONE;

    const padding: Record<BackgroundPadding, string> = {
      [BackgroundPadding.NONE]: '',
      [BackgroundPadding.XS]: 'p-4 lg:p-8',
      [BackgroundPadding.SM]: 'p-6 lg:p-12',
      [BackgroundPadding.MD]: 'p-8 lg:p-16',
      [BackgroundPadding.LG]: 'p-10 lg:p20',
    };

    return (
      <div ref={ref} className="relative mx-auto w-fit">
        <div
          className={twJoin(
            'absolute inset-0 motion-safe:transition-opacity motion-safe:duration-300',
            isPaddingNone && 'opacity-0',
          )}
          style={{
            background: settings.background,
          }}
        />
        <div
          className={twJoin(
            'mx-auto w-fit min-w-[theme(spacing.64)] bg-no-repeat motion-safe:transition-all motion-safe:duration-300',
            padding[settings.backgroundPadding],
          )}
        >
          <div
            className={twJoin(
              'relative mx-auto overflow-hidden rounded-md shadow-md motion-safe:transition-shadow motion-safe:duration-300',
              isPaddingNone && 'shadow-none',
              '[&_.cm-editor]:p-8 [&_.cm-editor]:pt-12',
            )}
          >
            <div className="absolute z-10 w-full px-6 py-4">
              <div className="flex gap-2">
                <div className={twJoin('h-3 w-3 rounded-full', 'bg-error')} />
                <div className={twJoin('h-3 w-3 rounded-full', 'bg-alert')} />
                <div className={twJoin('h-3 w-3 rounded-full', 'bg-success')} />
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
