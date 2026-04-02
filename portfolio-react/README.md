# React Portfolio (Vite)

A clean, responsive portfolio website built with **React + Vite**.

## 1) Install.

```bash
npm install
```

## 2) Run locally

### Without HTTPS (HTTP)
```bash
npm run dev
```

### With HTTPS (SSL Certificate)
1. Generate a self-signed certificate:
   ```bash
   npm run generate-cert
   ```

2. Start the dev server (will automatically use HTTPS if certificate exists):
   ```bash
   npm run dev
   ```

3. Navigate to `https://localhost:5173` (note the `https://`)
   - Your browser will show a security warning for the self-signed certificate
   - Click "Advanced" and then "Proceed to localhost (unsafe)" to continue

Then open the URL shown in your terminal.

## 3) Customize

Edit:
- `src/data.js` (your name, links, projects, experience)
- `src/assets/` (replace placeholder SVG images with your own)

## 4) Build for production

```bash
npm run build
npm run preview
```

---

### Image handling

Images are stored as files in `src/assets/` and imported into React components (see `src/data.js`).
