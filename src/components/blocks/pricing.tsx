"use client";

import { useState } from "react";

import { Check } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { cn } from "@/lib/utils";

const plans = [
  {
    name: "Esencial",
    monthlyPrice: "300000 COP",
    yearlyPrice: "3000000 COP",
    description: "Para consultorios y ópticas que inician.",
    features: [
      "Mantenimiento preventivo anual",
      "Revisión general y limpieza profesional",
      "Ajustes básicos y prueba de funcionamiento",
      "Capacitación inicial de uso",
      "Asesoría remota por WhatsApp",
      "Reporte técnico certificado",
    ],
  },
  {
    name: "Profesional",
    monthlyPrice: "500000 COP",
    yearlyPrice: "5000000 COP",
    description:
      "El plan recomendado para ópticas y clínicas con alto flujo de pacientes.",
    features: [
      "Todo lo del Plan Esencial y…",
      "Dos mantenimientos preventivos al año",
      "Capacitación técnica periódica",
      "Soporte remoto prioritario",
      "Descuentos en repuestos y consumibles",
      "Recordatorios automáticos de mantenimiento",
    ],
  },
  {
    name: "Experto",
    monthlyPrice: "800000 COP",
    yearlyPrice: "8000000 COP",
    description:
      "Para instituciones y clínicas que requieren soporte completo.",
    features: [
      "Todo lo del Plan Profesional y…",
      "Calibración avanzada según fabricante",
      "Talleres presenciales con casos reales",
      "Capacitación personalizada por equipos",
      "Visitas técnicas preferenciales",
      "Gestión prioritaria de repuestos",
    ],
  },
];


export const Pricing = ({ className }: { className?: string }) => {
  const [isAnnual, setIsAnnual] = useState(true);

  return (
    <section className={cn("py-28 lg:py-32", className)}>
      <div className="container max-w-5xl">
        <div className="space-y-4 text-center">
          <h2 className="text-2xl tracking-tight md:text-4xl lg:text-5xl">
            Planes de mantenimiento y capacitación
          </h2>
          <p className="text-muted-foreground mx-auto max-w-xl leading-snug text-balance">
            Asegura el óptimo rendimiento de tus equipos con nuestros planes, diseñados para maximizar la
            vida útil y precisión diagnóstica.
          </p>
        </div>

        <div className="mt-8 grid items-start gap-5 text-start md:mt-12 md:grid-cols-3 lg:mt-20">
          {plans.map((plan) => (
            <Card
              key={plan.name}
              className={`${plan.name === "Profesional"
                ? "outline-primary origin-top outline-4"
                : ""
                }`}
            >
              <CardContent className="flex flex-col gap-7 px-6 py-5">
                <div className="space-y-2">
                  <h3 className="text-foreground font-semibold">{plan.name}</h3>
                  <div className="space-y-1">
                    <div className="text-muted-foreground text-lg font-medium">
                      {isAnnual ? plan.yearlyPrice : plan.monthlyPrice}{" "}
                      {plan.name !== "Free" && (
                        <span className="text-muted-foreground">
                          por cliente/
                          {isAnnual ? "año" : "mes"}
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                {plan.name !== "Free" ? (
                  <div className="flex items-center gap-2">
                    <Switch
                      checked={isAnnual}
                      onCheckedChange={() => setIsAnnual(!isAnnual)}
                      aria-label="Toggle annual billing"
                    />
                    <span className="text-sm font-medium">Incluir acompañamiento</span>
                  </div>
                ) : (
                  <span className="text-muted-foreground text-sm">
                    {plan.description}
                  </span>
                )}

                <div className="space-y-3">
                  {plan.features.map((feature) => (
                    <div
                      key={feature}
                      className="text-muted-foreground flex items-center gap-1.5"
                    >
                      <Check className="size-5 shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                <Button
                  className="w-fit"
                  variant={plan.name === "Profesional" ? "default" : "outline"}
                >
                  Elige este plan
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
