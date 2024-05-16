import { PlantFilterConfig } from "../models/Plant";
import { UserFilterConfig } from "../models/User";

const plantFilterConfig: PlantFilterConfig = [
  { label: "Cycle", key: "cycle", options: ["annual", "perennial"] },
  {
    label: "Sunlight",
    key: "sunlight",
    options: ["full-sun", "part-shade", "part-sun"],
  },
  {
    label: "Watering",
    key: "watering",
    options: ["average", "frequent", "minimum"],
  },
];

const userFilterConfig: UserFilterConfig = [
  { label: "Role", key: "role", options: ["accountant", "artist", "ceo"] },
  {
    label: "Sex",
    key: "sex",
    options: ["male", "female"],
  },
  {
    label: "City",
    key: "city",
    options: ["washington", "new-york", "chicago"],
  },
];

export { plantFilterConfig, userFilterConfig };
