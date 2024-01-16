import type { LanguageName } from '@uiw/codemirror-extensions-langs';
import type * as themes from '@uiw/codemirror-themes-all';

export type ThemeName = Exclude<keyof typeof themes, `${string}Init`>;

export type ThemeOption = { value: ThemeName; label: ThemeName };

export type LanguageOption = { value: LanguageName; label: LanguageName };
