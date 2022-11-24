import { createStyles } from "@mantine/core";

export const inputStyle = createStyles((theme) => ({
  input: {
    color: theme.colors.grey[7],
    ":hover": {
      borderColor: theme.colors.indigo[8],
      borderWidth: 1,
      borderStyle: "solid",
    },
    ":active": {
      borderColor: theme.colors.blue[9],
    },
    ":disabled": {
      borderColor: theme.colors.grey[3],
    },

    ":focus": {
      borderColor: theme.colors.blue[9],
    },
    ":invalid": {
      borderColor: theme.colors.red[8],
      borderWidth: 1,
      borderStyle: "solid",
      backgroundColor: theme.colors.red[0],
    },
  },
}));
