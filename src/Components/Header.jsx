
import { Link, useNavigate } from "react-router-dom";
import axiosInstance from "../api/axios";
import { toast } from "react-toastify";

const Header = () => {
    const navigate = useNavigate()
  const deleteUser = async () => {
    try {
      const responce = await axiosInstance.delete(
        "api/delete-user"
      );
      const deleted = responce.data 
      console.log(deleted , " loo ");
      if(deleted){
        toast.error("Your accound has deleted  Signup ")
        setTimeout(() => {
            navigate("/userSignup")
        }, 3000);
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <header className="bg-gray-800 text-white py-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">My Store</h1>
        <nav>
          <ul className="flex space-x-4">
            <Link to="/Home">
              <li>
                <a href="#" className="hover:text-gray-300">
                  Home
                </a>
              </li>
            </Link>

            <Link to="/userUpdate">
              <li>
                <a href="#" className="hover:text-gray-300">
                  Update Profile
                </a>
              </li>
            </Link>
            <li onClick={deleteUser}>
              <a href="#" className="hover:text-gray-300">
                Delete
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
