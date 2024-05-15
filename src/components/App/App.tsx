import MyComponent from "../MyComponent2/MyComponent";
import style from "./App.module.scss";

const App: React.FC = () => {
  return (
    <div className={style["app"]}>
      <MyComponent />
    </div>
  );
};

export default App;
