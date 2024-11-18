import * as themes from '@uiw/codemirror-themes-all';
import type { ThemeName } from './types';

export const themeNames = Object.keys(themes)
  .filter((themeName) => !themeName.endsWith('Init'))
  .sort() as ThemeName[];
