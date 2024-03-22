import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axiosInstance from "../api/axios";
import Header from "../Components/Header";

function Home() {
  const [datas, setDatas] = useState([]);

  useEffect(() => {
    toast.success("Welcome Home User");
    const fetchItems = async () => {
      try {
        const response = await axiosInstance.get("/api/items");
        setDatas(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
        toast.error("Failed to fetch data. Please try again later.");
      }
    };
    fetchItems();
  }, []);

  return (
    <div>
      <Header />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 justify-center m-9">
        {datas.map((product) => (
         <div
         key={product.id}
         className="max-w-xs m-4 rounded-lg overflow-hidden shadow-md bg-white hover:shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105"
       >
         <img
           src={product.image}
           alt={product.title}
           className="w-full h-64 "
         />
         <div className="p-4">
           <h2 className="text-xl font-semibold text-gray-800 mb-2">
             {product.title}
           </h2>
           <p className="text-sm text-gray-600 mb-4">{product.description}</p>
           <div className="flex justify-between items-center">
             <p className="text-lg text-gray-700 font-bold">${product.price}</p>
             <div className="flex items-center">
               <svg
                 className="w-4 h-4 fill-current text-yellow-500 mr-1"
                 viewBox="0 0 20 20"
               >
                 <path d="M10 1L12.2456 6.47217L18.2456 7.47217L13.2456 11.4722L14.7456 17.4722L10 14.9722L5.25441 17.4722L6.75441 11.4722L1.75441 7.47217L7.75441 6.47217L10 1Z" />
               </svg>
               <p className="text-sm text-gray-600">
                 Rating: {product.rating.rate} ({product.rating.count} reviews)
               </p>
             </div>
           </div>
         </div>
       </div>
       
        ))}
      </div>
    </div>
  );
}

export default Home;
