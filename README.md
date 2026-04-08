# AI Sales Intelligence - Lead Magnet Landing Page

**Top 10 AI Sales Tools 2026 - Free Checklist**

A responsive landing page for capturing leads interested in AI sales tools. This page is designed to match the main AI Sales Intelligence site aesthetic (dark theme, professional design).

## Files

- `index.html` - The complete landing page with email capture form
- `Code.gs` - Google Apps Script for email delivery
- `README.md` - This file

## Features

- Dark theme matching the AI Sales Intelligence brand
- Email capture form with simulated submission
- Success state showing download link
- Preview of all 10 tools
- Responsive design (mobile, tablet, desktop)
- No external dependencies (except Google Fonts)
- Upsell link to main product
- Google Apps Script integration for real email delivery

## Live Site

**https://deivithi.github.io/ai-sales-intelligence-lead-magnet/**

## Deployment to GitHub Pages

The repository is pre-configured for GitHub Pages deployment:

1. Go to Settings > Pages
2. Select "Deploy from a branch" > `main` branch > `/ (root)`
3. Click Save

Your page will be live within a few minutes.

## Email Capture Setup

The form runs in **demo mode** by default (saves to localStorage). To enable real email delivery:

### Step 1: Create Google Apps Script Project

1. Go to [script.google.com](https://script.google.com)
2. Click "New Project"
3. Copy the contents of `Code.gs` into the editor
4. Save the project

### Step 2: Deploy as Web App

1. Click "Deploy" > "New deployment"
2. Click the gear icon and select "Web app"
3. Configure:
   - Description: "AI Sales Lead Magnet"
   - Execute as: **Me**
   - Who has access: **Anyone**
4. Click "Deploy" and copy the URL

### Step 3: Update index.html

Find this line and replace with your URL:
```javascript
const APPS_SCRIPT_URL = 'YOUR_GOOGLE_APPS_SCRIPT_WEB_APP_URL';
```

### Step 4: Test

Open your landing page, enter an email, and check that you receive the checklist.

## Customization

### Change Colors
Edit the CSS variables:
```css
:root {
    --accent-primary: #6366f1;
    --bg-primary: #0a0a0f;
}
```

### Add Analytics
Add your tracking code before `</head>`:
```html
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_ID');
</script>
```

## Integration with Main Site

- Upsell CTA links to `https://deivithi.github.io/ai-sales-intelligence/`
- Footer includes link to main site

## Browser Support

- Chrome 80+
- Firefox 75+
- Safari 13+
- Edge 80+

## License

For internal use by AI Sales Intelligence.