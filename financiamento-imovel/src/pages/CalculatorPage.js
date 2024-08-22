import React from 'react';
import Header from '../components/Header';
import CalculatorForm from '../components/CalculatorForm';
import ResultsTable from '../components/ResultsTable';
import useFinanceCalculator from '../hooks/useFinanceCalculator'; // Importa o hook

const CalculatorPage = () => {
  const { results, calcularFinanciamento } = useFinanceCalculator();

  // Função chamada quando o formulário é submetido
  const handleCalculate = (dados) => {
    calcularFinanciamento(dados); // Usa o hook para calcular
  };

  return (
    <div>
      <Header />
      <main>
        <CalculatorForm onCalculate={handleCalculate} />
        <ResultsTable results={results} />
      </main>
    </div>
  );
};

export default CalculatorPage;
