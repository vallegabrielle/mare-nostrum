export interface Dessert {
    id: number;
    title: string;
    description: string;
}

export const desserts: Dessert[] = [
    {
        id: 1,
        title: 'Deconstructed "Bolo de Rolo" (Pernambuco’s Pride)',
        description:
            'Thin layers of guava-filled sponge cake served with a warm guava reduction and handmade "Queijo do Reino" ice cream.',
    },
    {
        id: 2,
        title: 'Coconut "Quindim" with Cachaça-Infused Pineapple',
        description:
            "A bright yellow coconut custard served with grilled pineapple marinated in premium aged Cachaça.",
    },
    {
        id: 3,
        title: 'Cartola "Gourmet"',
        description:
            'Fried bananas, melted "Queijo Coalho", and a dusting of cinnamon sugar, served with a dollop of fresh cream.',
    },
    {
        id: 4,
        title: "Cashew & Brazil Nut Tart",
        description:
            'A buttery crust filled with "Caju" jam and topped with toasted Brazil nut praline.',
    },
];
