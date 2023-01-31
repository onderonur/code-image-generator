import * as themes from '@uiw/codemirror-themes-all';
import { LanguageName } from '@uiw/codemirror-extensions-langs';

export type ThemeName = Exclude<keyof typeof themes, `${string}Init`>;

export type ThemeOption = { value: ThemeName; label: ThemeName };

export type LanguageOption = { value: LanguageName; label: LanguageName };
