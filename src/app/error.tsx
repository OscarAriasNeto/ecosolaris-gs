"use client";
import React from "react";

interface ErrorProps {
  error: Error;
  reset: () => void;
}

const Error: React.FC<ErrorProps> = ({ error, reset }) => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-red-50">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-red-800 mb-4">
          Ocorreu um erro!
        </h1>
        <p className="text-gray-700 mb-6">{error.message}</p>
        <button
          onClick={reset}
          className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
        >
          Tentar novamente
        </button>
      </div>
    </div>
  );
};

export default Error;
