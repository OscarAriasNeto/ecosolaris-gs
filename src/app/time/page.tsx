import React from 'react';

const Time: React.FC = () => {
  const team = [
    {
      name: "João Silva",
      role: "Engenheiro",
      email: "joao.silva@ecosolaris.com",
      image: "/path/to/image1.jpg",
    },
    {
      name: "Maria Oliveira",
      role: "Especialista em Vendas",
      email: "maria.oliveira@ecosolaris.com",
      image: "/path/to/image2.jpg",
    },
    {
      name: "Carlos Santos",
      role: "Suporte Técnico",
      email: "carlos.santos@ecosolaris.com",
      image: "/path/to/image3.jpg",
    },
  ];

  return (
    <section className="min-h-screen bg-gray-50 py-12">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-12 mt-10">
        Conheça nossa equipe
      </h1>
      <div className="container mx-auto flex justify-center items-center space-x-12">
        {team.map((member, index) => (
          <div
            key={index}
            className="flex flex-col items-center space-y-4 text-center"
          >
            {/* Foto em formato de esfera */}
            <div
              className="w-40 h-40 rounded-full bg-gray-200 overflow-hidden shadow-lg"
              style={{
                backgroundImage: `url(${member.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            ></div>

            {/* Informações do integrante */}
            <div>
              <h2 className="text-lg font-semibold text-gray-700">
                {member.name}
              </h2>
              <p className="text-gray-500">{member.role}</p>
              <a
                href={`mailto:${member.email}`}
                className="text-blue-500 hover:underline"
              >
                {member.email}
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Time;
