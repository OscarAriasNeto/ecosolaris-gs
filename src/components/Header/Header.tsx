import Link from 'next/link';
import React from 'react';

const Header: React.FC = () => {
    return(
  <header>
    <nav>
      <ul>
        <li><Link href="/">Home</Link></li>
        <li><Link href="/products">Produtos</Link></li>
        <li><Link href="/calculator">Calculadora/Economia</Link></li>
        <li><Link href="/team">Equipe</Link></li>
      </ul>
    </nav>
  </header>
);
}
export default Header;
