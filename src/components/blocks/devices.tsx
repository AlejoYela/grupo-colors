import { useState } from "react";

import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

const items = [
    {
        quote: "VX90, ARk con sistema de autofog y retroiluminación.",
        author: "Autorefractoqueratómetro",
        role: "PM",
        company: "Visionix",
        category: "Refracción",
        image: "/testimonials/amy-chase.webp",
    },
    {
        quote: "VX650, Screening integral de polo anterior y posterior.",
        author: "Multidiagnostico",
        role: "Lead Engineer",
        company: "Visionix",
        category: "Diagnóstico",
        image: "/testimonials/jonas-kotara.webp",
    },
    {
        quote: "REVO 130FC, Escaneo ultrarrápido de 130,000 A-scans por segundo.",
        author: "OCT + Fundus camera",
        role: "Founder",
        company: "Optopol",
        category: "Imaging",
        image: "/testimonials/kevin-yam.webp",
    },
    {
        quote: "QuickSee free, mediciones precisas en 10 segundos.",
        author: "Autorefractómetro portátil",
        role: "Founder",
        company: "PlenOptika",
        category: "Refracción",
        image: "/testimonials/kundo-marta.webp",
    },
    {
        quote: "Keeler student, cinco haces de diagnóstico en formato compacto.",
        author: "Estuche multidiagnóstico portátil",
        role: "PM",
        company: "Keeler",
        category: "Diagnóstico",
        image: "/testimonials/keeler.webp",
    },
    {
        quote: "Apollo CRO, Imaging confocal 165° en captura única.",
        author: "Cámara de fondo de ojo.",
        role: "Lead Engineer",
        company: "MicroClear",
        category: "Imaging",
        image: "/testimonials/apollo.webp",
    },
    {
        quote: "IDRA, Evaluación estructural de composición lagrimal",
        author: "Analizador de ojo seco",
        role: "Founder",
        company: "SMB",
        category: "Diagnóstico",
        image: "/testimonials/idra.webp",
    },
    {
        quote: "Weco E32: Trazado, bloqueo, canteado y perforación.",
        author: "Biseladora de lentes",
        role: "Founder",
        company: "Visionix",
        category: "Laboratorio",
        image: "/testimonials/e32.webp",
    },
];

const categories = ["Todos", "Refracción", "Diagnóstico", "Imaging", "Laboratorio"];

export const Devices = ({
    className,
}: {
    className?: string;
}) => {
    const [selectedCategory, setSelectedCategory] = useState("Todos");

    const filteredItems = selectedCategory === "Todos"
        ? items
        : items.filter(item => item.category === selectedCategory);

    return (
        <section className={cn("overflow-hidden py-28 lg:py-32", className)}>
            <div className="container">
                <div className="space-y-4">
                    <h2 className="text-2xl tracking-tight md:text-4xl lg:text-5xl" id="stars-products">
                        Todos nuestros equipos
                    </h2>
                    <p className="text-gray-300 max-w-xl leading-snug">
                        FIltra por marca, tipo de equipo o aplicación para encontrar el dispositivo que mejor se adapte a las necesidades de tu consulta.
                    </p>
                    <Button variant="outline" className="shadow-md">
                        O contacta con nuestro equipo comercial <ArrowRight className="size-4" />
                    </Button>
                </div>

                {/* Filtros */}
                <div className="mt-8 md:mt-12">
                    <div className="flex flex-wrap gap-2 md:gap-3">
                        {categories.map((category) => (
                            <Button
                                key={category}
                                variant={selectedCategory === category ? "default" : "outline"}
                                size="sm"
                                onClick={() => setSelectedCategory(category)}
                                className={cn(
                                    "transition-all",
                                    selectedCategory === category && "shadow-md"
                                )}
                            >
                                {category}
                            </Button>
                        ))}
                    </div>
                </div>

                {/* Grid de productos */}
                <div className="mt-8 md:mt-12 lg:mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 auto-rows-fr">
                    {filteredItems.map((item, index) => (
                        <Card
                            key={index}
                            className="bg-muted overflow-hidden border-none transition-transform hover:scale-105 flex flex-col"
                        >
                            <CardContent className="flex flex-col p-0 h-full">
                                <div className="relative h-[288px] lg:h-[328px] flex-shrink-0">
                                    <img
                                        src={item.image}
                                        alt={item.author}
                                        className="size-full object-cover object-top"
                                    />
                                </div>
                                <div className="flex flex-1 flex-col justify-between gap-6 p-6">
                                    <blockquote className="font-display text-lg leading-none font-medium md:text-xl lg:text-2xl">
                                        {item.quote}
                                    </blockquote>
                                    <div className="space-y-0.5">
                                        <div className="text-foreground font-semibold">
                                            {item.author}
                                        </div>
                                        <div className="text-muted-foreground text-sm">
                                            {item.company}
                                        </div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
};