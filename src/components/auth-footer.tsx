import { Flex, Text } from "@mantine/core";
import { FC } from "react";
import { Link } from "react-router-dom";
type AuthFooterType = {
  message: string;
  linkName: string;
  to: string;
};
export const AuthFooter: FC<AuthFooterType> = ({ message, linkName, to }) => {
  return (
    <Flex justify="center" mt="lg">
      <Text color="gray">{message} </Text>
      <Link style={{ color: "gray" }} to={to}>
        {" "}
        {linkName}
      </Link>
    </Flex>
  );
};
