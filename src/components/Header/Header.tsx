import Link from 'next/link';
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-green-800 text-white fixed top-0 w-full shadow-md z-50 mx-auto">
      <nav className="container w-full mx-auto flex justify-between items-center py-4">
        <ul className="flex space-x-6">
          <li>
          <Link href="/admin" className="hover:text-orange-400 transition-colors">
              Admin
            </Link>
          </li>
          <li>
            <Link href="/" className="hover:text-orange-400 transition-colors">
              Home
            </Link>
          </li>
          <li>
            <Link href="/economia" className="hover:text-orange-400 transition-colors">
              Economia
            </Link>
          </li>
          <li>
            <Link href="/time" className="hover:text-orange-400 transition-colors">
              Time
            </Link>
          </li>
          <li>
            <Link href="/registrar" className="hover:text-orange-400 transition-colors">
              Registrar
            </Link>
          </li>
          <li>
            <Link href="/login" className="hover:text-orange-400 transition-colors">
              Login
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
