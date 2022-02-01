import "./styles.css";
import { Route, Routes } from "react-router-dom";

import { Main } from "./Main";
import { next } from "./next";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/Main">
          <Main />
        </Route>
        <Route path="/next">
          <next />
        </Route>
      </Routes>
    </div>
  );
}
export default App;
