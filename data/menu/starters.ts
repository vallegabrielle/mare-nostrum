export interface Starter {
    id: number;
    title: string;
    description: string;
}

export const starters: Starter[] = [
    {
        id: 1,
        title: 'Recife-Style Seafood "Arrumadinho"',
        description:
            "Chilled seafood salad with green beans, clarified butter vinaigrette, and crunchy manioc flour.",
    },
    {
        id: 2,
        title: "Mini Acarajé Sliders (Bahia Soul)",
        description:
            "Traditional black-eyed pea fritters filled with vatapá, dried shrimp, and a green tomato vinaigrette.",
    },
    {
        id: 3,
        title: "Coal-Grilled Cheese with Honey & Oregano",
        description:
            'Premium "Queijo Coalho" charred over embers, drizzled with wildflower honey and fresh oregano.',
    },
    {
        id: 4,
        title: 'Crispy Tapioca "Dadinhos" with Ginger-Pepper Jam',
        description:
            "Golden sun-dried curd cheese and tapioca cubes served with a spicy ginger-infused jam.",
    },
    {
        id: 5,
        title: "Olinda Reef Octopus Crudo",
        description:
            "Thinly sliced local octopus, lime zest, coriander oil, and crispy sweet potato chips.",
    },
];
