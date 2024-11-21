// COFFEE BEANS

interface CoffeeBeanProps {
  name: string;
  coffee_shop_id: number;
  origin: string;
  region: string;
  variety: string;
  processing_method: string;
  roast_level: string;
  tasting_notes: string;
  body: string;
  acidity: string;
  sweetness: string;
  type_of_brew: string;
  price_250: number;
  price_1000: number;
  grind_size_recommendations: string;
  roast_date: string;
}

export type { CoffeeBeanProps };
