import { plantFilterConfig, userFilterConfig } from "../../config/filters";
import { plants } from "../../data/plants";
import { users } from "../../data/users";
import { PlantType } from "../../models/Plant";
import { UserType } from "../../models/User";
import Filter from "../Filter/Filter3";
import style from "./App.module.scss";

const App: React.FC = () => {
  return (
    <div className={style["app"]}>
      <Filter<PlantType> items={plants} filterConfig={plantFilterConfig} />
      <Filter<UserType> items={users} filterConfig={userFilterConfig} />
    </div>
  );
};

export default App;
