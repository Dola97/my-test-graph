import React from "react";
import { NavLink } from "react-router-dom";
import { Avatar, Flex, Indicator, Text } from "@mantine/core";
import { NavBarLinks } from "../constants";
import { IconPower } from "@tabler/icons";

const LogoutSection = () => {
  return (
    <Flex justify="flex-start" align="center">
      <IconPower size={30} />
      <Text>Sign Out</Text>
    </Flex>
  );
};
export const NavBarContent = () => {
  return (
    <>
      <Flex sx={{ justifyContent: "center" }}>
        <Indicator color="green.5">
          <Avatar radius={120 / 2} w={"120px"} h="120px" />
          <Text mt="sm" align="center">
            USERNAME{" "}
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
              style={({ isActive }) =>
                isActive ? activeStyle : nonActiveStyle
              }
            >
              <Icon size={30} />
              {name}
            </NavLink>
          </Flex>
        );
      })}
      <Flex pos="absolute" bottom={20}>
        {LogoutSection()}
      </Flex>
    </>
  );
};

const activeStyle = {
  textDecorationLine: "none",
  display: "flex",
  alignItems: "center",
  color: "#fff",
};
const nonActiveStyle = {
  textDecorationLine: "none",
  display: "flex",
  alignItems: "center",
  color: "#424242",
  backgroundColor: "red",
};
