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

Open `src/config.js` and replace `YOUR_PAYMENT_URL_HERE` in `WAITLIST_PAYMENT_URL` with the official Razorpay, Stripe, or other checkout URL. All paid-waitlist CTAs use this setting. Until a URL is configured, CTAs lead to `/payments`, where the payment action shows the launch information dialog without collecting payment details.

## Pages

- `/` — existing landing page and countdown
- `/teams`
- `/benefits`
- `/story`
- `/payments`

Netlify serves the React app for these frontend routes so direct visits and refreshes continue to work.

## Netlify

- Build command: `npm run build`
- Publish directory: `dist`
