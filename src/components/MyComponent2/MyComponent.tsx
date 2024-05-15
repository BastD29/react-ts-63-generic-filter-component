import { useEffect, useState } from "react";
import style from "./MyComponent.module.scss";
import { LoadableState } from "../../models/Status";

const MyComponent: React.FC = () => {
  const [state, setState] = useState<LoadableState<string>>({
    type: "not_asked",
  });

  useEffect(() => {
    const fetchData = async () => {
      setState({ type: "loading" });

      try {
        await new Promise((resolve) => setTimeout(resolve, 2000));
        const data = "Fetched data";
        setState({ type: "loaded", data });
      } catch (err) {
        const error = err instanceof Error ? err : new Error("Unknown error");
        setState({ type: "error", error });
      }
    };

    fetchData();
  }, []);

  return (
    <div className={style["my-component"]}>
      {state.type === "not_asked" && <p>Start the data fetching process</p>}
      {state.type === "loading" && <p>Loading...</p>}
      {state.type === "loaded" && <p>Data loaded successfully: {state.data}</p>}
      {state.type === "error" && (
        <p>Error loading data: {state.error.message}</p>
      )}
    </div>
  );
};

export default MyComponent;
