import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";

const categories = [
  {
    title: "Sobre nuestros equipos",
    questions: [
      {
        question: "¿Qué marcas internacionales representan?",
        answer:
          "Representamos marcas de prestigio como Visionix, Optopol, PlenOptika, Keeler y Microclear, cada una especializada en diferentes áreas de diagnóstico y soluciones visuales.",
      },
      {
        question: "¿Qué equipos recomiendan para consultorios nuevos?",
        answer:
          "Autorefractómetros portátiles, equipos de diagnóstico básicos y oftalmoscopios indirectos. Nuestro equipo de asesoría te ayuda a elegir según tu especialidad.",
      },
    ],
  },
  {
    title: "Servicio técnico y garantía",
    questions: [
      {
        question: "¿Cuánto tiempo dura la garantía?",
        answer:
          "1-2 años según el equipo, directamente con el fabricante. Tu inversión está protegida con acceso a servicio especializado sin intermediarios.",
      },
      {
        question: "¿Hacen envíos e instalación a todo el país?",
        answer:
          "Sí, realizamos envío, instalación profesional y capacitación en tu consultorio, donde sea que estés ubicado en Colombia.",
      },
    ],
  },
  {
    title: "Asesoría",
    questions: [
      {
        question: "¿Puedo recibir asesoría antes de comprar?",
        answer:
          "Sí, nuestro equipo ofrece consultoría sin costo. Analizamos tu necesidad y recomendamos la solución ideal para tu práctica.",
      },
      {
        question: "¿Cómo contactarlos?",
        answer:
          "Bogotá: Carrera 25 No 70-34, Barrio Alcázares. Teléfono +57 317 3707682, PBX 7447776 ext 101.",
      },
      {
        question: "¿Cómo contactarlos o visitarlos?",
        answer:
          "Bogotá: Carrera 25 No 70-34, Barrio Alcázares. Puedes visitarnos, llamar al +57 317 3707682 o PBX 7447776 ext 101. ¡Te esperamos!",
      },
    ],
  },
];

export const FAQ = ({
  headerTag = "h2",
  className,
  className2,
}: {
  headerTag?: "h1" | "h2";
  className?: string;
  className2?: string;
}) => {
  return (
    <section className={cn("py-28 lg:py-32", className)}>
      <div className="container max-w-5xl">
        <div className={cn("mx-auto grid gap-16 lg:grid-cols-2", className2)}>
          <div className="space-y-4">
            {headerTag === "h1" ? (
              <h1 className="text-2xl tracking-tight md:text-4xl lg:text-5xl">
                ¿Tienes Preguntas?
              </h1>
            ) : (
              <h2 className="text-2xl tracking-tight md:text-4xl lg:text-5xl">
                ¿Tienes Preguntas?
              </h2>
            )}
            <p className="text-muted-foreground max-w-md leading-snug lg:mx-auto">
              Si no encuentras lo que estás buscando, {" "}
              <a href="/contact" className="underline underline-offset-4">
                contáctanos
              </a>
              .
            </p>
          </div>

          <div className="grid gap-6 text-start">
            {categories.map((category, categoryIndex) => (
              <div key={category.title} className="">
                <h3 className="text-muted-foreground border-b py-4">
                  {category.title}
                </h3>
                <Accordion type="single" collapsible className="w-full">
                  {category.questions.map((item, i) => (
                    <AccordionItem key={i} value={`${categoryIndex}-${i}`}>
                      <AccordionTrigger>{item.question}</AccordionTrigger>
                      <AccordionContent className="text-muted-foreground">
                        {item.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
