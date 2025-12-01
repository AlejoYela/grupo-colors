import { useState, useEffect } from "react";

import { ArrowRight, ChevronDown } from "lucide-react";

import productsData from '../../data/products.json';

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";


const items = productsData;

const categories = ["Todas", "Refracción", "Diagnóstico", "Imaging", "Laboratorio", "Oftalmología", "Optometría", "Monturas"];
const brands = ["Todas", "Visionix", "REVO", "Optopol", "PlenOptika", "Keeler", "MicroClear", "SBM", "IDRA", "KHL", "Colors Instruments", "Vantage", "All Pupil", "Evidence", "ViewLight", "Icare", "Volk", "ClearPods", "Nun", "VistaView", "Sonomed", "66 Vision", "Essilor", "MiiS"];

// Mapeo de títulos personalizados por categoría
const categoryTitles = {
    "Todas": "Todos nuestros equipos",
    "Refracción": "Equipos de Refracción",
    "Diagnóstico": "Equipos de Diagnóstico",
    "Imaging": "Equipos de Imaging",
    "Laboratorio": "Equipos de Laboratorio",
    "Oftalmología": "Equipos de Oftalmología",
    "Optometría": "Equipos de Optometría",
    "Monturas": "Monturas originales",
};

//Mapeo de descripciones personalizadas por categoría
const categoryDescriptions = {
    "Todas": "Filtra por marca, tipo de equipo o aplicación para encontrar el dispositivo que mejor se adapte a las necesidades de tu consulta.",
    "Refracción": "Descubre nuestra selección de equipos de refracción de última generación, diseñados para ofrecer mediciones precisas y mejorar la experiencia del paciente en tu consulta.",
    "Diagnóstico": "Explora nuestros avanzados equipos de diagnóstico oftalmológico, desde OCT hasta cámaras retinales, para un análisis detallado y preciso de la salud ocular.",
    "Imaging": "Conoce nuestros equipos de imaging, que ofrecen soluciones innovadoras para la captura y análisis de imágenes oculares.",
    "Laboratorio": "Descubre nuestra gama de equipos de laboratorio, diseñados para facilitar el trabajo en el laboratorio y mejorar la eficiencia en los diagnósticos.",
    "Oftalmología": "Explora nuestros equipos especializados en oftalmología, que brindan soluciones integrales para el cuidado de la salud ocular.",
    "Optometría": "Conoce nuestros equipos de optometría, que ofrecen tecnología avanzada para exámenes visuales y diagnóstico.",
    "Monturas": "Descubre nuestras monturas originales, que combinan estilo y comodidad para tus pacientes.",
}

export const Devices = ({
    className,
}: {
    className?: string;
}) => {
    const [selectedCategory, setSelectedCategory] = useState("Todas");
    const [selectedBrand, setSelectedBrand] = useState("Todas");

    // Leer parámetros de la URL al cargar el componente
    useEffect(() => {
        const params = new URLSearchParams(window.location.search);
        const categoryParam = params.get('categoria');
        const brandParam = params.get('marca');

        if (categoryParam && categories.includes(categoryParam)) {
            setSelectedCategory(categoryParam);
        }
        if (brandParam && brands.includes(brandParam)) {
            setSelectedBrand(brandParam);
        }
    }, []);

    // Actualizar la URL cuando cambian los filtros
    const updateURL = (category: string, brand: string) => {
        const params = new URLSearchParams();
        if (category !== "Todas") params.set('categoria', category);
        if (brand !== "Todas") params.set('marca', brand);

        const newURL = params.toString()
            ? `${window.location.pathname}?${params.toString()}`
            : window.location.pathname;

        window.history.pushState({}, '', newURL);
    };

    const handleCategoryChange = (category: string) => {
        setSelectedCategory(category);
        updateURL(category, selectedBrand);
    };

    const handleBrandChange = (brand: string) => {
        setSelectedBrand(brand);
        updateURL(selectedCategory, brand);
    };

    const filteredItems = items.filter(item => {
        // Manejar tanto string como array para compatibilidad
        const itemCategories = Array.isArray(item.category) ? item.category : [item.category];
        const categoryMatch = selectedCategory === "Todas" || itemCategories.includes(selectedCategory);
        const brandMatch = selectedBrand === "Todas" || item.company === selectedBrand;
        return categoryMatch && brandMatch;
    });

    // Obtener el título dinámico basado en la categoría seleccionada
    const pageTitle = categoryTitles[selectedCategory] || "Todos nuestros equipos";
    const pageDescription = categoryDescriptions[selectedCategory] || "Filtra por marca, tipo de equipo o aplicación para encontrar el dispositivo que mejor se adapte a las necesidades de tu consulta.";

    return (
        <section className={cn("overflow-hidden py-28 lg:py-32", className)}>
            <div className="container">
                <div className="space-y-4">
                    <h2 className="text-2xl tracking-tight md:text-4xl lg:text-5xl" id="stars-products">
                        {pageTitle}
                    </h2>
                    <p className="text-gray-300 max-w-xl leading-snug">
                        {pageDescription}
                    </p>
                    <Button variant="outline" className="shadow-md">
                        O contacta con nuestro equipo comercial <ArrowRight className="size-4" />
                    </Button>
                </div>

                {/* Filtros Desplegables */}
                <div className="mt-8 md:mt-12 flex flex-wrap items-center gap-4">
                    {/* Filtro de Categorías */}
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="outline" className="min-w-[160px] justify-between">
                                <span className="text-muted-foreground text-sm font-normal">
                                    Categoría:{" "}
                                </span>
                                <span className="ml-2 font-semibold">{selectedCategory}</span>
                                <ChevronDown className="ml-2 size-4 opacity-50" />
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="start" className="w-[200px]">
                            {categories.map((category) => (
                                <DropdownMenuItem
                                    key={category}
                                    onClick={() => handleCategoryChange(category)}
                                    className={cn(
                                        "cursor-pointer",
                                        selectedCategory === category && "bg-accent font-semibold"
                                    )}
                                >
                                    {category}
                                </DropdownMenuItem>
                            ))}
                        </DropdownMenuContent>
                    </DropdownMenu>

                    {/* Filtro de Marcas */}
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="outline" className="min-w-[160px] justify-between">
                                <span className="text-muted-foreground text-sm font-normal">
                                    Marca:{" "}
                                </span>
                                <span className="ml-2 font-semibold">{selectedBrand}</span>
                                <ChevronDown className="ml-2 size-4 opacity-50" />
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="start" className="w-[200px]">
                            {brands.map((brand) => (
                                <DropdownMenuItem
                                    key={brand}
                                    onClick={() => handleBrandChange(brand)}
                                    className={cn(
                                        "cursor-pointer",
                                        selectedBrand === brand && "bg-accent font-semibold"
                                    )}
                                >
                                    {brand}
                                </DropdownMenuItem>
                            ))}
                        </DropdownMenuContent>
                    </DropdownMenu>

                    {/* Contador de resultados */}
                    <div className="text-sm text-muted-foreground ml-auto">
                        {filteredItems.length} de {items.length} equipos
                    </div>
                </div>

                {/* Grid de productos */}
                <div className="mt-8 md:mt-12 lg:mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {filteredItems.length > 0 ? (
                        filteredItems.map((item, index) => (
                            <Card
                                key={index}
                                className="bg-muted overflow-hidden border-none group cursor-pointer relative"
                            >
                                <CardContent className="flex h-full flex-col p-0">
                                    <div className="relative h-[288px] lg:h-[328px]">
                                        <img
                                            src={item.image}
                                            alt={item.author}
                                            className="size-full object-cover object-top"
                                        />
                                    </div>
                                    <div className="flex flex-1 flex-col justify-between gap-10 p-6">
                                        <blockquote className="font-display text-lg leading-none! font-medium md:text-xl lg:text-2xl">
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
                                <Button
                                    variant="outline"
                                    size="icon"
                                    className="absolute bottom-6 right-6 size-10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                                >
                                    <ArrowRight className="size-5" />
                                </Button>
                            </Card>
                        ))
                    ) : (
                        <div className="col-span-full text-center py-12">
                            <p className="text-muted-foreground text-lg">
                                No se encontraron equipos con los filtros seleccionados.
                            </p>
                            <Button
                                variant="outline"
                                className="mt-4"
                                onClick={() => {
                                    handleCategoryChange("Todas");
                                    handleBrandChange("Todas");
                                }}
                            >
                                Limpiar filtros
                            </Button>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}