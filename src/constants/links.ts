import {
  IconHome,
  IconList,
  IconDeviceAirpods,
  IconMessage,
  IconSettings,
  IconChartArea,
} from "@tabler/icons";

export const NavBarLinks = [
  {
    name: "Dashboard",
    to: "/",
    Icon: IconHome,
  },
  {
    name: "Graph",
    to: "/graph",
    Icon: IconChartArea,
  },
  {
    name: "Devices",
    to: "/devices",
    Icon: IconDeviceAirpods,
  },
  {
    name: "To Do List",
    to: "/todolist",
    Icon: IconList,
  },
  {
    name: "Chart",
    to: "/chart",
    Icon: IconMessage,
  },
  {
    name: "Settings",
    to: "/settings",
    Icon: IconSettings,
  },
];
