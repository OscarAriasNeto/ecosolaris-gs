import Link from 'next/link';
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-green-800 text-white fixed top-0 w-full shadow-md z-50">
      <nav className="container mx-auto flex justify-between items-center py-4">
        <ul className="flex space-x-6">
          <li>
            <Link href="/" className="hover:text-gray-400">
              Home
            </Link>
          </li>
          <li>
            <Link href="/calculator" className="hover:text-gray-400">
              Calculadora/Economia
            </Link>
          </li>
          <li>
            <Link href="/team" className="hover:text-gray-400">
              Time
            </Link>
          </li>
          <li>
            <Link href="/register" className="hover:text-gray-400">
              Registrar
            </Link>
          </li>
          <li>
            <Link href="/login" className="hover:text-gray-400">
              Login
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
