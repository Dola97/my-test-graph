import { FC, PropsWithChildren } from "react";
import { AppShell, Navbar } from "@mantine/core";

export const AppContainer: FC<PropsWithChildren> = ({ children }) => {
  return (
    <AppShell
      padding="md"
      navbar={
        <Navbar width={{ base: 300 }} p="md">
          {/* Navbar content */}
        </Navbar>
      }
      styles={(theme) => ({
        main: {
          backgroundColor:
            theme.colorScheme === "dark"
              ? theme.colors.dark[8]
              : theme.colors.gray[0],
        },
      })}
    >
      {children}
    </AppShell>
  );
};
