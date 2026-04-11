import type { Metadata } from "next";
import React from "react";
import MenuCategoryListingPage from "@/components/section/menu-category-listing";

const fastFoodCategoryOrder = [
  "BURGERS (HALAL)",
  "CLASSIC PIZZAS",
  "SPECIAL PIZZAS",
  "WHITE PIZZAS",
  "CALZONE",
  "KEBAB",
];

export const metadata: Metadata = {
  title: "Fast Food Menu | Al Taj Ristorante Chiari",
  description:
    "Fast food menu di Al Taj Ristorante a Chiari con burger halal, pizza e kebab. Keyword focus: al taj ristorante, al taj chiari, ristorante indiano chiari, altaj menu. Scopri panino kebab, piadina kebab e piatto kebab.",
  keywords: [
    "al taj ristorante",
    "al taj chiari",
    "ristorante indiano chiari",
    "altaj menu",
    "fast food chiari",
    "kebab chiari",
    "burger halal chiari",
    "pizza chiari",
    "take away chiari",
    "delivery chiari",
  ],
};

const FastFoodPage = () => {
  return (
    <MenuCategoryListingPage
      titlePrefix="Fast Food"
      titleAccent="Menu"
      description="Al Taj Ristorante propone il suo fast food a Chiari con burger halal, pizze cotte al momento e kebab artigianale. Cerca al taj ristorante, al taj chiari, ristorante indiano chiari e altaj menu per trovarci subito online."
      categoryOrder={fastFoodCategoryOrder}
    />
  );
};

export default FastFoodPage;
