export * from "./links";
export * from "./socail-links";
export * from "./devices-types";
export const API_BASE_URL =
  process.env.NODE_ENV === "production"
    ? process.env.REACT_APP_PROD_API_URL
    : process.env.REACT_APP_DEV_API_URL;

export const LOCATIONS = [
  { value: "dubai", label: "Duabi" },
  { value: "abo dhabi", label: "Abu Dhabi" },
  { value: "sharjah", label: "Sharjah" },
  { value: "ajman", label: "Ajman" },
  { value: "fujairah", label: "Fujairah" },
];

export const EDU = [
  { value: "bachlor", label: "Bachlor" },
  { value: "high-school", label: "High School" },
];
export const JOBTITLE = [
  { value: "enginner", label: "Engineer" },
  { value: "hr", label: "HR" },
];
export const ORGS = [
  { value: "it", label: "Information Technology" },
  { value: "bank", label: "Banks" },
];
export const EXP = [
  { value: "1", label: "One Year" },
  { value: "2", label: "Two Year" },
  { value: "3", label: "Three Year" },
  { value: "4", label: "Four Year" },
  { value: "5", label: "Five Year" },
];
