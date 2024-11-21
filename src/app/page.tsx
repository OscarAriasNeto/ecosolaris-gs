export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Primeira seção: Bem-vindo */}
      <section className="h-screen  text-white flex items-center justify-center bg-homebackground bg-no-repeat bg-cover">
        <h1 className="text-4xl md:text-6xl font-bold text-center bg-black bg-opacity-45 p-2 rounded-full px-4">
          Bem vindo à EcoSolaris
        </h1>
      </section>

      {/* Segunda seção: Texto Comercial */}
      <section className="container mx-auto px-4 py-12 text-gray-800">
        <p className="text-xl md:text-2xl text-justify leading-relaxed mb-10">
          A EcoSolaris transforma luz solar em economia e sustentabilidade! Somos pioneiros em integrar tecnologia, design e eficiência energética por meio de soluções inovadoras que substituem os tradicionais painéis solares. Imagine telhas e janelas solares que produzem energia limpa enquanto complementam o visual de sua casa ou empresa. É isso que fazemos!
          <br /><br />
          Sabemos que o futuro exige mais sustentabilidade e eficiência, mas sem complicações. Por isso, nossos produtos são projetados para se adaptarem às suas necessidades: fáceis de instalar, acessíveis e capazes de gerar energia renovável de maneira prática e econômica. A substituição de telhas e janelas comuns por alternativas inteligentes é o primeiro passo para um mundo mais sustentável e uma conta de energia mais baixa.
          <br /><br />
          Além disso, nossos produtos são pensados para se integrar com harmonia a projetos arquitetônicos modernos e sofisticados. Queremos que você aproveite os benefícios da energia solar sem comprometer o estilo ou a funcionalidade de sua construção.
          <br /><br />
          Mas a EcoSolaris não é apenas tecnologia – é compromisso. Trabalhamos lado a lado com construtoras, arquitetos e empresas para garantir que nossos produtos atendam a diferentes estilos e necessidades. Oferecemos suporte total em todas as etapas, desde o planejamento até a manutenção, para que a transição para a energia solar seja simples e segura.
          <br /><br />
          Escolher a EcoSolaris é investir em um futuro mais verde, mais econômico e mais consciente. Chegou a hora de transformar a luz do sol em sua maior aliada. <strong>Seja parte dessa revolução energética!</strong>
        </p>
      </section>
    </main>
  );
}
