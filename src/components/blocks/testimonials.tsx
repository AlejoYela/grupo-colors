import { ArrowRight } from "lucide-react";

import { DashedLine } from "../dashed-line";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";

const items = [
  {
    quote: "VX90, ARk con sistema de autofog y retroiluminación.",
    author: "Autorefractoqueratómetro",
    role: "PM",
    company: "Visionix",
    image: "/testimonials/amy-chase.webp",
  },
  {
    quote: "VX650, Screening integral de polo anterior y posterior.",
    author: "Multidiagnostico",
    role: "Lead Engineer",
    company: "Visionix",
    image: "/testimonials/jonas-kotara.webp",
  },
  {
    quote: "REVO 130FC, Escaneo ultrarrápido de 130,000 A-scans por segundo.",
    author: "OCT + Fundus camera",
    role: "Founder",
    company: "Optopol",
    image: "/testimonials/kevin-yam.webp",
  },
  {
    quote: "QuickSee free, mediciones precisas en 10 segundos.",
    author: "Autorefractómetro portátil",
    role: "Founder",
    company: "PlenOptika",
    image: "/testimonials/kundo-marta.webp",
  },
  {
    quote: "Keeler student, cinco haces de diagnóstico en formato compacto.",
    author: "Estuche multidiagnóstico portátil",
    role: "PM",
    company: "Keeler",
    image: "/testimonials/keeler.webp",
  },
  {
    quote: "Apollo CRO, Imaging confocal 165° en captura única.",
    author: "Cámara de fondo de ojo.",
    role: "Lead Engineer",
    company: "MicroClear",
    image: "/testimonials/apollo.webp",
  },
  {
    quote: "IDRA, Evaluación estructural de composición lagrimal",
    author: "Analizador de ojo seco",
    role: "Founder",
    company: "SMB",
    image: "/testimonials/idra.webp",
  },
  {
    quote: "Weco E32: Trazado, bloqueo, canteado y perforación.",
    author: "Biseladora de lentes",
    role: "Founder",
    company: "Visionix",
    image: "/testimonials/e32.webp",
  },
];

export const Testimonials = ({
  className,
  dashedLineClassName,
}: {
  className?: string;
  dashedLineClassName?: string;
}) => {
  return (
    <>
      <section className={cn("overflow-hidden py-28 lg:py-32", className)} >
        <div className="container">
          <div className="space-y-4">
            <h2 className="text-2xl tracking-tight md:text-4xl lg:text-5xl" id="stars-products">
              Nuestros productos estrella
            </h2>
            <p className="text-gray-300 max-w-md leading-snug">
              Equipos con las mejores calificaciones de nuestros clientes. Elegidos por su exactitud diagnóstica, facilidad de uso y el impacto positivo en sus prácticas..
            </p>
            <Button variant="outline" className="shadow-md">
              Contacta con nuestro equipo comercial <ArrowRight className="size-4" />
            </Button>
          </div>

          <div className="relative mt-8 -mr-[max(3rem,calc((100vw-80rem)/2+3rem))] md:mt-12 lg:mt-20">
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full"
            >
              <CarouselContent className="">
                {items.map((testimonial, index) => (
                  <CarouselItem
                    key={index}
                    className="xl:basis-1/3.5 grow basis-4/5 sm:basis-3/5 md:basis-2/5 lg:basis-[28%] 2xl:basis-[24%]"
                  >
                    <Card className="bg-muted h-full overflow-hidden border-none">
                      <CardContent className="flex h-full flex-col p-0">
                        <div className="relative h-[288px] lg:h-[328px]">
                          <img
                            src={testimonial.image}
                            alt={testimonial.author}
                            className="size-full object-cover object-top"
                          />
                        </div>
                        <div className="flex flex-1 flex-col justify-between gap-10 p-6">
                          <blockquote className="font-display text-lg leading-none! font-medium md:text-xl lg:text-2xl">
                            {testimonial.quote}
                          </blockquote>
                          <div className="space-y-0.5">
                            <div className="text-foreground font-semibold">
                              {testimonial.author}
                            </div>
                            <div className="text-muted-foreground text-sm">
                              {testimonial.company}
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="mt-8 flex gap-3">
                <CarouselPrevious className="bg-muted hover:bg-muted/80 static size-14.5 translate-x-0 translate-y-0 transition-colors [&>svg]:size-6 lg:[&>svg]:size-8" />
                <CarouselNext className="bg-muted hover:bg-muted/80 static size-14.5 translate-x-0 translate-y-0 transition-colors [&>svg]:size-6 lg:[&>svg]:size-8" />
              </div>
            </Carousel>
          </div>
        </div>
      </section>
      <DashedLine
        orientation="horizontal"
        className={cn("mx-auto max-w-[80%]", dashedLineClassName)}
      />
    </>
  );
};
