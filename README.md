# TV Lemberg Website

A modern, responsive website for the Turnverein 1891 Lemberg e.V.

## Mobile-First Sidebar Design

The website now features a smart mobile-friendly sidebar system that ensures all important content is accessible on all devices:

### Desktop Experience

- Traditional sidebar visible on large screens (lg: breakpoint and above)
- Full-width content with sidebar on the right
- All news, events, and partner information readily available

### Mobile Experience

- **Sidebar hidden** on mobile devices to maximize content space
- **Quick Access Section**: Key sidebar content (Termine 2025, partner logos) displayed inline at the top of the homepage
- **Floating Action Button**: Info button (ℹ️) in bottom-right corner for easy access
- **Bottom Sheet**: Slides up from bottom when info button is tapped, showing full sidebar content
- **Smart Animations**: Smooth slide-up/down transitions with backdrop overlay

### Key Features

- **Responsive Design**: Automatically adapts to screen size
- **Touch-Friendly**: Large touch targets and intuitive gestures
- **Accessibility**: Keyboard navigation support (ESC key to close)
- **Performance**: Smooth animations with CSS transitions
- **Content Preservation**: No information is lost on mobile devices

### Technical Implementation

- Uses Tailwind CSS for responsive design
- React hooks for state management
- CSS animations for smooth transitions
- Mobile-first approach with progressive enhancement

## Development

```bash
# Install dependencies
pnpm install

# Run development server
pnpm dev

# Build for production
pnpm build
```

## Technologies Used

- Next.js
- React
- TypeScript
- Tailwind CSS
- DaisyUI
