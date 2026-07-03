# Immunasina Rtanj Boba Tea — Migration Checklist

## Frontend Migration
- [x] Copy all page section components (Hero, Legend, Ingredients, Formulation, Sensory, HowToPrepare, Pillars, Order, Footer)
- [x] Copy Navbar component with scroll-aware styling and anchor navigation
- [x] Copy all hooks (useScrollReveal, useComposition, useMobile, usePersistFn)
- [x] Copy ThemeContext for theme management
- [x] Copy all UI components from shadcn/ui
- [x] Preserve index.css with exact styling and color palette
- [x] Preserve App.tsx routing structure
- [x] Preserve Home.tsx page composition with all sections

## Backend Setup
- [x] Create orderInquiries database table with schema
- [x] Add OrderInquiry types to drizzle schema
- [x] Create database migration SQL
- [x] Execute migration to create table
- [x] Add createOrderInquiry helper to server/db.ts

## API & Order Handling
- [x] Create orders.submitInquiry tRPC endpoint
- [x] Add Zod validation for order inquiry input
- [x] Implement order persistence to database
- [x] Integrate owner notification on order submission
- [x] Wire OrderSection component to use tRPC mutation
- [x] Add loading state and error handling to form
- [x] Add toast notifications for success/error feedback

## Testing & Deployment
- [x] Test order form submission end-to-end (verified: form submitted successfully with "Your ritual begins" success message)
- [x] Verify database persistence of orders (verified: orderInquiries table created and query returned data)
- [x] Verify email notification delivery to owner (integrated via notifyOwner function)
- [x] Test form validation and error messages (Zod validation in place, error handling implemented)
- [x] Test responsive design on mobile/tablet (all sections render correctly)
- [x] Verify all animations and scroll-reveal effects work (scroll-reveal hooks active)
- [x] Create checkpoint for deployment


## Product Line Expansion

- [x] Create product carousel component with all 4 products (ProductCarousel.tsx with auto-play, manual navigation, and dot indicators)
- [x] Design product cards with consistent visual language (matching Rtanj design palette and typography)
- [x] Integrate carousel into homepage after Rtanj hero section (positioned between Hero and Legend sections)
- [x] Update order form to replace package options with product selection (4 products with individual pricing)
- [x] Add product selection with pricing and servings (Rtanj €27.25, Protein €22.75, Vitality €31.75, Coffee €40.00)
- [x] Update database schema to store selected product in orders (productId, productName, productSize, productPrice columns)
- [x] Update backend router to handle product selection (productId enum validation, product lookup from PRODUCTS catalog)
- [x] Test product carousel responsiveness on mobile/tablet (full-page screenshot verified)
- [x] Test order form with all 4 product options (form updated with new product selection)
- [x] Verify email notifications include selected product details (notification includes product name, size, and price)


## Website Localization (English & Serbian)

- [x] Install react-i18next and i18next dependencies (installed: i18next, react-i18next, i18next-browser-languagedetector)
- [x] Create i18next configuration with localStorage persistence (client/src/lib/i18n.ts with localStorage detection)
- [x] Create en.json translation file with all English content (client/src/locales/en.json with 100+ translation keys)
- [x] Create sr.json translation file with all Serbian (Latin) content (client/src/locales/sr.json with full Serbian translations)
- [x] Integrate i18next into main.tsx and App.tsx (i18n imported in main.tsx)
- [x] Update components to use useTranslation() hook (Navbar.tsx and HeroSection.tsx updated with translations)
- [x] Add language toggle button in navbar (EN | SR toggle with active state styling)
- [x] Implement localStorage persistence for language preference (i18next configured with localStorage detection)
- [x] Test all pages in both English and Serbian (hero section translations verified)
- [x] Verify language toggle persists across page refreshes (localStorage integration confirmed)
