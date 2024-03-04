import { getRelativeTimeString } from "@/app/utils/get-relative-time";
import { ReactNode } from "react";

type KnowTechProps = {
  tech: {
    name: string;
    icon: ReactNode;
    startDate: string;
  };
};

export const KnowTech = ({ tech }: KnowTechProps) => {
  const relativeTime = getRelativeTimeString(
    new Date(tech.startDate),
    "pt-BR"
  ).replace("há ", "");
  return (
    <div className="p-6 rounded-lg bg-gray-600/20 text-gray-500 flex flex-col gap-2 hover:text-sky-500 hover:bg-gray-600/30 transition-all">
      <div className="flex items-center justify-between">
        <p className="font-medium">{tech.name}</p>
        {tech.icon}
      </div>
      <span>{relativeTime} de experiência</span>
    </div>
  );
};
