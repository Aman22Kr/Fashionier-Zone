# fashionierZone

A responsive, multi-page Indian designer-fashion storefront concept inspired by the broad editorial and category-led structure of luxury fashion retail websites. It is an independent demo brand and is not affiliated with Aza Fashions.

## Included

- Editorial homepage, category pages, product detail pages, search, designer directory, About, Contact, FAQ, account preview, cart, saved items and policy pages.
- Responsive desktop/tablet/mobile layouts, motion transitions and `prefers-reduced-motion` support.
- Client-side search, category/price filters, sorting, product favourites, size selection, quantity controls and a demo cart.
- Namespaced browser `localStorage` for cart and favourites.
- Hash-based React Router navigation, suitable for GitHub Pages without server-side rewrites.
- Reusable product data in `src/data/catalog.js` and reusable page components.

## Run locally

Requires Node.js 18+ (Node 20 LTS recommended).

```bash
npm install
npm run dev
```

## Production build and preview

```bash
npm run build
npm run preview
```

## Deploy to GitHub Pages

1. Create a GitHub repository, for example `fashionierZone`.
2. Set the repository base path when building. For a project repository named `fashionierZone`, run:

   ```bash
   VITE_BASE_PATH=/fashionierZone/ npm run build
   ```

3. Publish `dist` to the `gh-pages` branch:

   ```bash
   npm run deploy
   ```

   The `deploy` script invokes `npm run build` itself, so if the repository is not named `fashionierZone`, set the environment variable for that command too:

   ```bash
   VITE_BASE_PATH=/YOUR-REPOSITORY-NAME/ npm run deploy
   ```

4. In GitHub, open **Settings → Pages** and select **Deploy from a branch**, then select `gh-pages` and `/ (root)`. If publishing from an organization/user site or custom domain, use `VITE_BASE_PATH=/`.
5. If deployment fails due to repository permissions, ensure your GitHub account can push to the repository and that Pages is enabled. The `gh-pages` package publishes the generated `dist` directory to the `gh-pages` branch.

Alternatively, the included GitHub Actions workflow can build and publish to Pages. Configure repository **Settings → Pages → Build and deployment → Source: GitHub Actions**, and update the workflow's `VITE_BASE_PATH` to match the repository name.

## Replace the brand or reference settings

- Edit product/category data and image IDs in `src/data/catalog.js`.
- Update brand wording, colors, typography and spacing in `src/styles.css`, `tailwind.config.js` and `index.html`.
- Update `VITE_BASE_PATH` for the destination repository. The default `/` works for local development and custom domains.
- Motion is intentionally set to a normal, noticeable level and automatically respects reduced-motion preferences.

## Demo limitations and content notes

- Product names, designers, prices and catalogue descriptions are illustrative sample data. They are not actual inventory or price quotes.
- Images are loaded from Unsplash's image CDN and require internet access; the product card includes a fallback image if an image request fails. For a fully offline deployment, download properly licensed image assets and store them in `src/assets`.
- This app has no backend. Account and contact/newsletter forms are demonstrations and do not submit to a server. Checkout does not process payments or create orders.
- `localStorage` persists only in the current browser profile on the current device. It is not an account, does not synchronize across devices, and can be cleared by the browser.
- No passwords, payment information or authentication secrets are stored.
- This is a practical visual interpretation, not a pixel-perfect copy. Only accessible page structures and broad design patterns were used as reference; inaccessible features are not claimed to be reproduced.
