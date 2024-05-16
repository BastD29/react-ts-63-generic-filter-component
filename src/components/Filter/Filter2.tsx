// import { useState } from "react";
// import {
//   Cycle,
//   FilterPlantType,
//   PlantType,
//   Sunlight,
//   Watering,
// } from "../../models/Plant";
// import Dropdown from "../Dropdown/Dropdown";
// import style from "./Filter.module.scss";

// type FilterProps = {
//   items: PlantType[];
// };

// const initialFilter: FilterPlantType = {
//   cycle: undefined,
//   sunlight: undefined,
//   watering: undefined,
// };

// const Filter: React.FC<FilterProps> = ({ items }) => {
//   const [filter, setFilter] = useState<FilterPlantType>(initialFilter);

//   const handleFilterChange = (
//     key: keyof FilterPlantType,
//     value: FilterPlantType[keyof FilterPlantType]
//   ) => {
//     setFilter((prev) => ({ ...prev, [key]: value }));
//   };

//   const isMatchingFilter = (
//     item: PlantType,
//     filter: FilterPlantType
//   ): boolean => {
//     return Object.keys(filter).every((key) => {
//       const filterValue = filter[key as keyof FilterPlantType];
//       return filterValue ? item[key as keyof PlantType] === filterValue : true;
//     });
//   };

//   const filteredItems = items.filter((item) => isMatchingFilter(item, filter));

//   return (
//     <div className={style["filter"]}>
//       <Dropdown<Cycle>
//         label="Cycle"
//         value={filter.cycle}
//         options={[undefined, "annual", "perennial"]}
//         onChange={(value) => handleFilterChange("cycle", value)}
//       />
//       <Dropdown<Sunlight>
//         label="Sunlight"
//         value={filter.sunlight}
//         options={[undefined, "full-sun", "part-shade", "part-sun"]}
//         onChange={(value) => handleFilterChange("sunlight", value)}
//       />
//       <Dropdown<Watering>
//         label="Watering"
//         value={filter.watering}
//         options={[undefined, "average", "frequent", "minimum"]}
//         onChange={(value) => handleFilterChange("watering", value)}
//       />
//       <div>
//         <h3>Filtered Items</h3>
//         <ul>
//           {filteredItems.map((item) => (
//             <li key={item.id}>{item.name}</li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default Filter;
