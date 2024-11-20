"use client";
import { useState } from "react";

interface Panel {
  name: string;
  power: number;
}

const Economia: React.FC = () => {
  const panels: Panel[] = [
    { name: "Canadian Solar HiKu", power: 330 },
    { name: "JA Solar DeepBlue", power: 400 },
    { name: "Trina Solar Vertex", power: 450 },
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
    const regionFactor = regions[selectedRegion];
    const totalPower = (selectedPanel.power / 1000) * panelsCount;
    const annualEnergy = totalPower * regionFactor * 30;

    setEnergyProduced(annualEnergy.toFixed(2));
  };

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Texto introdutório */}
      <section className="container mx-auto px-4 py-12 text-gray-800">
        <h1 className="text-4xl font-bold text-center mb-8">
          Economize e gere energia com a EcoSolaris!
        </h1>
        <p className="text-lg leading-relaxed text-justify">
          A EcoSolaris oferece uma linha de painéis solares de última geração, pensada para atender às suas necessidades de economia e sustentabilidade. Com opções como o{" "}
          <strong>Canadian Solar HiKu</strong>, que combina eficiência e durabilidade, o inovador{" "}
          <strong>JA Solar DeepBlue</strong>, projetado para maior geração de energia mesmo em dias nublados, e o{" "}
          <strong>Trina Solar Vertex</strong>, com potência impressionante para projetos mais robustos, você tem a garantia de estar escolhendo o melhor para sua casa ou empresa.
          <br />
          <br />
          Nossos painéis não apenas geram energia limpa, mas também reduzem significativamente sua conta de energia, contribuindo para um planeta mais verde. Seja para residências ou negócios, a energia solar é uma solução inteligente e lucrativa. Experimente a liberdade de gerar sua própria energia e descubra o potencial de economizar enquanto protege o meio ambiente.
          <br />
          <br />
          <strong>EcoSolaris – Onde economia e sustentabilidade se encontram.</strong>
        </p>
      </section>

      {/* Calculadora */}
      <section className="bg-white py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold
          text-center mb-6">Calculadora de Produção de Energia</h2>
          <p className="text-lg text-gray-600 text-center mb-8">
            Descubra o quanto você pode economizar com nossos painéis solares!
          </p>

          <div className="bg-gray-100 p-8 rounded-lg shadow-lg">
            {/* Seleção do modelo */}
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-3">
                Selecione o modelo do painel solar:
              </h3>
              <div className="space-y-4">
                {panels.map((panel) => (
                  <label
                    key={panel.name}
                    className="flex items-center space-x-4 cursor-pointer"
                  >
                    <input
                      type="radio"
                      name="panel"
                      value={panel.name}
                      checked={selectedPanel.name === panel.name}
                      onChange={() => setSelectedPanel(panel)}
                      className="h-4 w-4 text-green-600 focus:ring focus:ring-green-300"
                    />
                    <span>
                      {panel.name} - <strong>{panel.power}W</strong>
                    </span>
                  </label>
                ))}
              </div>
            </div>

            {/* Seleção da região */}
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-3">Selecione a região:</h3>
              <select
                value={selectedRegion}
                onChange={(e) => setSelectedRegion(e.target.value)}
                className="w-full p-3 rounded border border-gray-300 focus:outline-none focus:ring focus:ring-green-300"
              >
                {Object.keys(regions).map((region) => (
                  <option key={region} value={region}>
                    {region}
                  </option>
                ))}
              </select>
            </div>

            {/* Quantidade de painéis */}
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-3">
                Quantidade de painéis:
              </h3>
              <input
                type="number"
                value={panelsCount}
                onChange={(e) => setPanelsCount(Number(e.target.value))}
                className="w-full p-3 rounded border border-gray-300 focus:outline-none focus:ring focus:ring-green-300"
              />
            </div>

            {/* Botão de calcular */}
            <div className="text-center">
              <button
                onClick={calculateEnergy}
                className="bg-green-600 text-white py-3 px-6 rounded hover:bg-green-700 focus:outline-none focus:ring focus:ring-green-300"
              >
                Calcular Produção
              </button>
            </div>

            {/* Resultado */}
            {energyProduced && (
              <div className="mt-6 text-center">
                <p className="text-lg">
                  Produção mensal estimada:{" "}
                  <strong className="text-green-600">{energyProduced} kWh</strong>
                </p>
              </div>
            )}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Economia;
