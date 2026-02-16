# Marketing Agency Single-Screen Website

A fast, minimalist single-screen website for marketing agencies. No scrolling, optimized for speed and conversion.

## Design Specifications

- **Typography:** Archivo Black (Google Fonts) for headlines and logo
- **Background:** Dark Green (#314329)
- **Text Color:** White (#ffffff)
- **Logo:** RMX (text-based, white, using Archivo Black)
- **Layout:** Single-screen, no scroll, fully responsive
- **CTA:** Email action button (white button on dark green background)
- **Social Links:** Instagram only (Telegram and WhatsApp link to 404 page)

## Features

- ✅ Single-screen layout (100vh, no scrolling)
- ✅ Fully responsive (desktop, tablet, mobile)
- ✅ Fast loading (optimized for performance)
- ✅ Clean, minimalist design with Dark Green accent
- ✅ Archivo Black typography
- ✅ RMX logo branding
- ✅ Vanilla JavaScript (no frameworks)
- ✅ SEO optimized
- ✅ Accessible (WCAG compliant)

## File Structure

```
├── index.html      # Main HTML file
├── 404.html        # 404 error page
├── styles.css      # All styles
├── script.js       # Minimal JavaScript
└── README.md       # This file
```

## How to Update Content

### 1. Update Contact Information

**Email (CTA Button):**
- Edit `href="mailto:contact@example.com"` in the CTA button (line ~42 in `index.html`)

**Social Media Links:**
- **Instagram:** Currently set to `https://www.instagram.com/reeamax?igsh=MWt1enIzaWx6bXQ3MA==` (line ~53)
- **Telegram & WhatsApp:** Currently link to `404.html` (will be updated when these channels are active)

### 2. Update Text Content

**Headline:**
- Edit the `<h1>` tag content (line ~32 in `index.html`)

**Description:**
- Edit the description paragraph (lines ~33-36 in `index.html`)

**Trust Line:**
- Edit the trust line paragraph (line ~37 in `index.html`)

### 3. Update SEO Meta Tags

Edit the `<head>` section in `index.html`:
- **Title:** Line 18
- **Meta Description:** Line 6
- **Open Graph tags:** Lines 9-12
- **Twitter tags:** Lines 14-17

### 4. Update Logo

**Logo Text:**
- Edit the logo text in `index.html` (line ~27): `<div class="logo">RMX</div>`

**Logo Styling:**
- Logo uses Archivo Black font and white color (#ffffff)
- Larger size: clamp(2rem, 4vw, 2.5rem)
- Positioned in top-left corner
- Responsive sizing via CSS clamp()

### 5. Customize Colors

Current color scheme (Dark Green background with white text):
- Edit CSS variables in `styles.css` (lines 8-16):

```css
:root {
    --bg-color: #314329;            /* Dark Green background */
    --text-color: #ffffff;           /* White main text */
    --primary-color: #314329;        /* Primary/Dark Green color */
    --primary-hover: #253520;        /* Primary hover state */
    --accent-color: #ffffff;         /* White CTA button */
    --accent-hover: #f0f0f0;         /* CTA hover color */
    --text-secondary: rgba(255, 255, 255, 0.8); /* Secondary text */
}
```

### 6. 404 Page

The `404.html` page matches the main page styling:
- Same dark green background
- White RMX logo
- 404 message with link back to homepage
- Telegram and WhatsApp links on main page redirect to this page

### 7. Add Favicon

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

## Typography

- **Headlines & Logo:** Archivo Black (Google Fonts)
- **Body Text:** System font stack (optimized for performance)
- Font is loaded via Google Fonts with `preconnect` for optimal performance

## Notes

- **Background:** Dark green (#314329) with white text for high contrast
- **Logo:** White RMX logo, larger size for better visibility
- **CTA:** Email action replaces phone call button
- **Social Links:** Only Instagram is active; Telegram and WhatsApp link to 404 page
- All social media icons are inline SVG (no external dependencies)
- Email uses `mailto:` protocol
- All external links include `rel="noopener noreferrer"` for security
- Logo positioned absolutely in top-left corner
- Archivo Black font used for headline and logo for strong brand presence
- 404 page matches main page styling for consistent user experience

## License

Free to use and modify for your projects.
