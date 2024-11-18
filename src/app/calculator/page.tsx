import { useState } from "react";

const Calculator: React.FC = () => {
    const [panels, setPanels] = useState<number>(0);
    const [economy, setEconomy] = useState<string | null>(null);
  
    const calculateEconomy = async () => {
      try {
        const response = await axios.post('https://sua-api.com/calculate', { panels });
        setEconomy(response.data.economy);
      } catch (error) {
        console.error('Erro ao calcular economia:', error);
      }
    };
  
    return (
      <section>
        <h1>Calculadora de Economia</h1>
        <label>
          Quantidade de painéis:
          <input
            type="number"
            value={panels}
            onChange={(e) => setPanels(Number(e.target.value))}
          />
        </label>
        <button onClick={calculateEconomy}>Calcular</button>
        {economy && <p>Economia estimada: {economy}</p>}
      </section>
    );
  };
  
  export default Calculator;
  