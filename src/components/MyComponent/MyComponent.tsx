import { useEffect, useState } from "react";
import style from "./MyComponent.module.scss";
import { Status } from "../../models/Status";

const MyComponent: React.FC = () => {
  const [status, setStatus] = useState<Status>(undefined);

  useEffect(() => {
    const fetchData = async () => {
      setStatus("loading");
      try {
        await new Promise((resolve) => setTimeout(resolve, 2000));
        setStatus("success");
      } catch (error) {
        setStatus("error");
      }
    };

    fetchData();
  }, []);

  return (
    <div className={style["my-component"]}>
      {status === "loading" && <p>Loading...</p>}
      {status === "success" && <p>Data loaded successfully!</p>}
      {status === "error" && <p>There was an error while loading data</p>}
    </div>
  );
};

export default MyComponent;
