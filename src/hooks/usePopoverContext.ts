import { useContext } from "react";
import { PopoverContext } from "../context/PopoverContext/PopoverContext";

export const usePopoverContext = () => {
  const context = useContext(PopoverContext);
  if (!context) {
    throw new Error("usePopoverContext must be used within a PopoverProvider");
  }
  return context;
};
