import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axiosInstance from "../api/axios";

function Home() {
  const [datas, setDatas] = useState([]);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await axiosInstance.get(
          "https://interview-plus.onrender.com/api/items"
        );
        console.log(response.data, " : dattas");
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
      <ToastContainer style={{ width: "40%" }} />
      <div className="">
        {datas.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.title} />
            <div className="product-details">
              <h2>{product.title}</h2>
              <p>{product.description}</p>
              <p>Price: ${product.price}</p>
              <p>
                Rating: {product.rating.rate} ({product.rating.count} reviews)
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
