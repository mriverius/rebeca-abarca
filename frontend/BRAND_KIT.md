# 🌹 Renacer del Alma - Brand Implementation Guide

## Overview
This website implements the "Digital Temple" aesthetic with Ethereal Minimalist / Glass-morphism / Rose Gold Alchemy design principles.

## 🎨 Color Palette (Already Implemented)

| Color Name | Hex Code | Tailwind Class | Usage |
|------------|----------|----------------|-------|
| Champagne Silk | `#F3EFE0` | `bg-champagne` | Main canvas (80% of site) |
| Rose Gold Dust | `#B76E79` | `text-rosegold` | CTAs, links, active states |
| Warm Sand | `#D7C49E` | `bg-sand` | Dividers, card backgrounds |
| Ebony Mist | `#3D3D3D` | `text-ebony` | Primary text |
| Cloud White | `#FFFFFF` | `bg-cloud` | Highlights, overlays |

## ✍️ Typography Stack (Already Implemented)

### H1 & H2 - Montserrat Light
```tsx
className="font-montserrat font-light uppercase tracking-widest text-rosegold"
```
- All caps
- Letter spacing: 0.3em (tracking-widest)
- Color: Rose Gold

### H3 - Tenor Sans
```tsx
className="font-tenor text-rosegold"
```
- Sentence case
- Perfect for testimonials and accents

### Body & Navigation - Lato
```tsx
className="font-lato"
```
- Line height: 1.8 (automatically applied globally)
- Clean, modern, functional

## 🪟 Glass-morphism Effects (Ready to Use)

### Navigation Bar & Overlays
```tsx
className="glass"
```
- Creates frosted glass effect
- 10px backdrop blur
- Semi-transparent white background

### Cards
```tsx
className="glass-card"
```
- More visible than `.glass`
- Perfect for content cards
- Warm Sand border

## ✨ Interactive Elements

### Buttons with Energy Hover
```tsx
className="glow-rosegold transition-all duration-500"
```
- 0.5s smooth transition
- Rose gold glow on hover
- Subtle outer shadow

### Noise Texture Overlay
```tsx
className="noise-texture relative"
```
- Adds 3% opacity grainy texture
- Applied via ::before pseudo-element
- Maintains "high-digital" aesthetic

### Negative Space Breathing Room
```tsx
className="breathe"
```
- 4rem padding on mobile
- 6rem padding on desktop
- Use when sections feel crowded

## 🖼️ Image Styling

All images automatically receive:
```css
filter: sepia(10%) contrast(95%) brightness(105%);
```

To disable for specific images:
```tsx
className="filter-none"
```

## 🌊 Parallax Flower of Life

For background decorative elements:
```tsx
<motion.div
  style={{
    y: useTransform(scrollYProgress, [0, 1], [0, -100])
  }}
>
  <FlowerOfLife />
</motion.div>
```

## 📱 Icon Guidelines

- Weight: Thin line (1px stroke)
- Style: Geometric Alchemy
- Color: `text-rosegold`
- Suggested icons:
  - Labyrinth for "The Journey"
  - Sound Wave for "Healing"
  - Star for "Intuition"

## 🌅 Frequency Footer Implementation

```tsx
<footer className="relative overflow-hidden">
  <div className="absolute inset-0 z-0">
    <Image 
      src="/images/horizon.jpg" 
      alt="" 
      fill 
      className="object-cover opacity-30"
    />
  </div>
  <div className="relative z-10 breathe">
    <h3 className="font-tenor text-center mb-8">Stay in the Frequency</h3>
    {/* Newsletter signup and social links */}
  </div>
</footer>
```

## 🎬 Hero Video Background (Optional)

```tsx
<video
  autoPlay
  muted
  loop
  playsInline
  className="absolute inset-0 w-full h-full object-cover opacity-40"
  style={{ filter: 'sepia(20%) brightness(110%)' }}
>
  <source src="/videos/ocean-waves.mp4" type="video/mp4" />
</video>
```

## 🔧 Quick Reference Classes

| Purpose | Tailwind Classes |
|---------|-----------------|
| Section Background | `bg-champagne` or `bg-sand` |
| Text Color | `text-ebony` (body), `text-rosegold` (headings) |
| CTA Button | `bg-rosegold text-cloud glow-rosegold` |
| Card | `glass-card rounded-lg` |
| Spacious Section | `breathe` |
| Accent Border | `border border-sand` |

## 🌟 CSS Variables Available

```css
--font-montserrat
--font-tenor
--font-lato
```

## 📋 Implementation Checklist

- [x] Color palette configured in Tailwind
- [x] Typography fonts loaded (Montserrat, Tenor Sans, Lato)
- [x] Glass-morphism utilities created
- [x] Image filters applied globally
- [x] Rose gold shimmer effect updated
- [x] Scrollbar themed
- [x] Selection colors updated
- [x] Noise texture utility created
- [x] Breathing space utility created
- [ ] Update all sections to use new colors
- [ ] Add glass-morphism to navbar
- [ ] Implement parallax on Flower of Life
- [ ] Update buttons to use rose gold
- [ ] Add frequency footer
- [ ] (Optional) Add hero video background

## 💡 Design Philosophy

**"Priority is Negative Space"** - If a section feels crowded, double the padding using the `.breathe` class. Users should feel like they have "room to breathe" as they navigate.

## 🚀 Next Steps

Run the development server to see the brand updates:
```bash
npm run dev
```

The base styling is now in place. Individual components will need to be updated to use the new color scheme and glass-morphism effects.
