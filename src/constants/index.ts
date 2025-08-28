import type { Catalog } from "@/types";

export const catalog: Catalog = {
  shoes: {
    adidas: [
      {
        name: "Samba",
        preview: "/samba/samba-preview.jpeg",
        price: 500000,
        variants: [
          {
            color: "white",
            size: "8",
            stock: 10,
            images: [
              "/samba/samba-first-white.jpeg",
              "/samba/samba-second-white.jpeg",
            ],
          },
          {
            color: "black",
            size: "9",
            stock: 4,
            images: [
              "/samba/samba-first-black.jpeg",
              "/samba/samba-second-black.jpeg",
            ],
          },
        ],
      },
      {
        name: "Superstar",
        preview: "superstar/superstar-preview.jpeg",
        price: 500000,
        variants: [
          {
            color: "white",
            size: "7",
            stock: 5,
            images: [
              "/superstar/superstar-first-white.jpeg",
              "/superstar/superstar-second-white.jpeg",
            ],
          },
          {
            color: "black",
            size: "8",
            stock: 3,
            images: [
              "/superstar/superstar-first-black.jpeg",
              "/superstar/superstar-second-black.jpeg",
            ],
          },
        ],
      },
    ],
  },
  pants: {},
  tops: {},
};
