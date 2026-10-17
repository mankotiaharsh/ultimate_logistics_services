# Ultimate Logistics Services — React website

Website for **Ultimate Logistics Services**, a road freight and transport company in Punjab, India. Built with React (Vite).

**Registered office:** Ultimate Logistics Services (Prop. Rajinder Kumar Sharma), Mansar Mandir Road, Near Maini Di Chakki, Mukerian, District Hoshiarpur, Punjab 144211

## Run it on your computer

1. Install Node.js 18 or newer from https://nodejs.org
2. Clone or download this repository, open a terminal inside it and run:

```bash
npm install
npm run dev
```

The site opens at http://localhost:3000

## Build for hosting

```bash
npm run build
```

Upload the `dist/` folder to your host. Because this is a single-page app, set your host to send every URL to `index.html`:
- **Netlify:** add a file `public/_redirects` containing `/*  /index.html  200`
- **Vercel:** works automatically
- **cPanel / Apache:** add an `.htaccess` with a rewrite to `index.html`

## Where to edit things

| What | File |
|---|---|
| Phone, email, address, social links, menus | `src/data/site.js` |
| Service pages (FTL, PTL, Door to Door, Mukerian, Pan India, B2B) | `src/data/services.js` |
| Route pages (Delhi, Noida, Mukerian to Mumbai, …) | `src/data/routes.js` |
| Blog posts | `src/data/blogs.js` |
| Home page | `src/pages/Home.jsx` |
| About page | `src/pages/About.jsx` |
| Contact page & form | `src/pages/Contact.jsx` |
| Colours, fonts, layout | `src/styles.css` |

## Pages

- `/` Home, `/about-us`, `/contact-us`, `/blogs`, `/blog/:slug`
- 6 service pages, e.g. `/full-truck-load`
- 9 route pages, e.g. `/routes/mukerian-to-mumbai-transport`
- `/privacy-policy`, `/terms-of-service`
- Old `.php` links (e.g. `/about-us.php`) redirect to the new URLs.

## Things still to fill in

- **Route pages:** only Mukerian to Mumbai has the full live text. The other 8 use a shared template; paste each page's real text into `src/data/routes.js` (copy the Mumbai object as a pattern).
- **Mukerian Transport, Pan India and B2B pages:** content was rebuilt from summaries of the live pages; compare and paste in exact wording if needed.
- **Blog articles:** add each post's full text to `body` in `src/data/blogs.js`.
- **Privacy Policy / Terms:** paste text into `src/pages/Legal.jsx`.
- **Contact form:** currently opens the visitor's email app. Connect it to your own backend or a form service (e.g. Formspree) to receive messages directly.
- **Images:** loaded from your live site and Unsplash. To host them yourself, download them into `public/images/` and update the URLs in `src/data/site.js`.
