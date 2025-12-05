import Text from "@/components/ui/text";
import Ernesta from "./ernesta";
import IfCasaAberta from "./if-casa-aberta";

const Projects = () => {
  return (
    <div className="flex flex-col gap-8 items-center w-full mt-8 md:mt-12 px-4 md:px-0">
      <Text
        text="Projetos"
        className="text-2xl md:text-4xl font-bold"
        spanClassName="text-4xl md:text-7xl"
      />
      <div className="flex flex-col gap-24 md:gap-52 w-full">
        <IfCasaAberta />
        <Ernesta />
      </div>
    </div>
  );
};

export default Projects;
