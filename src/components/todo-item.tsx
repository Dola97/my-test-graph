import { Box, createStyles, Flex, Text } from "@mantine/core";
import { FC, useCallback } from "react";
import { Item, useListStore } from "../store";
import { IconX } from "@tabler/icons";

export const ToDoItem: FC<Item> = ({ id, name, description }) => {
  const { deleteItem } = useListStore();
  const useStyles = createStyles((theme) => ({
    item: {
      ...theme.fn.focusStyles(),
      display: "flex",
      alignItems: "center",
      borderRadius: theme.radius.md,
      border: `1px solid ${
        theme.colorScheme === "dark"
          ? theme.colors.dark[5]
          : theme.colors.gray[2]
      }`,
      padding: `${theme.spacing.sm}px ${theme.spacing.xl}px`,
      backgroundColor:
        theme.colorScheme === "dark" ? theme.colors.dark[5] : theme.white,
      marginBottom: theme.spacing.sm,
    },

    itemDragging: {
      boxShadow: theme.shadows.sm,
    },

    symbol: {
      fontSize: 30,
      fontWeight: 700,
      width: 60,
    },
  }));
  const { classes } = useStyles();
  const onDelete = useCallback(() => {
    deleteItem(id);
  }, [id, deleteItem]);
  return (
    <div className={classes.item}>
      <Flex w="100%" direction="row" justify="space-between">
        <Flex align="center">
          <Text className={classes.symbol}>{name.charAt(0)}</Text>
          <div>
            <Text>{name}</Text>
            <Text color="dimmed" size="sm">
              Description:{description}
            </Text>
          </div>
        </Flex>
        <Box
          sx={{
            cursor: "pointer",
            position: "relative",
            top: 10,
            color: "grey",
            ":hover": {
              color: "red",
            },
          }}
          onClick={onDelete}
        >
          <IconX />
        </Box>
      </Flex>
    </div>
  );
};
