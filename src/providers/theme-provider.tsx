import { FC, PropsWithChildren } from "react";
import { MantineProvider } from "@mantine/core";
import { AppContainer } from "../layouts";
import { Colors, FontSizes, Headings } from "../theme";

export const AppProvider: FC<PropsWithChildren> = ({ children }) => {
  return (
    <MantineProvider
      theme={{
        colors: Colors as any,
        fontSizes: FontSizes,
        headings: Headings,
      }}
      withGlobalStyles
      withNormalizeCSS
    >
      <AppContainer>{children}</AppContainer>
    </MantineProvider>
  );
};
