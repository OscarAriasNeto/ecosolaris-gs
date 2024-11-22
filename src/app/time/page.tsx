import Link from 'next/link';
import React from 'react';

const Time: React.FC = () => {
  const team = [
    {
      name: "Oscar Arias Neto",
      RM: "Rm556936",
      email: "joao.silva@ecosolaris.com",
      image: "/oscar.png",
      linkedin: "https://www.linkedin.com/in/oscar-neto-b9aaab250/",
      github: "https://github.com/OscarAriasNeto"
    },
    {
      name: "Julia Martin Rebelles",
      RM: "Rm554516",
      email: "maria.oliveira@ecosolaris.com",
      image: "/julia.png",
      linkedin: "http://www.linkedin.com/in/julia-martins-rebelles-34b17a211",
      github: "https://github.com/JuliaRebelles05"
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
              <p className="text-gray-500">{member.RM}</p>
            </div>
            <div className='space-x-5'>
              <Link href={member.linkedin} className="text-blue-500 hover:underline ">
          Linkedin
          </Link>
          <Link href={member.github} className="text-blue-500 hover:underline">
          Github
          </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Time;
