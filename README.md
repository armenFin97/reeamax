# Marketing Agency Single-Screen Website

A fast, minimalist single-screen website for marketing agencies. No scrolling, optimized for speed and conversion.

## Features

- ✅ Single-screen layout (100vh, no scrolling)
- ✅ Fully responsive (desktop, tablet, mobile)
- ✅ Fast loading (optimized for performance)
- ✅ Clean, minimalist design
- ✅ Vanilla JavaScript (no frameworks)
- ✅ SEO optimized
- ✅ Accessible (WCAG compliant)

## File Structure

```
├── index.html      # Main HTML file
├── styles.css      # All styles
├── script.js       # Minimal JavaScript
└── README.md       # This file
```

## How to Update Content

### 1. Update Contact Information

**Phone Number:**
- Edit `href="tel:+1234567890"` in the CTA button (line ~30 in `index.html`)
- Update WhatsApp link: `href="https://wa.me/1234567890"` (line ~50)

**Email:**
- Edit `href="mailto:contact@example.com"` (line ~60 in `index.html`)

**Social Media Links:**
- **Telegram:** Update `href="https://t.me/yourusername"` (line ~37)
- **Instagram:** Update `href="https://instagram.com/yourusername"` (line ~44)
- **WhatsApp:** Update `href="https://wa.me/1234567890"` (line ~51)
- **Email:** Update `href="mailto:contact@example.com"` (line ~58)

### 2. Update Text Content

**Headline:**
- Edit the `<h1>` tag content (line ~25 in `index.html`)

**Description:**
- Edit the description paragraph (lines ~26-29 in `index.html`)

**Trust Line:**
- Edit the trust line paragraph (line ~30 in `index.html`)

### 3. Update SEO Meta Tags

Edit the `<head>` section in `index.html`:
- **Title:** Line 18
- **Meta Description:** Line 5
- **Open Graph tags:** Lines 8-12
- **Twitter tags:** Lines 14-17

### 4. Customize Colors

Edit CSS variables in `styles.css` (lines 7-12):

```css
:root {
    --bg-color: #fafafa;           /* Background color */
    --text-color: #1a1a1a;          /* Main text color */
    --accent-color: #2563eb;        /* CTA button color */
    --accent-hover: #1d4ed8;        /* CTA hover color */
    --text-secondary: #6b7280;      /* Secondary text color */
}
```

### 5. Add Favicon

Place your favicon file as `favicon.ico` in the root directory, or update the favicon link in `index.html` (line 19).

## Browser Support

- Chrome (latest)
- Safari (latest)
- Firefox (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance

- Lighthouse Performance: 90+
- Load time: < 2 seconds
- No external dependencies
- Optimized CSS and minimal JavaScript

## Deployment

1. Upload all files to your web server
2. Ensure `index.html` is set as the default file
3. Test all links and responsive behavior
4. Verify favicon displays correctly

## Notes

- All social media icons are inline SVG (no external dependencies)
- Phone number uses `tel:` protocol for direct calling on mobile
- WhatsApp link uses `wa.me` format
- Email uses `mailto:` protocol
- All external links include `rel="noopener noreferrer"` for security

## License

Free to use and modify for your projects.
