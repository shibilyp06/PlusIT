import { useEffect, useState } from "react";
import axiosInstance from "../api/axios";
import { Outlet, useNavigate } from "react-router-dom";

function AuthGuard() {
  const [protect, setProtect] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    const isProtected = async () => {
      try {
        const response = await axiosInstance.get("/api/protected");
        console.log(response);
        if (response.status == 200) {
          setProtect(true);
        }
      } catch (err) {
        if (err.response && err.response.status === 400) {
          navigate("/userLogin");
        }
        console.error(err);
      }
    };
    isProtected();
  }, []);
  return <>{protect && <Outlet />}</>;
}

export default AuthGuard;
