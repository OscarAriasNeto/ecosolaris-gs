import React from "react";

const Loading: React.FC = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-green-50">
      <div className="text-center">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-green-800 border-opacity-50 mb-6 mx-auto"></div>
        <p className="text-gray-700 text-xl">Carregando, por favor aguarde...</p>
      </div>
    </div>
  );
};

export default Loading;