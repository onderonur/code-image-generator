import { Editor } from '@/features/editor/components/editor';
import type { SettingsValues } from '@/features/exportable-editor/components/settings';
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
  ref: React.Ref<React.ComponentRef<'div'>>;
  settings: SettingsValues;
};

export function MainEditor({ ref, settings }: MainEditorProps) {
  const hasNoPadding = !settings.padding;

  return (
    <div
      ref={ref}
      className="mx-auto w-fit"
      style={{
        background: hasNoPadding ? undefined : settings.background,
      }}
    >
      <div
        className="min-w-[theme(spacing.64)] bg-no-repeat"
        style={{
          padding: `${settings.padding}rem`,
        }}
      >
        <div
          className={twJoin(
            'relative mx-auto overflow-hidden rounded-md shadow-md',
            hasNoPadding && 'shadow-none',
            '[&_.cm-editor]:p-8 [&_.cm-editor]:pt-12',
          )}
        >
          <Editor
            language={settings.language.value}
            theme={settings.theme.value}
            basicSetup={{ lineNumbers: settings.lineNumbers }}
            value={defaultValue}
          />
          <div className="absolute top-0 w-full px-6 py-4">
            <div className="flex gap-2">
              <div className={twJoin('size-3 rounded-full', 'bg-error')} />
              <div className={twJoin('size-3 rounded-full', 'bg-alert')} />
              <div className={twJoin('size-3 rounded-full', 'bg-success')} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
