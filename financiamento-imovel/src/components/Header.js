import React from 'react';
import '../styles/Header'; // Opcional: Importar o CSS para estilização

const Header = () => {
  return (
    <header className="app-header">
      <h1>Calculadora de Financiamento Imobiliário</h1>
      <p>Faça simulações precisas de financiamentos de imóveis usando os métodos SAC e Tabela Price.</p>
    </header>
  );
};

export default Header;
