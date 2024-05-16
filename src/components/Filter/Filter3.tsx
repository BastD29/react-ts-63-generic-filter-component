import { useState } from "react";
import Dropdown from "../Dropdown/Dropdown";
import style from "./Filter.module.scss";

type FilterConfig<T> = {
  label: string;
  key: keyof T;
  options: T[keyof T][];
};

type FilterProps<T> = {
  items: T[];
  filterConfig: FilterConfig<T>[];
};

const Filter = <T extends Record<string, any>>({
  items,
  filterConfig,
}: FilterProps<T>) => {
  const initialFilter: Partial<T> = {};

  filterConfig.forEach(({ key }) => {
    initialFilter[key] = undefined;
  });

  const [filter, setFilter] = useState<Partial<T>>(initialFilter);

  const handleFilterChange = (key: keyof T, value: T[keyof T] | undefined) => {
    setFilter((prev) => ({ ...prev, [key]: value }));
  };

  const isMatchingFilter = (item: T): boolean => {
    return Object.keys(filter).every((key) => {
      const filterValue = filter[key as keyof T];
      return filterValue ? item[key as keyof T] === filterValue : true;
    });
  };

  const filteredItems = items.filter((item) => isMatchingFilter(item));

  return (
    <div className={style["filter"]}>
      {filterConfig.map(({ label, key, options }) => (
        <Dropdown
          key={label}
          label={label}
          value={filter[key]}
          options={[undefined, ...options]}
          onChange={(value) => handleFilterChange(key, value)}
        />
      ))}
      <div>
        <h3>Filtered Items</h3>
        <ul>
          {filteredItems.map((item) => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Filter;
