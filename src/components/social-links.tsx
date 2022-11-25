import { Box, Divider, Flex, Text } from "@mantine/core";
import { SocailLinks } from "../constants";

const IconSocialConatiner = () => {
  return (
    <Flex justify="center" mt={"lg"}>
      {SocailLinks.map(({ Icon, color }, key) => {
        return (
          <Box
            key={`social_links_${key}`}
            mx="md"
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderColor: color,
              borderRadius: 15,
              borderStyle: "solid",
              borderWidth: 2,
              width: 30,
              height: 30,
            }}
          >
            <Icon color={color} />
          </Box>
        );
      })}
    </Flex>
  );
};
export const SocialLinks = () => {
  return (
    <>
      <Divider
        my="xs"
        label={
          <Flex
            justify="center"
            align="center"
            sx={{
              width: 20,
              height: 20,
              borderRadius: 4,
              borderStyle: "solid",
              borderWidth: 1,
              borderColor: "gray",
            }}
          >
            <Text>OR</Text>
          </Flex>
        }
        labelPosition="center"
      />
      {IconSocialConatiner()}
    </>
  );
};
