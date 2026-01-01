"use client";

import { useEffect, useState } from "react";

export default function ProductsPage() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch products from API
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch("/api/products");
        const data = await res.json();

        console.log("Fetched products:", data); // Check the response

        // Handle different backend formats
        // If backend returns { products: [...] } use data.products
        // If backend returns array directly, use data
        const productArray = Array.isArray(data) ? data : data.products || [];
        setProducts(productArray);

        setLoading(false);
      } catch (error) {
        console.error("Failed to fetch products:", error);
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) return <p className="text-center mt-10">Loading products...</p>;

  if (!products.length)
    return <p className="text-center mt-10">No products available.</p>;

  return (
    <div className="max-w-6xl mx-auto p-6">
      {/* <h1 className="text-3xl font-bold mb-6 text-center text-indigo-600">Products</h1> */}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <div
            key={product._id}
            className="bg-white shadow-md rounded-lg p-4 flex flex-col"
          >
            <img
              src={product.image}
              alt={product.title}
              className="h-48 w-full object-cover rounded-md mb-4"
            />
            <h2 className="font-bold text-lg mb-2">Title : {product.title}</h2>
            <p className="text-gray-700 mb-2">Description : {product.description}</p>
            <p className="font-semibold  mb-2">Price : ${product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
