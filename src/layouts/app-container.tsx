import { FC, PropsWithChildren, useState } from "react";
import {
  AppShell,
  Box,
  Burger,
  Header,
  MediaQuery,
  Navbar,
  Text,
  useMantineTheme,
} from "@mantine/core";
import { NavBarContent } from "../components";

export const AppContainer: FC<PropsWithChildren> = ({ children }) => {
  const [opened, setOpened] = useState(false);
  const theme = useMantineTheme();
  return (
    <AppShell
      navbarOffsetBreakpoint="sm"
      navbar={
        <Navbar
          bg="blue-grey.9"
          hiddenBreakpoint="sm"
          hidden={!opened}
          width={{ sm: 200, lg: 300 }}
          p="lg"
        >
          <NavBarContent />
        </Navbar>
      }
      header={
        <Header height={{ base: 50, md: 70 }}>
          <Box
            bg="blue-grey.9"
            sx={{ display: "flex", alignItems: "center", height: "100%" }}
          >
            <Text color="white" sx={{ fontWeight: "bold" }} p="md" size="xl">
              Adel
            </Text>
            <MediaQuery largerThan="sm" styles={{ display: "none" }}>
              <Burger
                opened={opened}
                onClick={() => setOpened((o) => !o)}
                size="sm"
                color={theme.colors.gray[6]}
                mr="xl"
              />
            </MediaQuery>
          </Box>
        </Header>
      }
      styles={(theme) => ({
        main: {
          backgroundColor:
            theme.colorScheme === "dark"
              ? theme.colors.dark[8]
              : theme.colors.white[0],
        },
      })}
    >
      {children}
    </AppShell>
  );
};
