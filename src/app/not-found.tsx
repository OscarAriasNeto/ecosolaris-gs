import React from "react";
import Link from "next/link";

const NotFound: React.FC = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50">
      <div className="text-center">
        <h1 className="text-5xl font-bold text-gray-800 mb-4">404</h1>
        <p className="text-lg text-gray-600 mb-6">
          Página não encontrada. O endereço que você tentou acessar não existe.
        </p>
        <Link
          href="/"
          className="bg-green-800 text-white px-4 py-2 rounded hover:bg-green-700"
        >
          Voltar para a Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
