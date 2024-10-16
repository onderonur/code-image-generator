import * as themes from '@uiw/codemirror-themes-all';
import type { ThemeName } from './editor.types';

export const themeNames = Object.keys(themes)
  .filter((themeName) => !themeName.endsWith('Init'))
  .sort() as ThemeName[];
