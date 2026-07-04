# Melona Dental - AI Development Rules

## Tech Stack
*   **React 19**: Modern functional components with Hooks.
*   **TypeScript**: Strict type-checking for all components and utilities.
*   **Vite**: Fast build tool and development server.
*   **Tailwind CSS v4**: Utility-first styling using the latest CSS-based configuration.
*   **shadcn/ui**: Accessible UI primitives built on top of Radix UI.
*   **Lucide React**: Consistent and lightweight icon library.
*   **React Hook Form & Zod**: Type-safe form handling and schema validation.
*   **Sonner**: Modern toast notifications for user feedback.
*   **OKLCH Color Space**: Perceptually uniform color definitions for the "Sanctuary" aesthetic.
*   **Custom Animations**: Specialized CSS animations (float, blob, shimmer) defined in `index.css`.

## Library Usage Guidelines

### 1. UI Components
*   **Rule**: Always use components from `src/components/ui` (shadcn/ui).
*   **Modification**: If a shadcn component needs a visual tweak, wrap it in a new component in `src/components/` rather than editing the base UI file.

### 2. Styling & Colors
*   **Rule**: Use Tailwind CSS utility classes for 99% of styling.
*   **Colors**: Use the project's custom OKLCH tokens (e.g., `var(--clinic-gold)`, `var(--clinic-green)`) to maintain the brand's luxury feel.
*   **Layout**: Prioritize Flexbox and Grid for responsive designs.

### 3. Icons
*   **Rule**: Exclusively use `lucide-react`.
*   **Consistency**: Use standard sizes (usually `size={20}` or `size={18}`) unless the design specifically calls for a hero icon.

### 4. Forms & Validation
*   **Rule**: Use `react-hook-form` for all form state.
*   **Validation**: Define all validation logic using `zod` schemas to ensure runtime and compile-time safety.

### 5. Navigation
*   **Rule**: The app currently uses a state-based navigation in `App.tsx`. When adding new pages, update the `Page` type and the `renderPage` switch statement.
*   **Future**: If complexity grows, migrate to `react-router-dom` as per standard React practices.

### 6. Animations
*   **Rule**: Use the custom animation classes in `index.css` for the "Melona" feel:
    *   `animate-float`: For floating elements.
    *   `animate-blob`: For organic background shapes.
    *   `animate-pulse-glow`: For primary CTA buttons.

### 7. File Structure
*   **Pages**: Keep page-level components in `src/pages/`.
*   **Components**: Keep reusable UI fragments in `src/components/`.
*   **Hooks**: Custom logic should reside in `src/hooks/`.