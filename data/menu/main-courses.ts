export interface MainCourse {
    id: number;
    title: string;
    description: string;
}

export const mainCourses: MainCourse[] = [
    {
        id: 1,
        title: 'The "Encontro das Águas" Moqueca (Sharing for 2)',
        description:
            'A fusion of Bahia and Pernambuco: Fresh catch, prawns, and mussels simmered in coconut milk, a touch of dendê oil, and local herbs. Served with "pirão" (fish cream), coconut rice, and toasted farofa.',
    },
    {
        id: 2,
        title: 'Lobster "na Brasa" with Jerimum Purée',
        description:
            "Charcoal-grilled lobster tail served with a silky roasted pumpkin (jerimum) purée and a cashew nut crust.",
    },
    {
        id: 3,
        title: "Prawn & Pumpkin Risotto (Camarão no Jerimum)",
        description:
            'Creamy carnaroli rice with sautéed prawns, roasted pumpkin, and a hint of "Requeijão" cream.',
    },
    {
        id: 4,
        title: 'Sun-Dried Fish "Bacalhau do Sertão"',
        description:
            'Salted local white fish, confit onions, black olives, and "manteiga de garrafa" (clarified butter) potatoes.',
    },
    {
        id: 5,
        title: 'Seafood "Arroz de Hauçá" (Modern Twist)',
        description:
            "Traditional coconut rice topped with a rich shrimp stew, crispy jerked beef bits, and fried plantains.",
    },
];
