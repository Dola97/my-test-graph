import { IconChevronDown } from "@tabler/icons";

export const selectorProps = {
  searchable: true,
  rightSection: <IconChevronDown size={14} />,
  clearable: true,
  transition: "pop-top-left",
  transitionDuration: 80,
  transitionTimingFunction: "ease",
  nothingFound: "No options",
  placeholder: "Pick one",
};

export const selectorDevicesProps = {
  searchable: true,
  rightSection: <IconChevronDown size={14} />,
  transition: "pop-top-left",
  transitionDuration: 80,
  transitionTimingFunction: "ease",
  nothingFound: "No options",
  placeholder: "Pick one",
};
