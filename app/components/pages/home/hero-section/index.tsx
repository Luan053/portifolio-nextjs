import { TechBadge } from "@/app/components/TechBadge";
import { Button } from "@/app/components/button";
import Image from "next/image";
import { HiArrowNarrowRight } from "react-icons/hi";
import {
  TbBrandGithub,
  TbBrandLinkedin,
  TbBrandWhatsapp,
} from "react-icons/tb";

const MOCK_CONTACTS = [
  {
    url: "https://github.com/Luan053",
    icon: <TbBrandGithub />,
  },
  {
    url: "https://www.linkedin.com/in/luanrs-/",
    icon: <TbBrandLinkedin />,
  },
  {
    url: "https://github.com/Luan053",
    icon: <TbBrandWhatsapp />,
  },
];

export const HeroSection = () => {
  return (
    <section className="w-full lg:h-[755px] bg-hero-image bg-cover bg-center bg-no-repeat flex flex-col justify-end pb-10 sm:pb-32 py-32 lg:pb-[110px]">
      <div className="container flex items-center justify-between flex-col-reverse lg:flex-row">
        <div className="w-full lg:max-w-[530px]">
          <p className="font-mono text-sky-300">Olá, meu nome é</p>
          <h2 className="text-4xl font-medium mt-2">Luan Schulz</h2>
          <p className="text-gray-400 my-6 text-sm sm:text-base">
            Sou um desenvolvedor Full-Stack com experiência em diversas
            tecnologias sendo as que mais uso são React + Vite/Next.js com
            Tailwind para o front-end e Asp.net MVC/Core + SQL Server ou Postgre
            para o backend. Sempre tive uma inclinação natural para a tecnologia
            e estou constantemente buscando me aprimorar e aprender coisas novas
            nessa área.
          </p>
          <div className="flex flex-wrap gap-x-2 gap-y-3 lg:max-w-[340px]">
            {Array.from({ length: 8 }).map((_, index) => (
              <TechBadge name="next.js" />
            ))}
          </div>
          <div className="mt-6 lg:mt-10 flex sm:items-center sm:gap-5 flex-col sm:flex-row">
            <Button className="w-max shadow-button">
              Entre e contato!
              <HiArrowNarrowRight size={18} />
            </Button>
            <div className="text-2xl text-gray-600 flex items-center h-20 gap-3">
              {MOCK_CONTACTS.map((contact, index) => (
                <a
                  href={contact.url}
                  key={`contact-${index}`}
                  target="_blank"
                  className="hover:text-gray-100 transition-colors"
                >
                  {contact.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
        <div>
          <Image
            width={300}
            height={500}
            src="/images/AnimeVersion.svg"
            alt="Foto de perfil cartoon Luan"
            className="lg:w-max lg:h-max w-[250px] h-[400px] rounded-lg mb-6 lg:mb-0 shadow-2xl object-cover"
          />
        </div>
      </div>
    </section>
  );
};
