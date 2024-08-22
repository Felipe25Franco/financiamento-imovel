import React, { useState } from 'react';
import '../styles/CalculatorForm'; // Opcional: Importar o CSS para estilização

const CalculatorForm = ({ onCalculate }) => {
  // Estados para armazenar os valores dos inputs
  const [valorImovel, setValorImovel] = useState('');
  const [valorEntrada, setValorEntrada] = useState('');
  const [parcelas, setParcelas] = useState('');
  const [jurosAnuais, setJurosAnuais] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validar se todos os campos estão preenchidos
    if (!valorImovel || !valorEntrada || !parcelas || !jurosAnuais) {
      alert('Por favor, preencha todos os campos.');
      return;
    }

    // Passar os dados para o componente pai (ex: App.js) através da prop onCalculate
    onCalculate({
      valorImovel: parseFloat(valorImovel),
      valorEntrada: parseFloat(valorEntrada),
      parcelas: parseInt(parcelas),
      jurosAnuais: parseFloat(jurosAnuais)
    });

    // Limpar os campos do formulário (opcional)
    setValorImovel('');
    setValorEntrada('');
    setParcelas('');
    setJurosAnuais('');
  };

  return (
    <form className="calculator-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="valorImovel">Valor do Imóvel:</label>
        <input
          type="number"
          id="valorImovel"
          value={valorImovel}
          onChange={(e) => setValorImovel(e.target.value)}
          placeholder="Ex: 300000"
        />
      </div>

      <div className="form-group">
        <label htmlFor="valorEntrada">Valor da Entrada:</label>
        <input
          type="number"
          id="valorEntrada"
          value={valorEntrada}
          onChange={(e) => setValorEntrada(e.target.value)}
          placeholder="Ex: 60000"
        />
      </div>

      <div className="form-group">
        <label htmlFor="parcelas">Quantidade de Parcelas (meses):</label>
        <input
          type="number"
          id="parcelas"
          value={parcelas}
          onChange={(e) => setParcelas(e.target.value)}
          placeholder="Ex: 240"
        />
      </div>

      <div className="form-group">
        <label htmlFor="jurosAnuais">Juros Anuais (%):</label>
        <input
          type="number"
          id="jurosAnuais"
          value={jurosAnuais}
          onChange={(e) => setJurosAnuais(e.target.value)}
          placeholder="Ex: 8"
        />
      </div>

      <button type="submit" className="calculate-button">Calcular</button>
    </form>
  );
};

export default CalculatorForm;
