import Marquee from "react-fast-marquee";

import { cn } from "@/lib/utils";

type Company = {
  name: string;
  logo: string;
  width: number;
  height: number;
  href: string;
};

export const Logos = () => {
  const topRowCompanies = [
    {
      name: "Visionix",
      logo: "/logos/visionix.svg",
      width: 143,
      height: 26,
      href: "https://visionix.com",
    },
    {
      name: "Optopol",
      logo: "/logos/optopol.svg",
      width: 154,
      height: 31,
      href: "https://optopol.com",
    },
    {
      name: "MicroClear",
      logo: "/logos/microclear.svg",
      width: 113,
      height: 22,
      href: "https://www.microcleartech.net/",
    },
    {
      name: "Lightmed",
      logo: "/logos/lightmed.svg",
      width: 112,
      height: 27,
      href: "https://lightmed.com",
    },
  ];

  const bottomRowCompanies = [
    {
      name: "Volk",
      logo: "/logos/volk.svg",
      width: 141,
      height: 32,
      href: "https://volk.com",
    },
    {
      name: "Keeler",
      logo: "/logos/keeler.svg",
      width: 104,
      height: 18,
      href: "https://www.keelerglobal.com/es/",
    },
    {
      name: "Sbm",
      logo: "/logos/sbm.svg",
      width: 105,
      height: 28,
      href: "https://www.sbmsistemi.com/en/",
    },
    {
      name: "Plenoptika",
      logo: "/logos/plenoptika.svg",
      width: 128,
      height: 33,
      href: "https://plenoptika.com",
    },
    {
      name: "Suoer",
      logo: "/logos/suoer.svg",
      width: 90,
      height: 28,
      href: "http://suowei.com.cn/index/about/index?lang=en-us",
    },
  ];

  return (
    <section className="overflow-hidden pb-28 lg:pb-32">
      <div className="container space-y-10 lg:space-y-16">
        <div className="text-center">
          <h2 className="mb-4 text-xl text-balance md:text-2xl lg:text-3xl">
            Visión sin límites, tecnología sin fronteras.
            <br className="max-md:hidden" />
            <span className="text-muted-foreground">
              Representamos a los líderes mundiales en oftalmología.
            </span>
          </h2>
        </div>

        <div className="flex w-full flex-col items-center gap-8">
          {/* Top row - 4 logos */}
          <LogoRow companies={topRowCompanies} gridClassName="grid-cols-4" />

          {/* Bottom row - 5 logos */}
          <LogoRow
            companies={bottomRowCompanies}
            gridClassName="grid-cols-5"
            direction="right"
          />
        </div>
      </div>
    </section>
  );
};

type LogoRowProps = {
  companies: Company[];
  gridClassName: string;
  direction?: "left" | "right";
};

const LogoRow = ({ companies, gridClassName, direction }: LogoRowProps) => {
  return (
    <>
      {/* Desktop static version */}
      <div className="hidden md:block">
        <div
          className={cn(
            "grid items-center justify-items-center gap-x-20 lg:gap-x-28",
            gridClassName,
          )}
        >
          {companies.map((company, index) => (
            <a href={company.href} target="_blank" key={index}>
              <img
                src={company.logo}
                alt={`${company.name} logo`}
                width={company.width}
                height={company.height}
                className="object-contain opacity-50 transition-opacity hover:opacity-100 brightness-0 invert"
              />
            </a>
          ))}
        </div>
      </div>

      {/* Mobile marquee version */}
      <div className="md:hidden">
        <Marquee direction={direction} pauseOnHover>
          {companies.map((company, index) => (
            <a
              href={company.href}
              target="_blank"
              key={index}
              className="mx-8 inline-block transition-opacity hover:opacity-100 opacity-50"
            >
              <img
                src={company.logo}
                alt={`${company.name} logo`}
                width={company.width}
                height={company.height}
                className="object-contain brightness-0 invert"
              />
            </a>
          ))}
        </Marquee>
      </div>
    </>
  );
};