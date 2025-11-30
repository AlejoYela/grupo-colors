import { useState } from "react";

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

const categories = ["Todas", "Refracción", "Diagnóstico", "Imaging", "Laboratorio"];
const brands = ["Todas", "Visionix", "Optopol", "PlenOptika", "Keeler", "MicroClear", "SMB"];

export const Devices = ({
    className,
}: {
    className?: string;
}) => {
    const [selectedCategory, setSelectedCategory] = useState("Todas");
    const [selectedBrand, setSelectedBrand] = useState("Todas");

    const filteredItems = items.filter(item => {
        const categoryMatch = selectedCategory === "Todas" || item.category === selectedCategory;
        const brandMatch = selectedBrand === "Todas" || item.company === selectedBrand;
        return categoryMatch && brandMatch;
    });

    return (
        <section className={cn("overflow-hidden py-28 lg:py-32", className)}>
            <div className="container">
                <div className="space-y-4">
                    <h2 className="text-2xl tracking-tight md:text-4xl lg:text-5xl" id="stars-products">
                        Todos nuestros equipos
                    </h2>
                    <p className="text-gray-300 max-w-xl leading-snug">
                        Filtra por marca, tipo de equipo o aplicación para encontrar el dispositivo que mejor se adapte a las necesidades de tu consulta.
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
                                    onClick={() => setSelectedCategory(category)}
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
                                    onClick={() => setSelectedBrand(brand)}
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
                                    setSelectedCategory("Todas");
                                    setSelectedBrand("Todas");
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