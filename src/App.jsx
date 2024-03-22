/* eslint-disable react/no-unknown-property */
import { Route, Routes } from "react-router-dom";
import UserRouter from "./router/UserRouter";

function App() {
  return (
    <>
      <Routes>
        <Route path="/*" element={<UserRouter />}></Route>
      </Routes>
    </>
  );
}

export default App;
