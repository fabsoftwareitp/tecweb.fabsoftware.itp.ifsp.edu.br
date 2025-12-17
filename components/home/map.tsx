import Text from "../ui/text";
import { Button } from "../ui/button";

export const MapComponent = () => {
  const mapsUrl =
    "https://www.google.com/maps/place/Instituto+Federal+de+S%C3%A3o+Paulo+-+Campus+Itapetininga/@-23.5942772,-48.0190312,17z";

  return (
    <section className="w-full flex flex-col items-center gap-6 mt-8 md:mt-16 px-4 md:px-0">
      <Text text="Localização" className="text-2xl md:text-4xl font-bold" spanClassName="text-4xl md:text-7xl" />
      <p className="text-sm md:text-base text-neutral-700 max-w-3xl text-center px-4">
        Conheça a localização do IFSP Campus Itapetininga. Estamos próximos ao centro
        e de vias de fácil acesso. Utilize o mapa interativo abaixo para traçar sua rota.
      </p>

      <div className="relative w-full max-w-7xl px-2 md:px-4">
        <div className="relative overflow-hidden rounded-xl md:rounded-2xl border border-neutral-200 shadow-xl bg-white">
          <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-white/5 via-transparent to-white/10" />
          <iframe
            title="Localização do IFSP Campus Itapetininga"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2063.433354916025!2d-48.01853720063466!3d-23.593978243472492!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c5cbf41ebfcf31%3A0xa65e4fb6d75446bf!2sInstituto%20Federal%20de%20Educa%C3%A7%C3%A3o%2C%20Ci%C3%AAncia%20e%20Tecnologia%20de%20S%C3%A3o%20Paulo%2C%20Campus%20Itapetininga!5e1!3m2!1spt-BR!2sbr!4v1760534803586!5m2!1spt-BR!2sbr"
            loading="lazy"
            className="w-full h-[300px] sm:h-[420px] md:h-[520px]"
            referrerPolicy="no-referrer-when-downgrade"
          />

          <div className="absolute left-2 bottom-2 right-2 md:left-6 md:bottom-6 md:right-auto">
            <div className="rounded-lg md:rounded-xl bg-white/90 backdrop-blur px-3 py-2 md:px-4 md:py-3 shadow-md border border-neutral-200">
              <p className="text-xs md:text-sm text-neutral-800">
                Av. João Olímpio de Oliveira, 1561 - Vila Ophelia, Itapetininga - SP
              </p>
              <div className="mt-2">
                <a href={mapsUrl} target="_blank" rel="noreferrer">
                  <Button size="sm" className="text-xs md:text-sm">Abrir no Google Maps</Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
