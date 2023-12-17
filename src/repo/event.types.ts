export interface EventType {
    id: number;
    name: string;
    coverImage: string;
    date: string;
    description: {
        short: string;
    };
    dresscode: string;
    price: number;
    includedDrinks: string[];
    tags: string[];
    isAperitivoIncluded: boolean;
}
export interface DishesType {
    name: string;
    description: string;
    allergens: string[];
}
export interface EventDetailType {
    id: number;
    name: string;
    coverImage: string;
    date: string;
    description: {
        long: string[];
        short: string;
    };
    reservation: string | null;
    dresscode: string;
    price: number;
    includedDrinks: string[];
    tags: string[];
    isAperitivoIncluded: boolean;
    includedDishes: DishesType[];
}
