import { useRef } from "react";
import { usePopoverContext } from "../../hooks/usePopoverContext";
import PopoverContent from "../Popover/PopoverContent/PopoverContent";
import Test from "../Test/Test";
import style from "./App.module.scss";

const App: React.FC = () => {
  const { setPopover } = usePopoverContext();

  const buttonRef = useRef<HTMLButtonElement>(null);
  const buttonRef2 = useRef<HTMLButtonElement>(null);

  return (
    <div className={style["app"]}>
      <button
        ref={buttonRef}
        onClick={() => setPopover(<PopoverContent />, buttonRef)}
      >
        Toggle Popover 1
      </button>
      <button
        ref={buttonRef2}
        onClick={() =>
          setPopover(<div>Test</div>, buttonRef2, "right-centered")
        }
      >
        Toggle Popover 2
      </button>

      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />

      <Test />
    </div>
  );
};

export default App;
