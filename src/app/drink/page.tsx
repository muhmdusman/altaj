import type { Metadata } from "next";
import React from "react";
import MenuCategoryListingPage from "@/components/section/menu-category-listing";

const drinkCategoryOrder = [
  "ETHNIC DRINKS",
  "COFFEE SHOP",
  "DRINKS",
  "MENABREA BLONDE ON TAP",
  "BUBBLES",
  "WHITE WINE",
  "RED WINE",
];

export const metadata: Metadata = {
  title: "Drink Section | Al Taj Ristorante",
  description:
    "Sezione drink di Al Taj Ristorante con bevande etniche, caffe, soft drinks, birre e vini.",
};

const DrinkPage = () => {
  return (
    <MenuCategoryListingPage
      titlePrefix="Drink"
      titleAccent="Section"
      description="Le nostre bevande in un'unica sezione: ethnic drinks, coffee shop, soft drinks, birre e vini."
      categoryOrder={drinkCategoryOrder}
    />
  );
};

export default DrinkPage;
