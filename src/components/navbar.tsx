import React, { useCallback } from "react";
import { NavLink } from "react-router-dom";
import {
  Avatar,
  createStyles,
  Divider,
  Flex,
  Indicator,
  Text,
} from "@mantine/core";
import { NavBarLinks } from "../constants";
import { IconPower } from "@tabler/icons";
import { useAuth } from "../hooks";

export const NavBarContent = () => {
  const { user, logout } = useAuth();
  const { classes } = useStylesNav();
  const _logout = useCallback(() => {
    logout();
  }, [logout]);
  return (
    <>
      <Flex sx={{ justifyContent: "center" }}>
        <Indicator color="green.5">
          <Avatar radius={120 / 2} w={"120px"} h="120px" />
          <Text color="white" mt="sm" align="center">
            {user.user.username}
          </Text>
        </Indicator>
      </Flex>

      {NavBarLinks.map(({ to, name, Icon }, key) => {
        return (
          <Flex
            key={`keys_nav_bar_${key}`}
            justify="flex-start"
            align="center"
            mt={20}
          >
            <NavLink
              to={to}
              className={({ isActive }) =>
                isActive ? classes.activeStyle : classes.nonActiveStyle
              }
            >
              <Icon size={30} />
              <span className={classes.name}> {name}</span>
            </NavLink>
          </Flex>
        );
      })}

      <Divider sx={{}} />

      <Flex pos="absolute" bottom={20}>
        <Flex
          sx={{ cursor: "pointer" }}
          justify="flex-start"
          align="center"
          onClick={_logout}
        >
          <IconPower color="white" size={30} />
          <Text color="white">Sign Out</Text>
        </Flex>
      </Flex>
    </>
  );
};

export const useStylesNav = createStyles((theme) => ({
  activeStyle: {
    backgroundImage: theme.fn.gradient(),
    textDecorationLine: "none",
    display: "flex",
    alignItems: "center",
    color: "#fff",
    width: "100%",
    padding: 10,
  },

  nonActiveStyle: {
    textDecorationLine: "none",
    display: "flex",
    alignItems: "center",
    color: "#fff",
    backgroundColor: "transparent",
    width: "100%",
    padding: 10,
  },
  name: {
    color: "#fff",
    paddingLeft: 10,
    fontFamily: "sans-serif",
  },
}));
