# Forever E-Commerce App

A modern, responsive e-commerce web application built with React and Vite. This project demonstrates best practices in frontend development, including modular component structure, state management, routing, accessibility, and performance optimization.

## Features

- **Modern Stack:** Built with React 19, Vite, and Tailwind CSS for fast development and performance.
- **Component-Based Architecture:** Organized into reusable components for maintainability.
- **Routing:** Uses `react-router-dom` for seamless navigation between pages.
- **State Management:** Utilizes React Context API for global state (cart, search, navigation, etc.).
- **Responsive Design:** Fully responsive layout for mobile and desktop devices.
- **Accessibility:** Includes ARIA roles and keyboard navigation support.
- **Performance:** Implements code splitting and lazy loading for faster load times.
- **User Feedback:** Integrated with `react-toastify` for notifications.
- **Error Handling:** Uses an Error Boundary to gracefully handle runtime errors.
- **Product Catalog:** Browse, search, and filter products with detailed views.
- **Cart & Orders:** Add to cart, place orders, and view order history.
- **Authentication:** Login page included (expandable for real auth).
- **Customizable:** Easily extend with new features or backend integration.

## Project Structure

```
e-commerce app/
  ├── public/
  ├── src/
  │   ├── assets/           # Images and static assets
  │   ├── components/       # Reusable UI components
  │   ├── contex/           # Context providers
  │   ├── pages/            # Page-level components
  │   ├── App.jsx           # Main app component
  │   ├── main.jsx          # Entry point
  │   └── index.css         # Global styles (Tailwind)
  ├── package.json
  ├── vite.config.js
  ├── eslint.config.js
  └── README.md
```

## Getting Started

1. **Install dependencies:**
   ```sh
   npm install
   ```
2. **Run the development server:**
   ```sh
   npm run dev
   ```
3. **Open your browser:**
   Visit [http://localhost:5173](http://localhost:5173) to view the app.

## Scripts
- `npm run dev` — Start the development server
- `npm run build` — Build for production
- `npm run preview` — Preview the production build
- `npm run lint` — Lint the codebase

## Customization & Extending
- Add authentication, payment integration, or backend APIs as needed.
- Update product data in `src/assets/assets.js`.
- Extend components or pages for new features.

## License
This project is for educational and demonstration purposes.

---

**Forever E-Commerce** — Modern, fast, and beautiful shopping experience.
