import React from "react";
import DishCard from "@/components/section/dishcard";
import menuData from "@/../public/data/menu.json";

// Define the structure of a menu item
interface MenuItem {
  id: number;
  name: string;
  slug: string;
  shortDescription: string;
  description: string;
  price?: string;
  priceRange?: string;
  image: string;
  category: string;
}

function getCategorySlug(category: string): string {
  return category
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function formatCategoryLabel(category: string): string {
  return category
    .toLowerCase()
    .replace(/_/g, " ")
    .replace(/\b\w/g, (char) => char.toUpperCase());
}

// Group menu items by category
function groupItemsByCategory(items: MenuItem[]): Record<string, MenuItem[]> {
  return items.reduce((acc, item) => {
    if (!acc[item.category]) {
      acc[item.category] = [];
    }
    acc[item.category].push(item);
    return acc;
  }, {} as Record<string, MenuItem[]>);
}

// Custom category ordering for better UX
const categoryOrder = [
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
  "ETHNIC DRINKS",
  "CLASSIC PIZZAS",
  "SPECIAL PIZZAS",
  "WHITE PIZZAS",
  "CALZONE",
  "COFFEE SHOP",
  "DRINKS",
  "MENABREA BLONDE ON TAP",
  "BUBBLES",
  "RED WINE",
];

const MenuPage = () => {
  const groupedItems = groupItemsByCategory(menuData as MenuItem[]);

  // Get ordered categories, including any that might not be in our predefined order
  const orderedCategories = [
    ...categoryOrder.filter((cat) => groupedItems[cat]),
    ...Object.keys(groupedItems).filter((cat) => !categoryOrder.includes(cat)),
  ];

  return (
    <div className="min-h-screen bg-[#040402] text-white">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-[#040402] via-[#040402] to-[#D4A541]/10 py-16 lg:py-24">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('/pattern.svg')] bg-repeat"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header with Button */}
          <div className="flex flex-row items-center justify-between gap-4 mb-6">
            <div className="text-left">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white">
                Our <span className="text-[#D4A541]">Menu</span>
              </h1>
            </div>
            
            {/* Download Menu Button */}
            <div className="flex justify-end flex-shrink-0">
              <a
                href="/altaj-menu.pdf"
                download="Altaj-Menu.pdf"
                className="bg-[#D4A541] hover:bg-[#B8941A] text-[#040402] font-bold py-2 px-4 sm:py-3 sm:px-6 md:px-8 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl text-sm sm:text-base"
              >
                <svg 
                  className="w-4 h-4 sm:w-5 sm:h-5" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" 
                  />
                </svg>
                <span className="whitespace-nowrap hidden sm:inline">Download Menu</span>
                <span className="whitespace-nowrap sm:hidden">Download</span>
              </a>
            </div>
          </div>

          {/* Description */}
          <p className="text-lg sm:text-xl md:text-2xl text-gray-300 max-w-3xl leading-relaxed mb-8">
            Scopri i nostri sapori autentici provenienti da Pakistan, India e
            Italia. Ogni piatto è preparato con passione e con i migliori
            ingredienti.
          </p>

          {/* Decorative Elements */}
          <div className="flex justify-start mt-8 space-x-4">
            <div className="w-16 h-1 bg-gradient-to-r from-transparent via-[#D4A541] to-transparent"></div>
            <div className="w-4 h-1 bg-[#D4A541] rounded-full"></div>
            <div className="w-16 h-1 bg-gradient-to-r from-transparent via-[#D4A541] to-transparent"></div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {orderedCategories.map((category) => {
          const items = groupedItems[category];
          if (!items || items.length === 0) return null;

          const categorySlug = getCategorySlug(category);

          return (
            <section
              key={category}
              id={categorySlug}
              className="mb-16 lg:mb-20 scroll-mt-24"
            >
              {/* Category Header */}
              <div className="text-center mb-8 lg:mb-12">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
                  <span className="text-[#D4A541]">{formatCategoryLabel(category).charAt(0)}</span>
                  {formatCategoryLabel(category).slice(1)}
                </h2>
                <div className="flex justify-center items-center space-x-4">
                  <div className="w-12 h-0.5 bg-[#D4A541]"></div>
                  <div className="w-3 h-3 bg-[#D4A541] rounded-full"></div>
                  <div className="w-12 h-0.5 bg-[#D4A541]"></div>
                </div>
                <p className="text-gray-400 mt-4 text-lg">
                  {items.length} opzioni deliziose{" "}
                  {items.length !== 1 ? "s" : ""} available
                </p>
              </div>

              {/* Items Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
                {items.map((item) => (
                  <DishCard
                    key={item.id}
                    id={item.id}
                    name={item.name}
                    slug={item.slug}
                    shortDescription={item.shortDescription}
                    description={item.description}
                    price={item.price}
                    priceRange={item.priceRange}
                    image={item.image}
                    category={category}
                  />
                ))}
              </div>
            </section>
          );
        })}
      </div>

      {/* Call to Action */}
      <div className="bg-gradient-to-r from-[#D4A541]/10 via-[#D4A541]/5 to-[#D4A541]/10 py-16">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h3 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Ready to <span className="text-[#D4A541]">Order</span>?
          </h3>
          <p className="text-xl text-gray-300 mb-8">
            Contattaci oggi per effettuare un ordine o una prenotazione
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/393403366793?text=Ciao,%20vorrei%20effettuare%20un%20ordine"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#25d366] hover:bg-[#1ebe57] text-white font-bold py-3 px-8 rounded-lg transition-colors duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
              </svg>
              Ordina su WhatsApp
            </a>
            <a
              href="tel:+390300983508"
              className="bg-[#D4A541] hover:bg-[#B8941A] text-[#040402] font-bold py-3 px-8 rounded-lg transition-colors duration-300 transform hover:scale-105"
            >
              Chiama ora: +39 030 0983 508
            </a>
            <a
              href="/contact"
              className="bg-transparent border-2 border-[#D4A541] text-[#D4A541] hover:bg-[#D4A541] hover:text-[#040402] font-bold py-3 px-8 rounded-lg transition-all duration-300"
            >
              Contattaci
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuPage;
