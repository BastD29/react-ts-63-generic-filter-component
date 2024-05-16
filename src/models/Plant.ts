type Cycle = undefined | "annual" | "perennial";
type Sunlight = undefined | "full-sun" | "part-sun" | "part-shade";
type Watering = undefined | "frequent" | "average" | "minimum";

type PlantType = {
  id: number;
  name: string;
  cycle: Cycle;
  sunlight: Sunlight;
  watering: Watering;
};

type FilterPlantType = { cycle: Cycle; sunlight: Sunlight; watering: Watering };

type PlantFilterConfig = {
  label: string;
  key: keyof PlantType;
  options: string[];
}[];

export type {
  PlantType,
  FilterPlantType,
  Cycle,
  Sunlight,
  Watering,
  PlantFilterConfig,
};
