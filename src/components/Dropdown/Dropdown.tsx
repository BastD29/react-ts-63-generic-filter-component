import { useRef, useState } from "react";
import ChevronDownIcon from "../Icons/ChevronDownIcon/ChevronDownIcon";
import useOutsideClick from "../../hooks/useOutsideClick";
import style from "./Dropdown.module.scss";
import ChevronUpIcon from "../Icons/ChevronUpIcon/ChevronUpIcon";

type DropdownProps<T> = {
  label: string;
  value: T;
  options: T[];
  onChange: (value: T) => void;
};

const Dropdown = <T extends string | undefined>({
  // label,
  onChange,
  options,
  value,
}: DropdownProps<T>) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const dropdownRef = useRef<HTMLDivElement>(null);

  useOutsideClick(dropdownRef, () => {
    if (isOpen) setIsOpen(false);
  });

  const handleSelect = (option: T) => {
    onChange(option);
    setIsOpen(false);
  };

  return (
    <div ref={dropdownRef} className={style["dropdown"]}>
      <div
        className={style["dropdown__header"]}
        onClick={() => setIsOpen(!isOpen)}
      >
        {value || "all"}
        {/* {value || label} */}
        {isOpen ? <ChevronUpIcon /> : <ChevronDownIcon />}
      </div>
      {isOpen && (
        <div className={style["dropdown__list"]}>
          {options.map((option) => {
            console.log("option:", option);
            const key = option ?? "undefined-option";

            return (
              <div
                key={key}
                className={style["dropdown__item"]}
                onClick={() => handleSelect(option)}
              >
                {option || "all"}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
