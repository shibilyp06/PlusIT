import { Route, Routes } from "react-router-dom";
import UserLogin from "../Components/UserLogin";
import UserSignup from "../Components/UserSignup";
import Home from "../pages/Home";
import UpdateProfile from "../Components/UpdateProfile";

function UserRouter() {
  return (
    <>
      <Routes>
        <Route path="/userLogin" element={<UserLogin />}></Route>
        <Route path="/userSignup" element={<UserSignup />}></Route>
        <Route path="/Home" element={<Home />}></Route>
        <Route path="/userUpdate" element={<UpdateProfile/>} ></Route>
      </Routes>
    </>
  );
}

export default UserRouter;
