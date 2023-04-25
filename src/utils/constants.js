const priceList = [
  {
    heading: "trouser, jacket",
    items: [
      "Trousers from $16",
      "Jacket from $18",
      "Suit from $34",
      "Dress from $21",
      "Skirt from $16",
    ],
    color: "orange",
  },
  {
    heading: "suit, shirt, top",
    items: [
      "Coat from $23",
      "Wash, Dry & Fold $4/kg",
      "Shirt/Top from $13",
      "Business Shirt from $8",
    ],
    color: "green",
  },
  {
    heading: "dress, coat, outdoor",
    items: [
      "Jumper/Knit from $16",
      "Duvet (Feather, Wool) from $40",
      "Woolrest, Sheepskin from $30",
      "Curtain from $12/m2",
    ],
    color: "blue",
  },
];

const products = [
  {
    category: "trouser",
    products: [
      { title: "standard trousers", price: 16 },
      { title: "bright coloured trousers", price: 18 },
      { title: "delicate trousers", price: 20 },
      { title: "Shorts", price: 14 },
    ],
  },
  {
    category: "jacket",
    products: [
      { title: "standard jacket", price: 18 },
      { title: "bright coloured jacket", price: 20 },
      { title: "delicate jacket", price: 22 },
      { title: "heavy jacket", price: 21 },
      { title: "padded jacket", price: 23 },
      { title: "feather/down jacket", price: 25 },
    ],
  },
  {
    category: "suit/tie",
    products: [
      { title: "standard suit", price: 34 },
      { title: "bright coloured suit", price: 38 },
      { title: "tuxedo", price: 38 },
      { title: "3 pieces suit", price: 44 },
      { title: "tie", price: 9 },
    ],
  },
  {
    category: "shirt/top",
    products: [
      { title: "starched business shirt", price: 9 },
      { title: "launder business shirt", price: 8 },
      { title: "shirt press only", price: 7 },
      { title: "shirt/top", price: 13 },
      { title: "delicate shirt/blouse/top", price: 15 },
      { title: "knit/jerseys/cardigan", price: 16 },
      { title: "bulky knit", price: 19 },
    ],
  },
  {
    category: "dress/skirt",
    products: [
      { title: "short dress", price: 21 },
      { title: "medium dress", price: 24 },
      { title: "long dress", price: 27 },
      { title: "delicate dress", price: 28 },
      { title: "ball dress", price: 40 },
      { title: "standard skirt", price: 16 },
      { title: "long/delicate skirt", price: 20 },
      { title: "pleated skirt", price: 22 },
      { title: "scarf", price: 12 },
      { title: "shawl", price: 16 },
    ],
  },
  {
    category: "coat/outdoor",
    products: [
      { title: "short coat", price: 23 },
      { title: "down short coat", price: 29 },
      { title: "medium coat", price: 25 },
      { title: "down medium coat", price: 32 },
      { title: "long coat", price: 30 },
      { title: "down long coat", price: 37 },
      { title: "feather sleeping bag", price: 40 },
    ],
  },
  {
    category: "others",
    products: [
      { title: "feather, wool duvet", price: 40 },
      { title: "blanket", price: 25 },
      { title: "woolrest sheepskin", price: 30 },
      { title: "wash dry fold", price: 4 },
    ],
  },
];

export { priceList, products };