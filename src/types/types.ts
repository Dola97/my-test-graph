import { Tuple, DefaultMantineColor } from "@mantine/core";

type ExtendedCustomColors =
  | "primaryColorName"
  | "secondaryColorName"
  | DefaultMantineColor;

export interface MantineThemeColorsOverride {
  colors: Record<ExtendedCustomColors, Tuple<string, 10>>;
}

export type registerValuesType = {
  email: string;
  password: string;
  contact: string;
  location: string;
  education: string;
  job: string;
  org: string;
  exp: string;
};
