'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Button from '../ui/button';

const Header = () => {
  // State to control mobile menu visibility
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Function to toggle mobile menu open/close
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const menuSectionItems = [
    { name: 'Full Menu', href: '/menu' },
    { name: 'Fast Food', href: '/fast-food' },
    { name: 'Desi Food', href: '/desi-food' },
  ];

  const menuItems = [
    { name: 'Home', href: '/#' },
    { name: 'Order', href: '/menu' },
    { name: 'Our Story', href: '/ourstory' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <>
      {/* MAIN HEADER */}
      <header 
        className="backdrop-blur-md border-2 relative top-4 z-50 rounded-xl lg:rounded-2xl mt-2 lg:mt-2 mx-1 lg:mx-0" 
        style={{ 
          borderColor: '#a57f2cff',
          background: '#100C07'
        }}
        // CUSTOMIZATION: 
        // - Premium gradient background with golden accent
        // - Change border radius: modify 'rounded-xl lg:rounded-2xl'
        // - Change border color: modify the hex value in style prop
        // - Change positioning: modify 'top-4', 'mt-2 lg:mt-4', 'mx-1 lg:mx-2'
        // - Adjust golden shade: modify 'rgba(165, 127, 44, 0.15)' opacity value
      >
        <div className="max-w-7xl mx-auto px-3 sm:px-8 lg:px-12">
          {/* HEADER CONTENT CONTAINER */}
          <div className="flex items-center justify-between h-24 lg:h-28">
            {/* CUSTOMIZATION: 
                - Mobile height increased: 'h-24' (was h-20)
                - Desktop height: 'lg:h-28'
                - Change heights as needed
            */}
            
            {/* LOGO SECTION */}
            <div className="flex-shrink-0 -ml-2 lg:ml-0">
              {/* CUSTOMIZATION: 
                  - Logo positioning: modify '-ml-2 lg:ml-0' (negative margin moves left)
                  - Logo size: modify 'h-16 lg:h-20' (height classes)
                  - Logo source: change src="/logo.jpg" path
              */}
              <Image
                src="/logo.jpg"
                alt="Al Taj Ristorante"
                width={300}
                height={300}
                className="h-20 lg:h-24 w-auto"
              />
            </div>

            {/* DESKTOP NAVIGATION - Hidden on mobile (lg:flex) */}
            <nav className="hidden lg:flex items-center space-x-8">
              {/* CUSTOMIZATION: 
                  - Change spacing between items: modify 'space-x-8'
                  - Show on smaller screens: change 'hidden lg:flex' to 'hidden md:flex'
              */}
              <div className="relative group">
                <Link
                  href="/menu"
                  className="text-white hover:text-amber-400 transition-colors duration-300 font-serif text-lg font-medium flex items-center gap-2"
                >
                  Menu
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </Link>

                <div className="absolute left-0 top-full pt-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                  <div className="w-56 rounded-xl border border-amber-400/25 bg-[#100C07] shadow-2xl p-2">
                    {menuSectionItems.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="block rounded-lg px-3 py-2 text-white hover:text-amber-400 hover:bg-amber-400/10 transition-colors duration-300 font-serif text-base"
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              {menuItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-white hover:text-amber-400 transition-colors duration-300 font-serif text-lg font-medium"
                  // CUSTOMIZATION:
                  // - Text color: modify 'text-white'
                  // - Hover color: modify 'hover:text-amber-400'
                  // - Font family: modify 'font-serif' (or use font-sans, font-mono)
                  // - Font size: modify 'text-lg'
                  // - Font weight: modify 'font-medium'
                >
                  {item.name}
                </a>
              ))}
            </nav>

            {/* DESKTOP RIGHT SIDE - Hidden on mobile */}
            <div className="hidden lg:flex items-center space-x-5">
              {/* CUSTOMIZATION: Change spacing between elements with 'space-x-5' */}
              
              {/* PHONE NUMBER SECTION WITH CALL FOR RESERVATION */}
              <div className="flex flex-col items-center ">
                {/* PHONE NUMBER LINK */}
                <a
                  href="tel:+390300983508"
                  className="flex items-center text-white hover:text-amber-400 transition-colors duration-300"
                  // CUSTOMIZATION: Change phone number in href attribute
                >
                  {/* PHONE ICON */}
                  <svg
                    className="w-5 h-5 mr-2"
                    // CUSTOMIZATION: Change icon size with 'w-5 h-5' and spacing with 'mr-2'
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M2 3.5A1.5 1.5 0 013.5 2h1.148a1.5 1.5 0 011.465 1.175l.716 3.223a1.5 1.5 0 01-1.052 1.767l-.933.267c-.41.117-.643.555-.48.95a11.542 11.542 0 006.254 6.254c.395.163.833-.07.95-.48l.267-.933a1.5 1.5 0 011.767-1.052l3.223.716A1.5 1.5 0 0118 15.352V16.5a1.5 1.5 0 01-1.5 1.5H15c-1.149 0-2.263-.15-3.326-.43A13.022 13.022 0 012.43 8.326 13.019 13.019 0 012 5V3.5z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="font-serif">(+39 030 098 3508)</span>
                  {/* CUSTOMIZATION: Change displayed phone number here */}
                </a>
                
                {/* CALL FOR RESERVATION TEXT */}
                <span className="text-white font-serif text-sm mt-1">
                  {/* CUSTOMIZATION: 
                      - Text color: modify 'text-white'
                      - Font family: modify 'font-serif'
                      - Font size: modify 'text-sm' (options: text-xs, text-sm, text-base, text-lg)
                      - Spacing: modify 'mt-1' (margin-top)
                  */}
                  Call for reservation
                </span>
              </div>
              
              {/* DESKTOP BOOK TABLE BUTTON */}
              <Button />
              {/* CUSTOMIZATION: This imports from '../ui/button' - modify that component for button styling */}
            </div>

            {/* MOBILE RIGHT SIDE - Only visible on mobile (lg:hidden) */}
            <div className="lg:hidden flex items-center space-x-2">
              {/* CUSTOMIZATION: 
                  - Show on larger screens: change 'lg:hidden' to 'md:hidden'
                  - Change spacing: modify 'space-x-2'
              */}
              
                {/* MOBILE BOOK TABLE BUTTON */}
                <Button />
              {/* CUSTOMIZATION: 
                  - Uses the same shared '../ui/button' component as desktop
                  - Change padding, font-size, border, etc. in the styled component
              */}
              
              {/* MOBILE HAMBURGER MENU BUTTON - Only show when menu is closed */}
              {!isMobileMenuOpen && (
                <button
                  onClick={toggleMobileMenu}
                  className="text-white hover:text-amber-400 transition-colors duration-300 p-1 bg-[#d5a641] rounded-md"
                  // CUSTOMIZATION: 
                  // - Change padding: modify 'p-1'
                  // - Change colors: modify text and hover colors
                  // - Added rounded corners: 'rounded-md'
                >
                  {/* HAMBURGER ICON */}
                  <svg
                    className="w-6 h-6"
                    // CUSTOMIZATION: Change hamburger icon size with 'w-6 h-6'
                    fill="none"
                    stroke="Black"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                </button>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* MOBILE MENU OVERLAY - Dark background when menu is open */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          // CUSTOMIZATION: 
          // - Change overlay opacity: modify 'bg-black/50' (50% opacity)
          // - Change overlay color: modify 'bg-black' to other colors
          onClick={toggleMobileMenu}
          // Click overlay to close menu
        />
      )}

      {/* MOBILE SLIDE-OUT MENU */}
      <div
        className={`fixed top-0 left-0 h-full w-full backdrop-blur-sm border-r border-amber-400/20 transform transition-transform duration-300 ease-in-out z-50 lg:hidden ${
          isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
        style={{
          background: 'linear-gradient(135deg, rgba(0, 0, 0, 0.97) 0%, rgba(165, 127, 44, 0.2) 50%, rgba(0, 0, 0, 0.97) 100%)'
        }}
        // CUSTOMIZATION:
        // - Premium gradient background for mobile menu
        // - Menu width: change 'w-full' to w-80, w-64, w-72, w-96, etc.
        // - Border color: modify 'border-amber-400/20'
        // - Animation speed: modify 'duration-300' (300ms)
        // - Animation style: modify 'ease-in-out'
        // - Menu position: change 'left-0' to 'right-0' for right-side menu
        // - Slide direction: change 'translate-x-0' and '-translate-x-full' for right-side
      >
        <div className="flex flex-col h-full">
          
          {/* MOBILE MENU HEADER */}
          <div className="flex items-center justify-between p-6 border-b border-amber-400/20">
            {/* CUSTOMIZATION: 
                - Header padding: modify 'p-6'
                - Border color: modify 'border-amber-400/20'
            */}
            
            {/* MOBILE MENU LOGO */}
            <Image
              src="/logo.jpg"
              alt="Al Taj Ristorante"
              width={180}
              height={90}
              className="h-14 w-auto"
              // CUSTOMIZATION: 
              // - Logo size in mobile menu: modify 'h-14'
              // - Logo dimensions: modify width and height props
            />
            
            {/* CLOSE BUTTON (X) */}
            <button
              onClick={toggleMobileMenu}
              className="text-white hover:text-amber-400 transition-colors duration-300 p-2"
              // CUSTOMIZATION: Change button padding and colors
            >
              {/* CLOSE ICON (X) */}
              <svg
                className="w-6 h-6"
                // CUSTOMIZATION: Change close icon size
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          {/* MOBILE MENU NAVIGATION ITEMS */}
          <nav className="flex-1 px-6 py-8">
            {/* CUSTOMIZATION: 
                - Menu padding: modify 'px-6 py-8'
                - flex-1 makes this section take up remaining space
            */}
            <div className="space-y-6">
              {/* CUSTOMIZATION: Change spacing between menu items with 'space-y-6' */}
              <Link
                href="/menu"
                className="block text-white hover:text-amber-400 transition-colors duration-300 font-serif text-xl font-medium"
                onClick={toggleMobileMenu}
              >
                Menu
              </Link>

              <div className="pl-4 border-l border-amber-400/20 space-y-3">
                {menuSectionItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="block text-gray-200 hover:text-amber-400 transition-colors duration-300 font-serif text-lg"
                    onClick={toggleMobileMenu}
                  >
                    {item.name}
                  </a>
                ))}
              </div>

              {menuItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block text-white hover:text-amber-400 transition-colors duration-300 font-serif text-xl font-medium"
                  // CUSTOMIZATION:
                  // - Font size: modify 'text-xl'
                  // - Font family: modify 'font-serif'
                  // - Font weight: modify 'font-medium'
                  // - Colors: modify text and hover colors
                  onClick={toggleMobileMenu}
                  // Close menu when item is clicked
                >
                  {item.name}
                </a>
              ))}
            </div>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Header;

/*
=== CUSTOMIZATION GUIDE ===

NEW PREMIUM CHANGES:
- Mobile header height: Increased from h-20 to h-24 for better spacing
- Background: Premium gradient with subtle golden accent (15% opacity)
- Mobile menu: Matching gradient background (20% opacity for visibility)
- Gradient: Diagonal 135deg for modern look
- Golden shade: rgba(165, 127, 44, 0.15) - adjust opacity for more/less gold

PHONE SECTION CUSTOMIZATION:
- "Call for reservation" text: Modify 'text-sm' for size (text-xs, text-base, text-lg)
- Text color: Change 'text-white' to other colors
- Font family: Uses 'font-serif' - change to font-sans or font-mono
- Spacing: Modify 'mt-1' for space between phone number and text
- Layout: Uses flex-col to stack vertically - change to flex-row for horizontal

MOBILE BUTTON CUSTOMIZATION:
- Mobile now uses the same shared '../ui/button' component as desktop
- To modify its appearance, edit button.tsx
- Adjust padding, font-size, border radius, and hover animation there

MOBILE SPECIFIC CHANGES:
- Logo size: Modify 'h-14' in mobile header and mobile menu
- Button: Uses shared button.tsx component on mobile and desktop
- Menu width: Change 'w-full' for mobile menu width
- Menu slide direction: Change translate classes for right-side menu
- Header height: Now 'h-24' (increased from h-20)

DESKTOP SPECIFIC CHANGES:
- Logo size: Modify 'lg:h-20' for desktop logo height
- Header height: Change 'lg:h-28' for desktop header height
- Navigation spacing: Modify 'space-x-8' for desktop menu spacing
- Button: Uses regular Button component - edit button.tsx for styling

COLORS & GRADIENTS:
- Border: Change '#a57f2cff' in style prop
- Text: Modify 'text-white' classes
- Hover: Modify 'hover:text-amber-400' classes
- Gradient: Adjust rgba values in linear-gradient for different effects
- Golden accent: rgba(165, 127, 44, X) - change X for opacity (0.1-0.3 recommended)

SPACING:
- Header margins: Modify 'mx-1 lg:mx-2' and 'mt-2 lg:mt-4'
- Internal padding: Modify 'px-6 sm:px-8 lg:px-12'
- Element spacing: Modify 'space-x-' and 'space-y-' classes

TYPOGRAPHY:
- Font family: Change 'font-serif' to 'font-sans' or 'font-mono'
- Font size: Modify 'text-lg', 'text-xl' classes
- Font weight: Modify 'font-medium', 'font-bold' classes

RESPONSIVE BREAKPOINTS:
- sm: 640px and up
- md: 768px and up  
- lg: 1024px and up
- xl: 1280px and up
- 2xl: 1536px and up

SUGGESTIONS:
1. Add active state styling for current page in navigation
2. Add dropdown menus for navigation items with sub-pages
3. Add search functionality in mobile menu
4. Add social media links in mobile menu footer
5. Add language switcher for multi-language support
6. Add theme toggle (dark/light mode)
7. Add notification/announcement bar above header
*/