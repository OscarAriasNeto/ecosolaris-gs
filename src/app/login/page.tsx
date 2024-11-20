"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoggedIn(true);
    setTimeout(() => {
      router.push("/");
    }, 2000); // Redireciona para a página inicial após 2 segundos
  };

  return (
    <section className="min-h-screen bg-green-50 flex flex-col justify-center items-center px-4">
      {/* Mensagem de sucesso */}
      {isLoggedIn ? (
        <div className="bg-green-100 border border-green-400 text-green-700 px-6 py-4 rounded-md shadow-md text-center max-w-lg">
          <h2 className="text-2xl font-bold mb-4">Login realizado com sucesso!</h2>
          <p>Bem-vindo(a) de volta! Redirecionando...</p>
        </div>
      ) : (
        <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-3xl font-bold text-green-800 text-center mb-6">
            Entrar
          </h1>
          <p className="text-gray-600 text-center mb-8">
            Insira suas credenciais para acessar sua conta.
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Campo de e-mail */}
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

            {/* Campo de senha */}
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Senha
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                placeholder="••••••••"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
              />
            </div>

            {/* Botão de Login */}
            <button
              type="submit"
              className="w-full bg-green-800 text-white py-2 px-4 rounded-lg shadow-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
            >
              Entrar
            </button>
          </form>
        </div>
      )}
    </section>
  );
};

export default Login;
