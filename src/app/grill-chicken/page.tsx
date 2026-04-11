import type { Metadata } from "next";
import React from "react";
import MenuCategoryListingPage from "@/components/section/menu-category-listing";

const grillChickenCategoryOrder = [
  "TANDOOR AND GRILL SPECIALTIES",
  "MAIN COURSES - CHICKEN SPECIALTIES",
  "KEBAB",
];

export const metadata: Metadata = {
  title: "Grill & Chicken Section | Al Taj Ristorante",
  description:
    "Sezione grill e chicken di Al Taj Ristorante con specialita alla griglia, piatti di pollo e kebab.",
};

const GrillChickenPage = () => {
  return (
    <MenuCategoryListingPage
      titlePrefix="Grill &"
      titleAccent="Chicken"
      description="Tutta la sezione grill e chicken: tandoor, specialita di pollo e kebab in un'unica pagina."
      categoryOrder={grillChickenCategoryOrder}
    />
  );
};

export default GrillChickenPage;
