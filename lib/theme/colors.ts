import { generateColorPalette } from './util/generateColorPalette';

export type PaletteSteps = {
  0: string;
  50: string;
  100: string;
  150: string;
  200: string;
  250: string;
  300: string;
  350: string;
  400: string;
  450: string;
  500: string;
  550: string;
  600: string;
  650: string;
  700: string;
  750: string;
  800: string;
  850: string;
  900: string;
  950: string;
  1000: string;
};

export type ThemeColors = {
  base: PaletteSteps;
  baseAlpha: PaletteSteps;
  gold: PaletteSteps;
  goldAlpha: PaletteSteps;
  working: PaletteSteps;
  workingAlpha: PaletteSteps;
  warning: PaletteSteps;
  warningAlpha: PaletteSteps;
  ok: PaletteSteps;
  okAlpha: PaletteSteps;
  error: PaletteSteps;
  errorAlpha: PaletteSteps;
  appYellow: PaletteSteps;
  appYellowAlpha: PaletteSteps;
  appRed: PaletteSteps;
  appRedAlpha: PaletteSteps;
  appGreen: PaletteSteps;
  appGreenAlpha: PaletteSteps;
  appBlue: PaletteSteps;
  appBlueAlpha: PaletteSteps;
  aittorPurple: PaletteSteps;
  aittorPurpleAlpha: PaletteSteps;
};

const brandColors = {
  base: { H: 220, S: 12 },
  working: { H: 47, S: 42 },
  gold: { H: 40, S: 70 },
  warning: { H: 28, S: 42 },
  ok: { H: 113, S: 42 },
  error: { H: 0, S: 42 },
  appYellow: { H: 66, S: 92 },
  appBlue: { H: 200, S: 76 },
  appGreen: { H: 110, S: 69 },
  appRed: { H: 16, S: 92 },
  aittorPurple: { H: 260, S: 58 },
};

export const getArbitraryBaseColor = (lightness: number) =>
  `hsl(${brandColors.base.H} ${brandColors.base.S}% ${lightness}%)`;

export const colors: ThemeColors = {
  base: generateColorPalette(brandColors.base.H, brandColors.base.S),
  baseAlpha: generateColorPalette(brandColors.base.H, brandColors.base.S, true),
  working: generateColorPalette(brandColors.working.H, brandColors.working.S),
  workingAlpha: generateColorPalette(brandColors.working.H, brandColors.working.S, true),
  gold: generateColorPalette(brandColors.gold.H, brandColors.gold.S),
  goldAlpha: generateColorPalette(brandColors.gold.H, brandColors.gold.S, true),
  warning: generateColorPalette(brandColors.warning.H, brandColors.warning.S),
  warningAlpha: generateColorPalette(brandColors.warning.H, brandColors.warning.S, true),
  ok: generateColorPalette(brandColors.ok.H, brandColors.ok.S),
  okAlpha: generateColorPalette(brandColors.ok.H, brandColors.ok.S, true),
  error: generateColorPalette(brandColors.error.H, brandColors.error.S),
  errorAlpha: generateColorPalette(brandColors.error.H, brandColors.error.S, true),
  appYellow: generateColorPalette(brandColors.appYellow.H, brandColors.appYellow.S),
  appYellowAlpha: generateColorPalette(brandColors.appYellow.H, brandColors.appYellow.S, true),
  appBlue: generateColorPalette(brandColors.appBlue.H, brandColors.appBlue.S),
  appBlueAlpha: generateColorPalette(brandColors.appBlue.H, brandColors.appBlue.S, true),
  appGreen: generateColorPalette(brandColors.appGreen.H, brandColors.appGreen.S),
  appGreenAlpha: generateColorPalette(brandColors.appGreen.H, brandColors.appGreen.S, true),
  appRed: generateColorPalette(brandColors.appRed.H, brandColors.appRed.S),
  appRedAlpha: generateColorPalette(brandColors.appRed.H, brandColors.appRed.S, true),
  aittorPurple: generateColorPalette(brandColors.aittorPurple.H, brandColors.aittorPurple.S),
  aittorPurpleAlpha: generateColorPalette(brandColors.aittorPurple.H, brandColors.aittorPurple.S, true),
};
