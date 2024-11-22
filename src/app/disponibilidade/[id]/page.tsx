"use client";
import { useParams } from "next/navigation";
import React, { useState, useEffect } from "react";

interface Product {
  id: number;
  name: string;
  availability: string;
  voltage: string;
  price: string;
}

const ProductPage: React.FC = () => {
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);

  const { id } = useParams();

  useEffect(() => {
    if (!id) return;

    const fetchProduct = async () => {
      try {
        const response = await fetch(`http://localhost:8080/products/${id}`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (!response.ok) {
          throw new Error("Produto não encontrado");
        }

        const data = await response.json();
        setProduct(data);
      } catch (error) {
        console.error("Erro ao buscar o produto:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        <p className="text-gray-600 text-lg">Carregando produto...</p>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        <p className="text-red-600 text-lg">Produto não encontrado.</p>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-gray-50 py-12 px-4 mt-20">
      <div className="max-w-xl mx-auto bg-white rounded-lg shadow-lg p-8">
        <h1 className="text-3xl font-bold text-green-800 mb-6">
          {product.name}
        </h1>
        <div className="space-y-4">
          <p className="text-lg text-gray-600">
            <strong>Disponibilidade:</strong> {product.availability}
          </p>
          <p className="text-lg text-gray-600">
            <strong>Voltagem:</strong> {product.voltage}
          </p>
          <p className="text-lg text-gray-600">
            <strong>Preço:</strong> {product.price}
          </p>
        </div>
      </div>
    </main>
  );
};

export default ProductPage;
