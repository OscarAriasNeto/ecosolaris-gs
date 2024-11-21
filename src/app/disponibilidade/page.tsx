"use client";
import React, { useState, useEffect } from "react";

interface Product {
  name: string;
  availability: string;
  voltage: string;
  price: string;
  id: number;
}

const Disponibilidade: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);

  // Simulação de dados vindo de um banco de dados
  useEffect(() => {
    // Substitua pelo fetch de sua API/banco
    const fetchProducts = async () => {
      const mockData: Product[] = [
        {
          name: "Canadian Solar HiKu",
          availability: "Em estoque",
          voltage: "330W",
          price: "R$ 1.200,00",
          id: 1,
        },
        {
          name: "JA Solar DeepBlue",
          availability: "Sob encomenda",
          voltage: "400W",
          price: "R$ 1.500,00",
          id: 2,
        },
        {
          name: "Trina Solar Vertex",
          availability: "Esgotado",
          voltage: "450W",
          price: "R$ 1.800,00",
          id: 3,
        },
      ];
      setProducts(mockData);
    };

    fetchProducts();
  }, []);

  return (
    <main className="min-h-screen bg-gray-50 py-12 px-4">
      <h1 className="text-4xl font-bold text-green-800 text-center mb-8">
        Disponibilidade dos nossos produtos
      </h1>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {products.map((product, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-lg p-6 text-center"
          >
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              {product.name}
            </h2>
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
        ))}
      </div>
    </main>
  );
};

export default Disponibilidade;