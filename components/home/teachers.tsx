import Image from "next/image";
import { CometCard } from "../ui/comet-card";
import Text from "../ui/text";

export const Teachers = () => {
  const teachers = [
    {
      name: "Gerson Nunho Carriel",
      description: "Professor",
      about:
        "Doutorando em Processos Tecnológicos pela Universidade de Sorocaba, possui graduação em Análise de Sistemas pela Universidade de Sorocaba (1999) e mestrado em Ciência da Computação pela Universidade Metodista de Piracicaba (2008).",
      image:
        "https://servicosweb.cnpq.br/wspessoa/servletrecuperafoto?tipo=1&id=K4592760T3",
    },
    {
      name: "Anderson Bernardo de Almeida",
      description: "Professor",
      about:
        "Possui graduação em Tecnologia em Análise e Desenvolvimento de Sistemas pela Faculdade de Tecnologia de Itapetininga e Licenciatura em Matemática pela Associação de Ensino de Itapetininga.",
      image:
        "https://servicosweb.cnpq.br/wspessoa/servletrecuperafoto?tipo=1&id=K8491521J2",
    },
    {
      name: "Flavio Mania",
      description: "Professor",
      about:
        "Possui graduação em Ciência da Computação pela Universidade Paulista (2001).",
      image:
        "https://servicosweb.cnpq.br/wspessoa/servletrecuperafoto?tipo=1&id=K4315280D6",
    },
    {
      name: "Wilton Moreira Júnior",
      description: "Professor",
      about:
        "Possui graduação em pela Associação de Ensino de Itapetininga (2006), Especialização em Tecnologia e Desenvolvimento de Sistemas pelo Senac Sorocaba, mestrado em Ciência da Computação pela Universidade Federal de São Carlos (2015).",
      image:
        "https://servicosweb.cnpq.br/wspessoa/servletrecuperafoto?tipo=1&id=K4325297A1",
    },
    {
      name: "Eline Faliane Welter",
      description: "Professora",
      about:
        "Possui graduação em Sistemas de Informação pela Faculdade de Ciências Contábeis de Itapetininga e mestrado em Ciência da Computação pela UFSCar Sorocaba.",
      image:
        "https://servicosweb.cnpq.br/wspessoa/servletrecuperafoto?tipo=1&id=K4306412E3",
    },
    {
      name: "Rafael de Almeida Brochado",
      description: "Professor",
      about:
        "Mestre em Tecnologia pela UNICAMP, na área de Sistemas de Informação e Comunicação (2021). Possui especialização em Informática Aplicada à Educação pelo Instituto Federal de São Paulo (2017) e em Gestão de Ensino a Distância pela Universidade Federal Fluminense (2013), graduação em Informática para Gestão de Negócios - Fatec Itapetininga (2012).",
      image:
        "https://servicosweb.cnpq.br/wspessoa/servletrecuperafoto?tipo=1&id=K4056502J6",
    },
    {
      name: "Ramiro Tadeu Wisnieski",
      description: "Professor",
      about:
        "Possui graduação em Análise e desenvolvimento de Sistemas pelo Instituto Federal de Educação, Ciência e Tecnologia de São Paulo (IFSP). -Especialista em Educação à Distância (FTC).",
      image:
        "https://servicosweb.cnpq.br/wspessoa/servletrecuperafoto?tipo=1&id=K4206858U8",
    },

    {
      name: "Renato Franchi Lopes dos Santos",
      description: "Professor",
      about:
        "Especialista em Gestão Pública. Mestre em Ciências da Educação pela Universidad Americana. Doutorando em Ciências da Educação pela Universidad Nacional de Rosário.",
      image:
        "https://servicosweb.cnpq.br/wspessoa/servletrecuperafoto?tipo=1&id=K4292427H7",
    },
    {
      name: "Robson João Gregório Rodrigues",
      description: "Professor",
      about:
        "Possui Mestrado em Tecnologia - FT Unicamp, Especialização em Engenharia de Sistemas - ESAB,graduação em TECNOLOGIA DA INFORMATICA - Fatec Indústria de Nutrição e Saúde Animal (2011).",
      image:
        "https://servicosweb.cnpq.br/wspessoa/servletrecuperafoto?tipo=1&id=K4346010A2",
    },
    {
      name: "Danilo Camargo Bueno",
      description: "Professor",
      about:
        "Possui graduação em Bacharelado em Informática pela Universidade Estadual de Maringá (2014) e mestrado em Ciência da Computação pela Universidade Federal de São Carlos (2017).",
      image:
        "https://servicosweb.cnpq.br/wspessoa/servletrecuperafoto?tipo=1&id=K4456721T7",
    },
    {
      name: "Carlos Henrique da Silva Santos",
      description: "Professor",
      about:
        "Possui graduação em Tecnologia em Informática pela Universidade Estadual de Campinas (2003), mestrado em Engenharia Elétrica pela Universidade Estadual de Campinas (2005) e doutorado em Engenharia Elétrica pela Universidade Estadual de Campinas (2010).",
      image:
        "https://servicosweb.cnpq.br/wspessoa/servletrecuperafoto?tipo=1&id=K4774136Y3",
    },
  ];

  const sortFigure = [
    "/collage/fig3.svg",
    "/collage/fig1.svg",
    "/collage/fig5.svg",
    "/collage/fig6.svg",
    "/collage/fig7.svg",
    "/collage/fig8.svg",
    "/collage/fig9.svg",
    "/collage/fig10.svg",
  ];

  return (
    <>
      <div className="w-full items-center justify-center flex">
        <Text
          text="Docentes"
          className="text-4xl font-bold"
          spanClassName="text-7xl"
        />
      </div>

      <div className="flex items-center justify-center w-full">
        <div className="max-w-[1200px] grid grid-cols-3 items-start justify-center w-full flex-wrap gap-12">
          {teachers.map((teacher) => (
            <div className="w-fit" key={teacher.name}>
              <CometCard key={teacher.name}>
                <button
                  type="button"
                  className="flex w-80 border  border-primary flex-col items-stretch rounded-[16px]  bg-white p-2   md:p-4"
                  aria-label="View invite F7RA"
                  style={{
                    transformStyle: "preserve-3d",
                    transform: "none",
                    opacity: 1,
                  }}
                >
                  <div className="mx-2 flex-1">
                    <div className="relative mt-2 h-[250px] w-full">
                      <Image
                        loading="lazy"
                        className="absolute inset-0 h-full w-full rounded-[16px] bg-secondary  object-cover contrast-75"
                        alt="Invite background"
                        src={teacher.image}
                        width={500}
                        height={500}
                        style={{
                          boxShadow: "rgba(0, 0, 0, 0.05) 0px 5px 6px 0px",
                          opacity: 1,
                        }}
                      />
                      <Image
                        src={
                          sortFigure[
                            Math.floor(Math.random() * sortFigure.length)
                          ]
                        }
                        alt="Teacher"
                        width={50}
                        height={50}
                        className="absolute w-[50px] h-[50px] inset-0 rounded-[16px]  contrast-75 top-[-20px] left-[-20px] rotate-[0deg]"
                      />
                      <Image
                        src={
                          sortFigure[
                            Math.floor(Math.random() * sortFigure.length)
                          ]
                        }
                        alt="Teacher"
                        width={50}
                        height={50}
                        className="absolute w-[50px] h-[50px]  rounded-[16px]  contrast-75 bottom-[-20px] right-[-20px] rotate-[0deg]"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <div className="mt-2 flex flex-shrink-0 items-center justify-between px-1 font-mono text-[#0f611c]">
                      <div className="text-xs font-bold ">{teacher.name}</div>
                      <div className="text-xs opacity-50">
                        {teacher.description}
                      </div>
                    </div>
                    <div className="text-xs text-justify p-4 bg-neutral-100 border border-primary rounded-lg mt-2">
                      {teacher.about}
                    </div>
                  </div>
                </button>
              </CometCard>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
