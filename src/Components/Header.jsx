import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
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
            <li>
              <a href="#" className="hover:text-gray-300">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
