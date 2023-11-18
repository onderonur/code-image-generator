import { useState } from 'react';
import type { LanguageName } from '@uiw/codemirror-extensions-langs';
import { loadLanguage } from '@uiw/codemirror-extensions-langs';
import { EditorView } from '@codemirror/view';
import type { Extension } from '@codemirror/state';
import type { ThemeName } from '@/editor/editor-types';
import type { ReactCodeMirrorProps } from '@uiw/react-codemirror';
import ReactCodeMirror from '@uiw/react-codemirror';
import * as themes from '@uiw/codemirror-themes-all';

type EditorProps = Pick<
  ReactCodeMirrorProps,
  'basicSetup' | 'editable' | 'value'
> & {
  language: LanguageName;
  theme: ThemeName;
};

export function Editor({ language, theme, value, basicSetup }: EditorProps) {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div>
      {isLoading && (
        <div className="min-h-[theme(spacing.16)] animate-pulse bg-body-800" />
      )}
      <ReactCodeMirror
        className={isLoading ? 'sr-only' : undefined}
        lang={language}
        theme={themes[theme]}
        value={value}
        extensions={[
          EditorView.lineWrapping,
          loadLanguage(language) as Extension,
        ]}
        basicSetup={{
          lineNumbers: false,
          highlightActiveLine: false,
          highlightActiveLineGutter: false,
          foldGutter: false,
          ...(typeof basicSetup === 'object' ? basicSetup : {}),
        }}
        onCreateEditor={() => {
          setIsLoading(false);
        }}
      />
    </div>
  );
}
