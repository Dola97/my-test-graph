import { Tuple, DefaultMantineColor } from "@mantine/core";

type ExtendedCustomColors =
  | "primaryColorName"
  | "secondaryColorName"
  | DefaultMantineColor;

export interface MantineThemeColorsOverride {
  colors: Record<ExtendedCustomColors, Tuple<string, 10>>;
}
