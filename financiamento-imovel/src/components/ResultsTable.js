import React from 'react';
import '../styles/ResultsTable.css'; // Opcional: Importar o CSS para estilização

const ResultsTable = ({ results }) => {
  if (!results || results.length === 0) {
    return <p>Insira os dados acima e clique em "Calcular" para ver os resultados.</p>;
  }

  return (
    <div className="results-container">
      <h2>Resultados do Financiamento</h2>
      
      <div className="overview">
        <p><strong>Valor Financiado:</strong> R$ {results.valorFinanciado.toFixed(2)}</p>
        <p><strong>Total Pago:</strong> R$ {results.totalPago.toFixed(2)}</p>
        <p><strong>Total de Juros:</strong> R$ {results.totalJuros.toFixed(2)}</p>
      </div>

      <h3>Tabela de Amortização</h3>
      <table className="results-table">
        <thead>
          <tr>
            <th>Parcela</th>
            <th>Valor da Parcela (R$)</th>
            <th>Juros (R$)</th>
            <th>Amortização (R$)</th>
            <th>Saldo Devedor (R$)</th>
          </tr>
        </thead>
        <tbody>
          {results.parcelas.map((parcela, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{parcela.valorParcela.toFixed(2)}</td>
              <td>{parcela.juros.toFixed(2)}</td>
              <td>{parcela.amortizacao.toFixed(2)}</td>
              <td>{parcela.saldoDevedor.toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ResultsTable;
