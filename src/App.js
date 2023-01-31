import Favorites from "./components/Favorites";
import Search from "./components/Search";
import Meals from "./components/Meals";
import Modals from "./components/Modals";
import { MealsContext } from "./context";
import { useContext } from "react";

function App() {
  const { showModal } = useContext(MealsContext);
  return (
    <div>
      <Search />
      <Favorites />
      <Meals />
      {showModal && <Modals />}
    </div>
  );
}

export default App;
