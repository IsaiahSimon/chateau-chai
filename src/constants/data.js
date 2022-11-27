import images from "./images";

const wines = [
  {
    title: "Chapel Hill Shiraz",
    price: "$56",
    tags: "AU | Bottle",
  },
  {
    title: "Catena Malbee",
    price: "$59",
    tags: "AU | Bottle",
  },
  {
    title: "La Vieillw Rose",
    price: "$44",
    tags: "FR | 750 ml",
  },
  {
    title: "Rhino Pale Ale",
    price: "$31",
    tags: "CA | 750 ml",
  },
  {
    title: "Irish Guinness",
    price: "$26",
    tags: "IE | 750 ml",
  },
];

const cocktails = [
  {
    title: "Aperol Sprtiz",
    price: "$20",
    tags: "Aperol | Villa Marchesi prosecco | soda | 30 ml",
  },
  {
    title: "Dark 'N' Stormy",
    price: "$16",
    tags: "Dark rum | Ginger beer | Slice of lime",
  },
  {
    title: "Daiquiri",
    price: "$10",
    tags: "Rum | Citrus juice | Sugar",
  },
  {
    title: "Old Fashioned",
    price: "$31",
    tags: "Bourbon | Brown sugar | Angostura Bitters",
  },
  {
    title: "Negroni",
    price: "$26",
    tags: "Gin | Sweet Vermouth | Campari | Orange garnish",
  },
];

const awards = [
  {
    imgUrl: images.award02,
    title: "Bib Gourmond",
    subtitle:
      "Start your evening here at the elegant bar where a perfectly chilled shrimp cocktail makes for a nice companion.",
  },
  {
    imgUrl: images.award01,
    title: "Rising Star",
    subtitle:
      "Chef Marcus Ray's menu is a treasure trove of French dishes dolled up with a contemporary flair.",
  },
  {
    imgUrl: images.award05,
    title: "AA Hospitality",
    subtitle:
      "Guests come here for the views and stay for the traditional French cuisine.",
  },
  {
    imgUrl: images.award03,
    title: "Outstanding Chef",
    subtitle:
      "Chef Marcus Ray once worked on a farm, and his menu is a love letter to the region's seasons and its local suppliers.",
  },
];

export default { wines, cocktails, awards };
