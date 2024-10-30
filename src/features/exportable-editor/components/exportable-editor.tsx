'use client';

import { Button } from '@/core/ui/components/button';
import { backgrounds } from '@/features/exportable-editor/components/background-radio-group';
import { MainEditor } from '@/features/exportable-editor/components/main-editor';
import type { SettingsValues } from '@/features/exportable-editor/components/settings';
import { Settings } from '@/features/exportable-editor/components/settings';
import { saveAs } from 'file-saver';
import html2canvas from 'html2canvas';
import { useRef, useState } from 'react';
import {
  MdOutlineContentCopy,
  MdOutlineDownload,
  MdOutlineSettings,
} from 'react-icons/md';
import { toast } from 'react-toastify';

export function ExportableEditor() {
  const [showSettings, setShowSettings] = useState(false);
  const [settings, setSettings] = useState<SettingsValues>({
    theme: { value: 'vscodeDark', label: 'vscodeDark' },
    language: { value: 'tsx', label: 'tsx' },
    lineNumbers: false,
    background: backgrounds[0],
    padding: 3,
  });

  const editorRef = useRef<React.ComponentRef<'div'>>(null);

  async function getBlob() {
    const editor = editorRef.current;

    if (!editor) {
      throw new Error('Editor node can not be found');
    }

    const canvas = await html2canvas(editor);

    return new Promise<Blob>((resolve, reject) => {
      canvas.toBlob((blob) => {
        if (blob) {
          resolve(blob);
        } else {
          reject(new Error('Blob not found'));
        }
      });
    });
  }

  async function handleCopy() {
    const blob = await getBlob();
    await navigator.clipboard.write([new ClipboardItem({ 'image/png': blob })]);
    toast('Copied to the clipboard', { type: 'success' });
  }

  async function handleDownload() {
    const blob = await getBlob();
    toast('Download will start now', { type: 'success' });
    saveAs(blob, 'code-image-generator.png');
  }

  const settingsForm = (
    <Settings
      values={settings}
      onChange={(newSettings) => {
        setSettings(newSettings);
      }}
      onCopy={handleCopy}
      onDownload={handleDownload}
    />
  );

  return (
    <div className="m-auto grid max-w-screen-xl gap-2 p-2 md:grid-cols-[theme(spacing.72)_1fr]">
      <div className="hidden md:sticky md:top-2 md:block">{settingsForm}</div>
      <div className="flex flex-col gap-2 md:hidden">
        <div className="flex justify-between">
          <Button
            aria-label={`${showSettings ? 'Hide' : 'Show'} Settings`}
            onClick={() => {
              setShowSettings((current) => !current);
            }}
          >
            <MdOutlineSettings />
          </Button>
          <div className="flex gap-1">
            <Button aria-label="Copy" title="Copy" onClick={handleCopy}>
              <MdOutlineContentCopy />
            </Button>
            <Button
              aria-label="Download"
              title="Download"
              onClick={handleDownload}
            >
              <MdOutlineDownload />
            </Button>
          </div>
        </div>
        {showSettings ? <div>{settingsForm}</div> : null}
      </div>
      <div className="flex-1 border-2 p-2">
        <MainEditor ref={editorRef} settings={settings} />
      </div>
    </div>
  );
}
