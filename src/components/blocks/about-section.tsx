import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export const AboutSection = () => {
  return (
    <section className="container mt-10 flex max-w-5xl flex-col-reverse gap-8 md:mt-14 md:gap-14 lg:mt-20 lg:flex-row lg:items-end">
      {/* Images Left - Text Right */}
      <div className="flex flex-col gap-8 lg:gap-16 xl:gap-20">
        <ImageSection
          images={[
            { src: "/about/5.webp", alt: "Team collaboration" },
            { src: "/about/6.webp", alt: "Team workspace" },
          ]}
          className="xl:-translate-x-10"
        />

        <TextSection
          title="Grupo Colors"
          paragraphs={[
            "Fundado en 2001, Grupo Colors es líder en la distribución y comercialización de equipos oftalmológicos, optométricos y monturas en Colombia y Latinoamérica.",
            "Durante más de dos décadas hemos acompañado a profesionales de la salud visual con soluciones tecnológicas, soporte especializado y un compromiso constante con la innovación.",
            "Representamos marcas internacionales de prestigio y brindamos asesoría técnica, comercial y académica que impulsa el crecimiento de cada práctica profesional.",
          ]}
          ctaButton={{
            href: "/careers",
            text: "Ver oportunidades de empleo",
          }}
        />
      </div>

      {/* Text Left - Images Right */}
      <div className="flex flex-col gap-8 lg:gap-16 xl:gap-20">
        <TextSection
          paragraphs={[
            "Nuestra visión es consolidarnos como un referente en la distribución de soluciones para la salud visual en Colombia. Buscamos crecer con una cultura basada en valores, un servicio cercano y procesos sólidos que generen bienestar a nuestros clientes y a las personas que atendemos cada día. Queremos seguir construyendo una empresa eficiente, humana y comprometida con la calidad y la dignidad en cada servicio que ofrecemos.",
            "Nuestra misión es aportar al bienestar de las personas mediante soluciones confiables para la salud visual. Trabajamos con un enfoque humano, valorando a cada cliente, proveedor y colaborador, y construyendo relaciones basadas en respeto y servicio. Nos guiamos por principios de honestidad, humildad y eficiencia, reflejando en cada proceso nuestro compromiso con la calidad y la dignidad de quienes confían en nosotros.",
          ]}
        />
        <ImageSection
          images={[
            { src: "/about/9.webp", alt: "Modern workspace" },
            { src: "/about/7.webp", alt: "Team collaboration" },
          ]}
          className="hidden lg:flex xl:translate-x-10"
        />
      </div>
    </section>
  );
};

interface ImageSectionProps {
  images: { src: string; alt: string }[];
  className?: string;
}

export function ImageSection({ images, className }: ImageSectionProps) {
  return (
    <div className={cn("flex flex-col gap-6", className)}>
      {images.map((image, index) => (
        <div
          key={index}
          className="relative aspect-[2/1.5] overflow-hidden rounded-2xl"
        >
          <img
            src={image.src}
            alt={image.alt}
            className="size-full object-cover"
          />
        </div>
      ))}
    </div>
  );
}

interface TextSectionProps {
  title?: string;
  paragraphs: string[];
  ctaButton?: {
    href: string;
    text: string;
  };
}

export function TextSection({
  title,
  paragraphs,
  ctaButton,
}: TextSectionProps) {
  return (
    <div className="flex-1 space-y-4 text-lg font-medium md:space-y-6">
      {title && <h2 className="text-primary text-4xl font-medium">{title}</h2>}
      <div className="text-muted-foreground max-w-xl space-y-6">
        {paragraphs.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>
      {ctaButton && (
        <div className="mt-8">
          <a href={ctaButton.href}>
            <Button size="lg">{ctaButton.text}</Button>
          </a>
        </div>
      )}
    </div>
  );
}
