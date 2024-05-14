import { useRef } from "react";
import { usePopoverContext } from "../../hooks/usePopoverContext";
import PopoverContent2 from "../Popover/PopoverContent2/PopoverContent2";
import style from "./Test.module.scss";

const Test: React.FC = () => {
  const { setPopover } = usePopoverContext();

  const buttonRef = useRef<HTMLButtonElement>(null);

  return (
    <div className={style["test"]}>
      <h2>Test</h2>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur
        facilis impedit rerum necessitatibus vitae esse, quo, sint molestiae
        unde explicabo quos exercitationem ratione quam voluptatem, voluptate
        nam odit quod velit.
      </p>
      <button
        ref={buttonRef}
        onClick={() =>
          setPopover(<PopoverContent2 />, buttonRef, "bottom-centered")
        }
      >
        Toggle Test
      </button>
    </div>
  );
};

export default Test;
