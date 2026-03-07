export interface HotDeal {
    id: string;
    title: string;
    description: string;
    badge: string; // Ex: "Limited Time", "Every Tuesday"
    discount?: string; // Ex: "20% OFF", "BOGO"
    validUntil?: string;
    imageUrl: string;
    ctaText: string;
}

export const hotDeals: HotDeal[] = [
    {
        id: "d1",
        title: "Sunset Moqueca Ritual",
        description:
            "Enjoy our signature 'Encontro das Águas' Moqueca for two with a complimentary bottle of chilled white wine.",
        badge: "Every Wednesday",
        discount: "Free Wine",
        imageUrl: "/images/deals/moqueca-wine.jpg",
        ctaText: "Book a Table",
    },
    {
        id: "d2",
        title: "Bahia Soul Happy Hour",
        description:
            "Buy one Mini Acarajé Slider and get the second one for free. Pair it with our artisanal Cachaça cocktails.",
        badge: "Mon - Fri | 5pm - 7pm",
        discount: "BOGO",
        imageUrl: "/images/deals/acaraje-happy-hour.jpg",
        ctaText: "View Drinks",
    },
    {
        id: "d3",
        title: "First Voyage Discount",
        description:
            "New to Mare Nostrum? Get a special discount on your first dinner experience with us.",
        badge: "New Guests",
        discount: "15% OFF",
        imageUrl: "/images/deals/first-visit.jpg",
        ctaText: "Claim Offer",
    },
    {
        id: "d4",
        title: "Pernambuco Sweet Sunday",
        description:
            "Order any two Main Courses and receive a complimentary Deconstructed 'Bolo de Rolo' for dessert.",
        badge: "Sundays Only",
        discount: "Free Dessert",
        imageUrl: "/images/deals/bolo-de-rolo-deal.jpg",
        ctaText: "Reserve Sunday",
    },
];
