import { useEffect, useState } from "react";
import axiosInstance from "../api/axios";
import { Outlet, useNavigate } from "react-router-dom";

function AuthGuard() {
  const [protect, setProtect] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    try {
      const isProtected = async () => {
        const response = await axiosInstance.get("/api/protected");
        if (response.status == 200) {
          setProtect(true);
        } else {
          return navigate("/userLogin");
        }
      };
      isProtected();
    } catch (err) {
      console.error(err);
    }
  }, []);
  return <>{protect && <Outlet />}</>;
}

export default AuthGuard;
