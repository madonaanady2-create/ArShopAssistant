# AR-Powered Virtual Shopping Assistant - Design Guidelines

## Design Approach

**Reference-Based Approach**: Drawing inspiration from modern e-commerce leaders (Shopify, Wayfair) combined with AR pioneers (IKEA Place, Apple AR experiences). This creates a trustworthy shopping experience enhanced with cutting-edge AR technology.

**Core Principles**:
- Mobile-first AR experience with seamless desktop browsing
- Product-centric visual hierarchy
- Frictionless path to AR visualization
- Clean, modern aesthetic that builds trust

---

## Typography System

**Font Selection**: Use Google Fonts CDN
- Primary: Inter (body text, UI elements, product details)
- Display: Outfit or Sora (headings, hero text, AR prompts)

**Type Scale**:
- Hero/AR Prompts: text-5xl to text-6xl, font-bold
- Section Headers: text-3xl to text-4xl, font-semibold
- Product Titles: text-xl to text-2xl, font-medium
- Body Text: text-base, font-normal
- Labels/Meta: text-sm, font-medium
- Micro Text: text-xs

---

## Layout System

**Spacing Primitives**: Tailwind units of 2, 4, 6, 8, 12, 16, 20
- Tight spacing: p-2, gap-2
- Standard spacing: p-4, gap-4, m-6
- Generous spacing: p-8, py-12, py-16
- Section spacing: py-20

**Container Strategy**:
- Page containers: max-w-7xl mx-auto px-4
- Product grids: max-w-6xl
- AR viewer: Full viewport takeover (fixed inset-0)
- Shopping cart: max-w-md

**Grid Patterns**:
- Product catalog: grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4
- Featured products: grid-cols-1 md:grid-cols-2
- Category cards: grid-cols-2 lg:grid-cols-4

---

## Page Structure & Components

### Navigation Header
- Sticky top navigation (sticky top-0 z-50)
- Logo left, category navigation center, cart/user icons right
- Search bar integrated into header (expandable on mobile)
- Shopping cart counter badge on cart icon
- Height: h-16 md:h-20

### Hero Section
- Height: min-h-[60vh] md:min-h-[70vh]
- Large hero image showcasing AR experience in action
- Overlay with semi-transparent backdrop (backdrop-blur-md)
- Centered hero text with AR value proposition
- Primary CTA: "Start Shopping in AR" with backdrop-blur-lg
- Floating product preview cards (3-4 featured items) with subtle shadow
- Icons: Heroicons (view-in-ar, shopping-cart, sparkles)

### Product Catalog Grid
- Card-based layout with hover elevation
- Each card includes:
  - Product image (aspect-ratio-square)
  - AR badge/icon indicator
  - Product name (text-lg font-medium)
  - Price (text-xl font-bold)
  - Quick "View in AR" button (prominent)
  - Add to cart button (secondary action)
- Category filter tabs above grid (horizontal scroll on mobile)
- Sort dropdown (price, popularity, newest)

### 3D Product Viewer (Pre-AR)
- Full-width viewer section on product detail page
- 360° rotation controls
- Zoom in/out buttons
- Dimension toggle overlay
- "View in Your Space" AR CTA button (large, prominent)
- Thumbnail gallery below main viewer

### AR Viewer Interface (WebXR)
- Full-screen takeover overlay
- Top bar: Close button, product name, placement instructions
- AR controls overlay (bottom):
  - Rotation controls
  - Scale controls (pinch gesture hint)
  - Placement reset button
  - "Add to Cart from AR" quick action
- Placement guide: Visual indicators for surface detection
- Loading state: Skeleton with "Initializing AR..." message

### Shopping Cart (Slide-out Panel)
- Slides from right: w-full sm:w-96 md:w-[28rem]
- Header: "Your Cart" with item count
- Cart items list:
  - Product thumbnail (aspect-square, small)
  - Product name and variant
  - Quantity controls (+/-)
  - Price per item
  - Remove button
- Sticky footer with subtotal and "Checkout" CTA
- Empty state: Illustration + "Start shopping" CTA

### Product Detail Page
- Two-column layout (md:grid-cols-2)
- Left: 3D viewer + AR CTA
- Right:
  - Product title (text-3xl)
  - Star rating + review count
  - Price (text-4xl font-bold)
  - Variant selector (size/color chips)
  - Add to cart section
  - AR badge callout
  - Product description
  - Specifications accordion
  - Related products carousel

### Category Landing Pages
- Category hero banner (min-h-[40vh])
- Breadcrumb navigation
- Filter sidebar (drawer on mobile):
  - Price range slider
  - AR-enabled toggle
  - Material filters
  - Dimension filters
- Product grid (as above)

### Footer
- Multi-column layout (grid-cols-2 md:grid-cols-4)
- Columns: Shop, AR Help, About, Support
- Newsletter signup section above columns
- Social media icons (Heroicons: social icons)
- Trust badges row (secure checkout, AR compatible devices)
- Bottom bar: Copyright, legal links

---

## Component Library

### Buttons
**Primary CTA**: Rounded-lg px-6 py-3 text-base font-semibold
**Secondary**: Rounded-lg px-6 py-3 border-2
**Icon Button**: Rounded-full p-2 with icon only
**AR CTA**: Extra prominent - px-8 py-4 text-lg with AR icon

### Cards
**Product Card**: Rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow
**Category Card**: Rounded-2xl with image overlay and centered text
**Feature Card**: Rounded-lg p-6 with icon, heading, description

### Form Elements
**Inputs**: Rounded-lg px-4 py-3 border focus:ring-2
**Select Dropdowns**: Same as inputs with chevron icon
**Quantity Controls**: Inline flex with minus/plus buttons, number display center
**Checkboxes/Radios**: Rounded with custom styling

### Badges
**AR Badge**: Rounded-full px-3 py-1 text-xs font-bold with AR icon
**Sale Badge**: Positioned absolute top-2 right-2
**Stock Badge**: Small, rounded-md

### Modals/Overlays
**Backdrop**: Fixed inset-0 backdrop-blur-sm
**Content**: Centered modal with rounded-2xl shadow-2xl max-w-2xl
**AR Overlay**: Full-screen fixed inset-0 z-50

---

## Responsive Behavior

**Mobile (< 640px)**:
- Single column layouts
- Hamburger navigation menu
- Stack AR controls vertically
- Simplified product grids (grid-cols-1)
- Bottom sheet for filters

**Tablet (640px - 1024px)**:
- Two-column product grids
- Expanded category navigation
- Side drawer for cart

**Desktop (> 1024px)**:
- Multi-column layouts
- Persistent category navigation
- Hover states on product cards
- Side panel cart

---

## Images

### Hero Section
**Large Hero Image**: Full-width background image showing a lifestyle scene of someone using AR to visualize furniture in their living room. Should convey the magic of AR shopping - bright, modern interior with realistic product placement. Image should have moderate overlay to ensure text readability.

### Product Images
**Product Photography**: Clean, high-quality product shots on neutral backgrounds for grid view. Multiple angles for detail pages.

**AR Demo Images**: Throughout the site, include lifestyle images showing products visualized in real spaces via AR to demonstrate the feature.

### Category Headers
**Category Banners**: Contextual lifestyle images for each category (e.g., living room for furniture, kitchen for appliances).

### Empty States
**Illustrations**: Use simple, friendly illustrations for empty cart, no search results, AR not supported messages.

---

## Animations

**Minimal, purposeful animations**:
- Card hover: Subtle lift (translateY(-2px)) and shadow increase
- AR button pulse: Gentle scale animation to draw attention
- Product image: Smooth fade-in on load
- Cart slide-in: Smooth transform transition
- 3D model rotation: Smooth, physics-based rotation
- Loading states: Subtle skeleton shimmer

**No animations for**:
- Page transitions
- Scroll-triggered effects
- Excessive micro-interactions

---

## AR-Specific UX Patterns

**AR Availability Indicators**:
- Prominent AR badges on all compatible products
- "View in AR" buttons stand out visually from standard CTAs
- AR capability check on page load with subtle notification if unavailable

**AR Onboarding**:
- First-time AR users see brief overlay tutorial
- Surface detection hints during placement
- Gesture guides (rotate, scale, move)

**AR to Purchase Flow**:
- "Add to Cart" button visible in AR view
- Seamless transition from AR back to checkout
- Save AR placement option for later reference

This design creates a premium, trustworthy shopping experience where AR enhancement feels natural and exciting, not gimmicky. The interface prioritizes product discovery and conversion while making AR visualization feel like a delightful superpower.