import axios from "axios";
import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";

const ListProducts = () => {
  const token = localStorage.getItem("token");
  const [data, setData] = useState([]);
  const API_PRODUCTOS = "http://89.116.25.43:3500/api/productos/listar";
  const handleProducts = async () => {
    await axios
      .get(API_PRODUCTOS, {
        headers: { Authorization: `bearer ${token}` },
      })
      .then((resp) => {
        console.log(resp);
        setData(resp.data.result);
      })
      .catch((error) => {
        if (error.response.status == 400) {
          Swal.fire("Información!", error.response.data.message, "error");
        } else if (error.response.status == 401) {
          Swal.fire("Información!", error.response.data.message, "error");
        } else {
          Swal.fire("Información!", "Ocurrio un error!", "error");
        }
      });
  };

  useEffect(() => {
    handleProducts();
  }, []);

  return (
    <div className="bg-[#906f4c] grid grid-cols-[repeat(auto-fill, minmax(1fr, 100px))] grid-cols-3-max gap-4 place-items-center my-4 select-none sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {data.map((result) => {
        return (
          <div
            key={result._id}
            className="text-bread3 text-3xl mb-3 bg-[#faf8e8] border-[2px] border-bread3 rounded-lg flex flex-col items-center justify-evenly w-[300px] h-[480px] transition-transform duration-300 ease-in hover:scale-105 hover:shadow-lg shadow-lg"
          >
            <div>
              <img
                src={result.imagen}
                alt={result.descripcion}
                className="w-56 h-auto"
              />
            </div>
            <div className="bg-bread2 p-1 rounded-lg">{result.descripcion}</div>
            <div className="bg-green-200 p-1 rounded-lg text-green-600 ">
              {"$" + result.valor + " pesos"}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ListProducts;
