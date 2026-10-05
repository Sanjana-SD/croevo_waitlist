# Croevo paid waitlist landing page

## Local development

```sh
npm install
npm run dev
```

## Production build

```sh
npm run build
```

Vite writes the deployable site to `dist/`.

## Waitlist / payment destination

Open `src/config.js` and replace `YOUR_PAYMENT_OR_WAITLIST_URL` with the official Razorpay, Stripe, checkout, or waitlist URL. Every paid-waitlist CTA reads this one setting. Until a URL is configured, the buttons show the launch information dialog.

## Netlify

- Build command: `npm run build`
- Publish directory: `dist`
