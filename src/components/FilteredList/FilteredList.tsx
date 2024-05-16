import style from "./FilteredList.module.scss";

type FilteredListProps<T> = {
  filteredItems: T[];
};

const FilteredList = <T extends Record<string, any>>({
  filteredItems,
}: FilteredListProps<T>) => {
  return (
    <div className={style["filtered-list"]}>
      {filteredItems.length > 0 ? (
        <ul>
          {filteredItems.map((item) => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      ) : (
        <p>No item matching the filter criteria.</p>
      )}
    </div>
  );
};

export default FilteredList;
