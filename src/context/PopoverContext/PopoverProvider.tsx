import { useState } from "react";
import { PopoverContext } from "./PopoverContext";
import Popover, { PopoverPosition } from "../../components/Popover/Popover";
import useClickOutside from "../../hooks/useOutsideClick";

type PopoverProviderProps = {
  children: React.ReactNode;
};

export const PopoverProvider: React.FC<PopoverProviderProps> = ({
  children,
}) => {
  const [popoverContent, setPopoverContent] = useState<React.ReactNode>(null);
  const [popoverTarget, setPopoverTarget] =
    useState<React.RefObject<HTMLElement> | null>(null);
  const [position, setPosition] = useState<PopoverPosition>("bottom");
  const [offset, setOffset] = useState<number>(10);

  const setPopover = (
    content: React.ReactNode,
    ref: React.RefObject<HTMLElement>,
    position: PopoverPosition = "bottom",
    offset: number = 10
  ) => {
    if (popoverTarget === ref && popoverContent) {
      setPopoverContent(null);
      setPopoverTarget(null);
    } else {
      setPopoverContent(content);
      setPopoverTarget(ref);
      setPosition(position);
      setOffset(offset);
    }
  };

  const clearPopover = () => {
    setPopoverContent(null);
    setPopoverTarget(null);
  };

  useClickOutside(popoverTarget, clearPopover);

  return (
    <PopoverContext.Provider
      value={{ popoverContent, popoverTarget, setPopover }}
    >
      {children}
      {popoverContent && popoverTarget && (
        <Popover
          children={popoverContent}
          targetRef={popoverTarget}
          position={position}
          offset={offset}
        />
      )}
    </PopoverContext.Provider>
  );
};
