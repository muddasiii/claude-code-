// Placeholder menu content — believable but not real. Swap for the live menu.
export interface MenuItem {
  name: string;
  description?: string;
  price: string;
  detail?: string; // e.g. weight / dry-age for cuts
  tags?: string[]; // GF, V, DF, RAW, SIGNATURE, SPICY
}

export interface MenuGroup {
  id: string;
  title: string;
  note?: string;
  items: MenuItem[];
}

export const menu: MenuGroup[] = [
  {
    id: "raw-bar",
    title: "Raw Bar & Crudo",
    note: "From Florida waters and beyond. Shucked and sliced to order.",
    items: [
      {
        name: "Florida Stone Crab",
        description: "Mustard sauce, charred lemon — in season",
        price: "MP",
        tags: ["GF"],
      },
      {
        name: "Gulf Oysters",
        description: "Ember mignonette, brass horseradish",
        price: "26 / half dozen",
        tags: ["GF", "RAW"],
      },
      {
        name: "Bluefin Tuna Crudo",
        description: "Smoked soy, avocado, finger lime, chili oil",
        price: "29",
        tags: ["DF", "RAW", "SPICY"],
      },
      {
        name: "Snapper Ceviche",
        description: "Leche de tigre, plantain, red onion, cilantro",
        price: "24",
        tags: ["GF", "DF", "RAW"],
      },
      {
        name: "The Tower",
        description: "Oysters, shrimp, stone crab, tuna, ceviche",
        price: "98",
        tags: ["SIGNATURE", "GF"],
      },
    ],
  },
  {
    id: "to-begin",
    title: "To Begin",
    items: [
      {
        name: "Wood-Grilled Octopus",
        description: "Smoked paprika, fingerling potato, salsa verde",
        price: "27",
        tags: ["GF", "DF"],
      },
      {
        name: "Roasted Bone Marrow",
        description: "Oxtail marmalade, grilled sourdough, sea salt",
        price: "23",
      },
      {
        name: "Charred Caesar",
        description: "Grilled gem lettuce, white anchovy, aged parmesan",
        price: "19",
      },
      {
        name: "Wagyu Meatballs",
        description: "San Marzano, smoked ricotta, basil",
        price: "25",
      },
      {
        name: "French Onion, Our Way",
        description: "Bone broth, oak-smoked gruyère, brûléed top",
        price: "18",
      },
    ],
  },
  {
    id: "the-cuts",
    title: "From the Fire — The Cuts",
    note: "Prime & dry-aged, seared over white-oak embers, finished with smoked maldon. Add a sauce below.",
    items: [
      {
        name: "Filet Mignon",
        detail: "8 oz · center cut",
        description: "The tender one. Clean, buttery, precise.",
        price: "62",
        tags: ["GF"],
      },
      {
        name: "New York Strip",
        detail: "14 oz · 28-day dry-aged",
        description: "Deep mineral char, firm bite.",
        price: "68",
        tags: ["GF"],
      },
      {
        name: "Bone-In Ribeye",
        detail: "20 oz · 40-day dry-aged",
        description: "Marbled, nutty, unapologetic.",
        price: "84",
        tags: ["GF", "SIGNATURE"],
      },
      {
        name: "Picanha",
        detail: "12 oz · coal-roasted",
        description: "Brazilian cap steak, chimichurri, sea salt.",
        price: "54",
        tags: ["GF", "DF"],
      },
      {
        name: "A5 Japanese Wagyu",
        detail: "4 oz · Miyazaki",
        description: "Seared on binchotan. Order with reverence.",
        price: "MP",
        tags: ["GF", "SIGNATURE"],
      },
      {
        name: "The Tomahawk",
        detail: "40 oz · for two · 45-day dry-aged",
        description: "Carved tableside over the ember cart.",
        price: "165",
        tags: ["GF", "SIGNATURE"],
      },
    ],
  },
  {
    id: "from-land-sea",
    title: "Land & Sea",
    items: [
      {
        name: "Whole Branzino",
        description: "Salt-baked, charred herbs, brown butter",
        price: "46",
        tags: ["GF"],
      },
      {
        name: "Braised Short Rib",
        description: "72-hour, smoked bone jus, bone marrow mash",
        price: "52",
        tags: ["GF"],
      },
      {
        name: "Cold-Water Lobster",
        description: "Split & fire-roasted, drawn brass butter",
        price: "MP",
        tags: ["GF"],
      },
      {
        name: "Ember Half Chicken",
        description: "Brick-pressed, lemon, charred scallion",
        price: "38",
        tags: ["GF", "DF"],
      },
    ],
  },
  {
    id: "sides",
    title: "The Sides",
    items: [
      { name: "Truffle Pommes Frites", description: "Parmesan, herbs", price: "14", tags: ["V"] },
      { name: "Charred Broccolini", description: "Calabrian chili, garlic", price: "13", tags: ["V", "GF", "SPICY"] },
      { name: "Creamed Spinach", description: "Oak-smoked, nutmeg", price: "13", tags: ["V", "GF"] },
      { name: "Sweet Plantains", description: "Maduros, sea salt, lime", price: "11", tags: ["V", "GF", "DF"] },
      { name: "Wild Mushrooms", description: "Sherry, thyme, ember butter", price: "15", tags: ["V", "GF"] },
      { name: "Lobster Mac", description: "Aged cheddar, brioche crumb", price: "24" },
    ],
  },
  {
    id: "sauces",
    title: "From the Brass — Sauces & Enhancements",
    items: [
      { name: "Chimichurri", price: "4", tags: ["V", "GF", "DF"] },
      { name: "Green Peppercorn", price: "5", tags: ["GF"] },
      { name: "Béarnaise", price: "5", tags: ["GF"] },
      { name: "Oscar Style", description: "Crab, asparagus, béarnaise", price: "22" },
      { name: "Seared Foie Gras", price: "28" },
    ],
  },
  {
    id: "desserts",
    title: "To Finish",
    items: [
      { name: "Key Lime, Deconstructed", description: "Florida lime, torched meringue, graham", price: "15", tags: ["V"] },
      { name: "Tres Leches", description: "Burnt-cinnamon, espresso cream", price: "14", tags: ["V"] },
      { name: "Basque Cheesecake", description: "Smoked honey, sea salt", price: "15", tags: ["V"] },
      { name: "Dark Chocolate Ember", description: "Smoked ganache, cocoa nib, olive oil", price: "16", tags: ["V"] },
    ],
  },
];

export const tagLegend: Record<string, string> = {
  GF: "Gluten-free",
  V: "Vegetarian",
  DF: "Dairy-free",
  RAW: "Served raw",
  SPICY: "Spicy",
  SIGNATURE: "House signature",
};
