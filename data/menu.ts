export const dishes = {
  "From the sea": [
    {
      name: "Moqueca de Camarão",
      description: "Shrimp, coconut milk, tomatoes, peppers & dendê oil.",
      tag: "A HOUSE FAVORITE",
    },
    {
      name: "Peixe na Brasa",
      description:
        "Charcoal-grilled fish, lime, herbs & a little ocean breeze.",
      tag: "FRESH & BRIGHT",
    },
    {
      name: "Casquinha de Siri",
      description: "Blue crab, coconut, toasted cassava & fresh lime.",
      tag: "A LITTLE SOMETHING",
    },
  ],
  "From the land": [
    {
      name: "Baião de Dois",
      description: "Rice and black-eyed peas, queijo coalho & fresh herbs.",
      tag: "NORDESTE CLASSIC",
    },
    {
      name: "Carne de Sol",
      description: "Sun-cured beef, creamy cassava purée & caramelized onions.",
      tag: "SLOW & SOULFUL",
    },
    {
      name: "Cuscuz Nordestino",
      description: "Steamed corn couscous, butter & queijo coalho.",
      tag: "COMFORT FOOD",
    },
  ],
  "Sweet endings": [
    {
      name: "Cartola",
      description: "Warm bananas, melted cheese, cinnamon & sugar.",
      tag: "A RECIFE CLASSIC",
    },
    {
      name: "Bolo de Rolo",
      description: "Delicate layers of sponge cake wrapped around guava.",
      tag: "MADE FOR SHARING",
    },
    {
      name: "Cocada",
      description: "Sweet coconut, golden edges & a touch of sunshine.",
      tag: "A LITTLE TREAT",
    },
  ],
};
export type MenuCategory = keyof typeof dishes;
