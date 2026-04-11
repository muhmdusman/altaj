import type { Metadata } from "next";
import React from "react";
import MenuCategoryListingPage from "@/components/section/menu-category-listing";

const desiFoodCategoryOrder = [
  "APPETIZERS",
  "TANDOOR AND GRILL SPECIALTIES",
  "VEGETARIAN",
  "DAAL CURRY SPECIALTY",
  "MAIN COURSES - CHICKEN SPECIALTIES",
  "MAIN COURSES - LAMB SPECIALTIES",
  "FISH CURRY SPECIALTIES",
  "BASMATI RICE",
  "SOUPS",
  "TANDOOR BREAD",
  "INDIAN DESSERTS",
  "DOLCE",
  "ETHNIC DRINKS",
];

export const metadata: Metadata = {
  title: "Desi Food Menu | Al Taj Ristorante",
  description:
    "Selezione desi food di Al Taj Ristorante: daal, vegetarian, curry, tandoor, riso basmati e dolci tradizionali.",
};

const DesiFoodPage = () => {
  return (
    <MenuCategoryListingPage
      titlePrefix="Desi Food"
      titleAccent="Menu"
      description="Dal daal alle specialita vegetariane, passando per curry, tandoor e riso basmati: scopri la selezione desi food di Al Taj Ristorante."
      categoryOrder={desiFoodCategoryOrder}
    />
  );
};

export default DesiFoodPage;
