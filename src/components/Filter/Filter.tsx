// import { useState } from "react";
// import {
//   Cycle,
//   FilterType,
//   ItemType,
//   Sunlight,
//   Watering,
// } from "../../models/Plant";
// import style from "./Filter.module.scss";

// type FilterProps = {
//   items: ItemType[];
// };

// const initialFilter: FilterType = {
//   cycle: undefined,
//   sunlight: undefined,
//   watering: undefined,
// };

// const Filter: React.FC<FilterProps> = ({ items }) => {
//   const [filter, setFilter] = useState<FilterType>(initialFilter);

//   const handleFilterChange = (
//     key: keyof FilterType,
//     value: FilterType[keyof FilterType]
//   ) => {
//     setFilter((prev) => ({ ...prev, [key]: value }));
//   };

//   const filteredItems = items.filter((item) => {
//     return (
//       (filter.cycle ? item.cycle === filter.cycle : true) &&
//       (filter.sunlight ? item.sunlight === filter.sunlight : true) &&
//       (filter.watering ? item.watering === filter.watering : true)
//     );
//   });

//   return (
//     <div className={style["filter"]}>
//       <div>
//         <label>
//           Cycle:
//           <select
//             value={filter.cycle || ""}
//             onChange={(e) =>
//               handleFilterChange("cycle", e.target.value as Cycle)
//             }
//           >
//             <option value="">All</option>
//             <option value="annual">Annual</option>
//             <option value="perennial">Perennial</option>
//           </select>
//         </label>
//       </div>
//       <div>
//         <label>
//           Sunlight:
//           <select
//             value={filter.sunlight || ""}
//             onChange={(e) =>
//               handleFilterChange("sunlight", e.target.value as Sunlight)
//             }
//           >
//             <option value="">All</option>
//             <option value="full-sun">Full Sun</option>
//             <option value="part-sun">Part Sun</option>
//             <option value="part-shade">Part Shade</option>
//           </select>
//         </label>
//       </div>
//       <div>
//         <label>
//           Watering:
//           <select
//             value={filter.watering || ""}
//             onChange={(e) =>
//               handleFilterChange("watering", e.target.value as Watering)
//             }
//           >
//             <option value="">All</option>
//             <option value="frequent">Frequent</option>
//             <option value="average">Average</option>
//             <option value="minimum">Minimum</option>
//           </select>
//         </label>
//       </div>
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
