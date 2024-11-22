"use client";
import React, { useState, useEffect } from "react";

interface Product {
  id: number;
  name: string;
  availability: string;
  voltage: string;
  price: string;
}

const Admin: React.FC = () => {
  const [form, setForm] = useState<Partial<Product>>({});
  const [editingId, setEditingId] = useState<number | null>(null);

  // Função para carregar produtos existentes (simulação de dados iniciais)
  const [products, setProducts] = useState<Product[]>([]);

  // Simulação de dados vindo de um banco de dados
  useEffect(() => {
    // Substitua pelo fetch de sua API/banco
    const fetchProducts = async () => {
      try {
        const response = await fetch('/api/produtos');
        const data =  await response.json()
        console.log("data", data)
        setProducts(data);
    } catch (error) {
        console.log(error)
    }
  };

    
    fetchProducts();
  }, []);

  // Função para lidar com o envio do formulário
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (editingId) {
      // Atualiza um produto existente
      const updatedProducts = products.map((product) =>
        product.id === editingId ? { ...product, ...form } : product
      );
      setProducts(updatedProducts);
      setEditingId(null);
    } else {
      // Cria um novo produto
      const newProduct: Product = {
        id: Date.now(),
        name: form.name || "",
        availability: form.availability || "",
        voltage: form.voltage || "",
        price: form.price || "",
      };
      setProducts([...products, newProduct]);
    }

    setForm({});
  };

  // Função para excluir um produto
  const handleDelete = async (id: number) => {
    const filteredProducts = products.filter((product) => product.id !== id);
    setProducts(filteredProducts);
  };

  // Função para editar um produto
  const handleEdit = (product: Product) => {
    setForm(product);
    setEditingId(product.id);
  };

  return (
    <main className="min-h-screen bg-gray-50 py-12 px-4">
      <h1 className="text-4xl font-bold text-green-800 text-center mb-8 mt-10">
        Administração de Produtos
      </h1>

      {/* Formulário de Criação/Edição */}
      <section className="max-w-xl mx-auto bg-white rounded-lg shadow-md p-6 mb-12">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">
          {editingId ? "Editar Produto" : "Adicionar Novo Produto"}
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Nome
            </label>
            <input
              type="text"
              id="name"
              value={form.name || ""}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              required
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
            />
          </div>

          <div>
            <label
              htmlFor="availability"
              className="block text-sm font-medium text-gray-700"
            >
              Disponibilidade
            </label>
            <input
              type="text"
              id="availability"
              value={form.availability || ""}
              onChange={(e) =>
                setForm({ ...form, availability: e.target.value })
              }
              required
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
            />
          </div>

          <div>
            <label
              htmlFor="voltage"
              className="block text-sm font-medium text-gray-700"
            >
              Voltagem
            </label>
            <input
              type="text"
              id="voltage"
              value={form.voltage || ""}
              onChange={(e) => setForm({ ...form, voltage: e.target.value })}
              required
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
            />
          </div>

          <div>
            <label
              htmlFor="price"
              className="block text-sm font-medium text-gray-700"
            >
              Preço
            </label>
            <input
              type="text"
              id="price"
              value={form.price || ""}
              onChange={(e) => setForm({ ...form, price: e.target.value })}
              required
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-green-800 text-white py-2 px-4 rounded-lg shadow-md hover:bg-green-700 focus:outline-none focus:ring focus:ring-green-500 focus:ring-opacity-50"
          >
            {editingId ? "Salvar Alterações" : "Adicionar Produto"}
          </button>
        </form>
      </section>

      {/* Lista de Produtos */}
      <section className="container mx-auto">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Lista de Produtos
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white shadow-md rounded-lg p-6 text-center mb-10"
            >
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                {product.name}
              </h3>
              <p className="text-gray-600">
                <strong>Disponibilidade:</strong> {product.availability}
              </p>
              <p className="text-gray-600">
                <strong>Voltagem:</strong> {product.voltage + "W"}
              </p>
              <p className="text-gray-600">
                <strong>Preço:</strong> {product.price}
              </p>
              <div className="flex justify-center space-x-4 mt-4">
                <button
                  onClick={() => handleEdit(product)}
                  className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
                >
                  Editar
                </button>
                <button
                  onClick={() => handleDelete(product.id)}
                  className="bg-red-600 text-white py-2 px-4 rounded hover:bg-red-700"
                >
                  Excluir
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Admin;
