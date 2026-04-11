import type { Metadata } from "next";
import React from "react";
import MenuCategoryListingPage from "@/components/section/menu-category-listing";

const sweetCategoryOrder = ["DOLCE", "INDIAN DESSERTS"];

export const metadata: Metadata = {
  title: "Sweet Section | Al Taj Ristorante",
  description:
    "Scopri la sezione sweet di Al Taj Ristorante con dolci tradizionali e dessert della casa.",
};

const SweetPage = () => {
  return (
    <MenuCategoryListingPage
      titlePrefix="Sweet"
      titleAccent="Section"
      description="Una selezione di dolci: dalla categoria dolce ai dessert tradizionali di Al Taj Ristorante."
      categoryOrder={sweetCategoryOrder}
    />
  );
};

export default SweetPage;
