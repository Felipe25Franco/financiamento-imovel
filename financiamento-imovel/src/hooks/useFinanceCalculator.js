import { useState } from 'react';

const useFinanceCalculator = () => {
  const [results, setResults] = useState(null);

  const calcularFinanciamento = ({ valorImovel, valorEntrada, parcelas, jurosAnuais }) => {
    const valorFinanciado = valorImovel - valorEntrada;
    const jurosMensais = jurosAnuais / 12 / 100;
    let saldoDevedor = valorFinanciado;
    let totalPago = 0;
    let totalJuros = 0;

    const parcelasArray = [];

    for (let i = 1; i <= parcelas; i++) {
      const juros = saldoDevedor * jurosMensais;
      const amortizacao = valorFinanciado / parcelas;
      const valorParcela = juros + amortizacao;

      saldoDevedor -= amortizacao;
      totalPago += valorParcela;
      totalJuros += juros;

      parcelasArray.push({
        valorParcela,
        juros,
        amortizacao,
        saldoDevedor
      });
    }

    const resultados = {
      valorFinanciado,
      totalPago,
      totalJuros,
      parcelas: parcelasArray
    };

    setResults(resultados);
  };

  return { results, calcularFinanciamento };
};

export default useFinanceCalculator;
