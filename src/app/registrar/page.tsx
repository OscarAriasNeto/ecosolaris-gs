"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const Registrar: React.FC = () => {
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [isRegistered, setIsRegistered] = useState(false);
  
  
  const router = useRouter();
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsRegistered(true);
    setTimeout(() => {
      router.push("/")
    }, 2000);
  };
  return (
    <section className="min-h-screen bg-green-50 flex flex-col justify-center items-center px-4">
      {isRegistered ? (
        <div className="bg-green-100 border border-green-400 text-green-700 px-6 py-4 rounded-md shadow-md text-center max-w-lg">
          <h2 className="text-2xl font-bold mb-4">Registro bem-sucedido!</h2>
          <p>Obrigado por se registrar! Entraremos em contato em breve.</p>
        </div>
      ) : (
        <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-3xl font-bold text-green-800 text-center mb-6">
            Registrar-se
          </h1>
          <p className="text-gray-600 text-center mb-8">
            Preencha as informações abaixo para começar sua jornada com a
            EcoSolaris.
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                E-mail
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="seuemail@exemplo.com"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
              />
            </div>

            <div>
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-gray-700"
              >
                Telefone
              </label>
              <input
                type="tel"
                id="phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
                placeholder="(XX) XXXXX-XXXX"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-green-800 text-white py-2 px-4 rounded-lg shadow-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
            >
              Registrar
            </button>
          </form>
        </div>
      )}
    </section>
  );
};

export default Registrar;
