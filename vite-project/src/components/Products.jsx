import axios from "axios";
import React, { useEffect, useState } from "react";

function Products() {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 12;
  const [totalRecords, setTotalRecords] = useState(0);
  const totalPages = Math.ceil(totalRecords / recordsPerPage);
  useEffect(() => {
    async function getProducts() {
      try {
        const response = await axios.get(`https://dummyjson.com/products?limit=${recordsPerPage}&skip=${(currentPage - 1) * recordsPerPage}`);
        setProducts(response.data.products);
        setTotalRecords(response.data.total);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    }
    getProducts();
  }, [currentPage]);
  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(pre => pre + 1);
    }
  };
  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(pre => pre - 1);
    }
  };


  return (
    <div className="container mt-4">
      <h1>Products</h1>
      
      <div className="row mt-3">
        {products.map((product) => (
          <div className="col-lg-4 h-100" key={product.id}>
            <div className="card mt-3">
              <img src={product.thumbnail} className="card-img-top" alt={product.title} />
              <div className="card-body">
                <h5 className="card-title">{product.title}</h5>
                <p className="card-text">{product.description}</p>
                <p className="d-flex justify-content-between">
                  <div>${product.price}</div>
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>


      <div className="d-flex justify-content-between mb-5 mt-4">
        <button className="btn btn-primary" onClick={handlePreviousPage} disabled={currentPage === 1}>
          Previous
        </button>
        <span>Page {currentPage} of {totalPages}</span>
        <button className="btn btn-primary" onClick={handleNextPage} disabled={currentPage === totalPages}>
          Next
        </button>
      </div>
    </div>
  );
}

export default Products;
