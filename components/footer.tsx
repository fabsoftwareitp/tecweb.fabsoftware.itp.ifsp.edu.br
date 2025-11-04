import Image from "next/image";

export default function Footer() {
  return (
    <footer className="w-full mt-16">
      <div className="w-full flex items-center justify-center">
        <div className="w-full lg:max-w-[90vw] border-2 lg:rounded-2xl bg-white border-primary px-6 py-10">
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-3">
                <Image
                  src="/ifsp/ifsp1.png"
                  alt="IFSP"
                  width={56}
                  height={56}
                />
                <div className="leading-tight">
                  <p className="text-primary font-abril-fatface italic text-xl">
                    TSI
                  </p>
                  <p className="text-neutral-600 text-sm">
                    IFSP Campus Itapetininga
                  </p>
                </div>
              </div>
              <p className="text-sm text-neutral-700">
                Tecnologia em Sistemas para Internet. Formação sólida com foco
                em desenvolvimento web, infraestrutura e prática de mercado.
              </p>
            </div>

            <div className="flex flex-col gap-2">
              <p className="text-neutral-900 font-medium">Navegação</p>
              <nav className="flex flex-col gap-1 text-sm text-neutral-700">
                <a href="#sobre" className="hover:text-primary">
                  Sobre
                </a>
                <a href="#projetos" className="hover:text-primary">
                  Projetos
                </a>
                <a href="#docentes" className="hover:text-primary">
                  Docentes
                </a>
                <a href="#disciplinas" className="hover:text-primary">
                  Disciplinas
                </a>
                <a href="#estrutura" className="hover:text-primary">
                  Estrutura
                </a>
              </nav>
            </div>

            <div className="flex flex-col gap-2">
              <p className="text-neutral-900 font-medium">Contato</p>
              <ul className="text-sm text-neutral-700">
                <li>Av. João Olímpio de Oliveira, 1561</li>
                <li>Vila Ophelia, Itapetininga - SP</li>
                <li>CEP 18202-000</li>
                <li className="mt-2">
                  <a
                    href="mailto:contato@ifsp.edu.br"
                    className="hover:text-primary"
                  >
                    contato@ifsp.edu.br
                  </a>
                </li>
              </ul>
            </div>

            <div className="flex flex-col gap-2">
              <p className="text-neutral-900 font-medium">Créditos</p>
              <p className="text-sm text-neutral-700">
                Site desenvolvido por{" "}
                <a
                  href="https://github.com/GustavoCardilho"
                  target="_blank"
                  rel="noreferrer"
                  className="text-primary hover:underline"
                >
                  @GustavoCardilho
                </a>
                .
              </p>
              <p className="text-xs text-neutral-500">
                Conteúdos e imagens pertencem ao IFSP Campus Itapetininga.
              </p>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-neutral-200 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-xs text-neutral-600">
              © {new Date().getFullYear()} IFSP Campus Itapetininga — Tecnologia
              em Sistemas para Internet
            </p>
            <div className="flex items-center gap-4 text-xs text-neutral-600">
              <a href="#acessibilidade" className="hover:text-primary">
                Acessibilidade
              </a>
              <a href="#privacidade" className="hover:text-primary">
                Privacidade
              </a>
              <a href="#contato" className="hover:text-primary">
                Contato
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
