import { useRef, useState } from 'react';
import { backgrounds } from '@/exportable-editor/BackgroundRadioGroup';
import { saveAs } from 'file-saver';
import Settings, { SettingsValues } from '@/exportable-editor/Settings';
import { BackgroundPadding } from '@/exportable-editor/BackgroundPaddingRadioGroup';
import MainEditor from '@/exportable-editor/MainEditor';
import html2canvas from 'html2canvas';
import Button from '@/common/Button';
import {
  MdOutlineSettings,
  MdOutlineDownload,
  MdOutlineContentCopy,
} from 'react-icons/md';
import { toast } from 'react-toastify';

export default function ExportableEditor() {
  const [showSettings, setShowSettings] = useState(false);
  const [settings, setSettings] = useState<SettingsValues>({
    theme: { value: 'vscodeDark', label: 'vscodeDark' },
    language: { value: 'tsx', label: 'tsx' },
    lineNumbers: false,
    background: backgrounds[0],
    backgroundPadding: BackgroundPadding.MD,
  });

  const editorRef = useRef<HTMLDivElement>(null);

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
    navigator.clipboard.write([new ClipboardItem({ 'image/png': blob })]);
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
      onChange={(newSettings) => setSettings(newSettings)}
      onCopy={handleCopy}
      onDownload={handleDownload}
    />
  );

  return (
    <div className="grid gap-2 p-2 m-auto max-w-screen-xl md:grid-cols-[theme(spacing.72)_1fr]">
      <div className="hidden md:block md:sticky md:top-2">{settingsForm}</div>
      <div className="flex flex-col gap-2 md:hidden">
        <div className="flex justify-between">
          <Button
            aria-label={`${showSettings ? 'Hide' : 'Show'} Settings`}
            onClick={() => setShowSettings((current) => !current)}
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
        {showSettings && <div>{settingsForm}</div>}
      </div>
      <div className="flex-1 p-2 border-2">
        <MainEditor ref={editorRef} settings={settings} />
      </div>
    </div>
  );
}
