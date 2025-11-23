import {
  ArrowRight,
  Blend,
  Cog,
  Truck,
  Shield
} from "lucide-react";

import { DashedLine } from "@/components/dashed-line";
import { Button } from "@/components/ui/button";
import { GITHUB_URL } from "@/consts";

const features = [
  {
    title: "Envíos Nacionales",
    description: "Hacemos envíos e instalación a cualquier parte del país.",
    icon: Truck,
  },
  {
    title: "Garantía Extendida",
    description: "1 o 2 años (Segun aplique) directamente con la fabrica.",
    icon: Blend,
  },
  {
    title: "Confianza y Seguridad",
    description: "Representantes oficiales de las mejores marcas.",
    icon: Shield,
  },
  {
    title: "Servicio técnico especializado",
    description: "Ingenieros con entrenamiento de fábrica.",
    icon: Cog,
  },
];

export const Hero = () => {
  return (
    <section className="pt-28 pb-10 lg:py-20 lg:pt-44">
      <div className="container flex flex-col justify-between gap-8 md:gap-14 lg:flex-row lg:gap-20">
        {/* Left side - Main content */}
        <div className="flex-1">
          <img src="/logo-w.svg" alt="" className="hidden lg:block h-12 mb-10" />

          <h1 className="text-foreground max-w-160 text-3xl tracking-tight md:text-4xl lg:text-5xl xl:whitespace-nowrap">
            Tu visión, nuestra misión
          </h1>

          <p className="text-gray-400 text-1xl mt-5 md:text-2xl">
            Más de <span className="text-sky-300">20 años</span> respaldando la salud visual con equipos de calidad y soporte técnico especializado en todo el país.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4 lg:flex-nowrap">
            <Button asChild>
              <a href={GITHUB_URL}>Catálogos completos</a>
            </Button>
            <Button
              variant="outline"
              className="from-background h-auto gap-2 bg-linear-to-r to-transparent shadow-md"
              asChild
            >
              <a
                href="https://shadcnblocks.com"
                className="max-w-56 truncate text-start md:max-w-none"
              >
                Solicita una cotización

                <ArrowRight className="stroke-3" />
              </a>
            </Button>
          </div>
        </div>

        {/* Right side - Features */}
        <div className="relative flex flex-1 flex-col justify-center space-y-5 max-lg:pt-10 lg:pl-10">
          <DashedLine
            orientation="vertical"
            className="absolute top-0 left-0 max-lg:hidden"
          />
          <DashedLine
            orientation="horizontal"
            className="absolute top-0 lg:hidden"
          />
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div key={feature.title} className="flex gap-2.5 lg:gap-5">
                <Icon className="text-foreground mt-1 size-4 shrink-0 lg:size-5" />
                <div>
                  <h2 className="font-text text-foreground font-semibold">
                    {feature.title}
                  </h2>
                  <p className="text-muted-foreground max-w-76 text-sm">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>


      <div className="mt-12 md:mt-20 lg:mt-24 w-screen relative left-[50%] right-[50%] ml-[-50vw] mr-[-50vw]">
        <div className="relative h-[480px] w-screen overflow-hidden left-[50%] right-[50%] ml-[-50vw] mr-[-50vw]">
          <video
            src="/video-eye-3.mp4"
            className="w-full h-full object-cover max-lg:rounded-tr-none shadow-lg"
            style={{
              objectPosition: 'center 30%',
              maskImage: 'linear-gradient(to bottom, transparent 0%, black 15%, black 85%, transparent 100%)',
              WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, black 15%, black 85%, transparent 100%)'
            }}
            autoPlay
            muted
            loop
          />
          {/* Ya no es necesario el overlay */}
        </div>
      </div>
    </section>
  );
};
