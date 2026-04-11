import React from "react";
import MenuCategoryListingPage from "@/components/section/menu-category-listing";

const categoryOrder = [
  "APPETIZERS",
  "TANDOOR AND GRILL SPECIALTIES",
  "KEBAB",
  "BURGERS (HALAL)",
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
  "CLASSIC PIZZAS",
  "SPECIAL PIZZAS",
  "WHITE PIZZAS",
  "CALZONE",
  "COFFEE SHOP",
  "DRINKS",
  "MENABREA BLONDE ON TAP",
  "BUBBLES",
  "WHITE WINE",
  "RED WINE",
];

const MenuPage = () => {
  return (
    <MenuCategoryListingPage
      titlePrefix="Our"
      titleAccent="Menu"
      description="Scopri i nostri sapori autentici provenienti da Pakistan, India e Italia. Ogni piatto e preparato con passione e con i migliori ingredienti."
      categoryOrder={categoryOrder}
      includeRemainingCategories
    />
  );
};

export default MenuPage;
