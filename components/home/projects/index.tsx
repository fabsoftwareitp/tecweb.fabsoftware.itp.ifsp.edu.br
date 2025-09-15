import Text from "@/components/ui/text";
import Ernesta from "./ernesta";
import IfCasaAberta from "./if-casa-aberta";

export const Projects = () => {
  return (
    <div className="flex flex-col gap-8 items-center w-full mt-12">
      <Text
        text="Projetos"
        className="text-4xl font-bold"
        spanClassName="text-7xl"
      />
      <div className="flex flex-col gap-52">
        <IfCasaAberta />
        <Ernesta />
      </div>
    </div>
  );
};
