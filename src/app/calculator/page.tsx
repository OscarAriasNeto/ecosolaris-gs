"use client";
import { useState } from "react";

interface Panel {
  name: string;
  power: number; // Power in Watts per panel
}

const Calculator: React.FC = () => {
  const panels: Panel[] = [
    { name: "Modelo A", power: 300 },
    { name: "Modelo B", power: 400 },
    { name: "Modelo C", power: 500 },
  ];

  const regions = {
    "São Paulo - Capital": 4.2,
    Campinas: 4.5,
    "São José dos Campos": 4.7,
  };

  const [selectedPanel, setSelectedPanel] = useState<Panel>(panels[0]);
  const [selectedRegion, setSelectedRegion] = useState<string>(
    "São Paulo - Capital"
  );
  const [panelsCount, setPanelsCount] = useState<number>(0);
  const [energyProduced, setEnergyProduced] = useState<string | null>(null);

  const calculateEnergy = () => {
    const regionFactor = regions[selectedRegion]; // kWh/kW/day
    const totalPower = (selectedPanel.power / 1000) * panelsCount; // kW
    const annualEnergy = totalPower * regionFactor * 365; // kWh/year

    setEnergyProduced(annualEnergy.toFixed(2));
  };

  return (
    <section>
      <h1>Calculadora de Produção de Energia</h1>

      <div>
        <h2>Selecione o modelo do painel solar:</h2>
        {panels.map((panel) => (
          <label key={panel.name}>
            <input
              type="radio"
              name="panel"
              value={panel.name}
              checked={selectedPanel.name === panel.name}
              onChange={() => setSelectedPanel(panel)}
            />
            {panel.name} - {panel.power}W
          </label>
        ))}
      </div>

      <div>
        <h2>Selecione a região:</h2>
        <select
          value={selectedRegion}
          onChange={(e) => setSelectedRegion(e.target.value)}
        >
          {Object.keys(regions).map((region) => (
            <option key={region} value={region}>
              {region}
            </option>
          ))}
        </select>
      </div>

      <div>
        <h2>Quantidade de painéis:</h2>
        <input
          type="number"
          value={panelsCount}
          onChange={(e) => setPanelsCount(Number(e.target.value))}
        />
      </div>

      <button onClick={calculateEnergy}>Calcular Produção</button>
    </section>
  );
};

export default Calculator;
