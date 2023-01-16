import * as themes from "@uiw/codemirror-themes-all";

export type ThemeName = Exclude<keyof typeof themes, `${string}Init`>;
