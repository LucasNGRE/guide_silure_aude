export type PricingOption = {
    id: number;
    name: string;
    description: string;
    prices: {
      adult: {
        fullDay: number;
        halfDay: number;
      };
      child: {
        fullDay: number;
        halfDay: number;
      };
    };
  };
  
  export const pricingOptions: PricingOption[] = [
    {
      id: 1,
      name: "Guidage Silure (verticale, float tube)",
      description: "Une journée de pêche dans les meilleures rivières de la région.",
      prices: {
        adult: { fullDay: 230, halfDay: 170 },
        child: { fullDay: 150, halfDay: 100 },
      },
    },
    {
      id: 2,
      name: "Pêche en lac",
      description: "Découvrez les secrets de la pêche en lac avec notre guide expert.",
      prices: {
        adult: { fullDay: 100, halfDay: 60 },
        child: { fullDay: 70, halfDay: 40 },
      },
    },
    {
      id: 3,
      name: "Pêche en mer",
      description: "Une aventure de pêche en mer inoubliable.",
      prices: {
        adult: { fullDay: 150, halfDay: 90 },
        child: { fullDay: 100, halfDay: 60 },
      },
    },
    {
      id: 4,
      name: "Initiation à la mouche",
      description: "Apprenez les techniques de la pêche à la mouche avec notre guide passionné.",
      prices: {
        adult: { fullDay: 130, halfDay: 80 },
        child: { fullDay: 90, halfDay: 55 },
      },
    },
    {
      id: 5,
      name: "Pêche de nuit",
      description: "Vivez l'expérience unique de la pêche nocturne.",
      prices: {
        adult: { fullDay: 140, halfDay: 85 },
        child: { fullDay: 95, halfDay: 60 },
      },
    },
    {
      id: 6,
      name: "Pêche aux carnassiers",
      description: "Partez à la recherche des plus gros prédateurs de nos eaux.",
      prices: {
        adult: { fullDay: 135, halfDay: 80 },
        child: { fullDay: 90, halfDay: 55 },
      },
    },
  ];
  
  