// Central site configuration. Swap these values for the real business details.
export const site = {
  name: "BRASA",
  tagline: "Wood-Fired Steakhouse",
  city: "Miami",
  established: "2024",
  url: "https://brasamiami.com",
  description:
    "BRASA is a wood-fired steakhouse in Miami's Design District — prime, dry-aged cuts over white-oak embers, a raw bar pulled from Florida waters, and a cellar built for the heat.",
  address: {
    line1: "140 NE 39th Street",
    line2: "Design District, Miami, FL 33137",
    maps: "https://maps.google.com/?q=140+NE+39th+Street+Miami+FL",
  },
  phone: "(305) 555-0142",
  phoneHref: "tel:+13055550142",
  email: "reserve@brasamiami.com",
  emailHref: "mailto:reserve@brasamiami.com",
  hours: [
    { days: "Tuesday – Thursday", time: "5:30 PM – 11:00 PM" },
    { days: "Friday – Saturday", time: "5:30 PM – 1:00 AM" },
    { days: "Sunday", time: "5:00 PM – 10:00 PM" },
    { days: "Monday", time: "Closed" },
  ],
  social: [
    { label: "Instagram", href: "https://instagram.com", icon: "instagram" },
    { label: "Facebook", href: "https://facebook.com", icon: "facebook" },
    { label: "TikTok", href: "https://tiktok.com", icon: "tiktok" },
  ],
  nav: [
    { label: "Menu", href: "/menu" },
    { label: "Gallery", href: "/gallery" },
    { label: "Private Events", href: "/private-events" },
    { label: "Reservations", href: "/reservations" },
  ],
} as const;

export type Site = typeof site;
