# Atahar Islam Shihab - Portfolio Website

A modern, responsive portfolio website built with vanilla HTML, CSS, and JavaScript showcasing my experience as a Junior Software Engineer.

## 🚀 Features

- **Modern Design**: Dark theme with vibrant gradients and glassmorphism effects
- **Fully Responsive**: Works perfectly on desktop, tablet, and mobile devices
- **Smooth Animations**: Scroll-based animations, hover effects, and micro-interactions
- **SEO Optimized**: Proper meta tags, semantic HTML, and performance optimizations
- **Zero Dependencies**: Pure HTML, CSS, and JavaScript - no frameworks required

## 📁 Project Structure

```
portfolio/
├── index.html      # Main HTML file with all sections
├── styles.css      # Complete CSS with design system
├── script.js       # JavaScript for interactivity and animations
└── README.md       # This file
```

## 🖥️ Running Locally

### Option 1: Using Python (Recommended)

If you have Python installed:

```bash
# Navigate to the project directory
cd /home/ninja/Documents/code/portfolio

# Start a local server
python3 -m http.server 8000

# Open your browser and visit:
# http://localhost:8000
```

### Option 2: Using Node.js

If you have Node.js installed:

```bash
# Install http-server globally (one-time)
npm install -g http-server

# Navigate to project directory
cd /home/ninja/Documents/code/portfolio

# Start the server
http-server -p 8000

# Open http://localhost:8000 in your browser
```

### Option 3: Using VS Code Live Server

1. Install the "Live Server" extension in VS Code
2. Right-click on `index.html`
3. Select "Open with Live Server"

### Option 4: Direct File Opening

Simply double-click `index.html` to open it in your default browser. However, some features may not work properly due to browser security restrictions.

## 🌐 Deployment Options

### 1. GitHub Pages (Free & Easy)

**Steps:**

1. Create a new repository on GitHub (e.g., `portfolio` or `<your-username>.github.io`)

2. Initialize git and push your code:
```bash
cd /home/ninja/Documents/code/portfolio
git init
git add .
git commit -m "Initial commit: Portfolio website"
git branch -M main
git remote add origin https://github.com/<your-username>/<repo-name>.git
git push -u origin main
```

3. Enable GitHub Pages:
   - Go to repository Settings → Pages
   - Under "Source", select "main" branch
   - Click Save

4. Your site will be live at: `https://<your-username>.github.io/<repo-name>/`

**Note:** If you name your repo `<your-username>.github.io`, it will be accessible at `https://<your-username>.github.io/`

### 2. Netlify (Free with Custom Domain)

**Steps:**

1. Create account at [netlify.com](https://netlify.com)

2. **Option A - Drag & Drop:**
   - Simply drag the `portfolio` folder to Netlify's deployment zone
   - Your site goes live instantly!

3. **Option B - Git Integration:**
   - Connect your GitHub repository
   - Netlify auto-deploys on every push

4. **Custom Domain:**
   - Go to Domain Settings
   - Add your custom domain (optional)

**Your site will be live at:** `https://random-name-12345.netlify.app` (you can customize this)

### 3. Vercel (Free with Auto HTTPS)

**Steps:**

1. Install Vercel CLI:
```bash
npm install -g vercel
```

2. Deploy:
```bash
cd /home/ninja/Documents/code/portfolio
vercel
```

3. Follow the prompts and your site will be deployed!

**Or use the Web UI:**
- Go to [vercel.com](https://vercel.com)
- Import your GitHub repository
- Vercel handles the rest automatically

### 4. Cloudflare Pages (Free)

1. Go to [pages.cloudflare.com](https://pages.cloudflare.com)
2. Create a new project
3. Connect to your Git repository or upload files directly
4. Deploy!

### 5. Traditional Web Hosting

Upload all files to any web hosting provider via FTP:

1. Connect to your hosting via FTP client (FileZilla, etc.)
2. Upload `index.html`, `styles.css`, and `script.js` to the public folder (usually `public_html` or `www`)
3. Access via your domain

## 🔧 Customization

### Update Personal Information

Edit `index.html` to update:
- Contact information
- Social media links
- Project descriptions
- Work experience
- Skills and technologies

### Change Colors

Edit `styles.css` - look for the `:root` section at the top:
```css
:root {
  --primary-purple: #8B5CF6;
  --primary-blue: #3B82F6;
  --accent-cyan: #06B6D4;
  /* ... modify these colors */
}
```

### Modify Sections

All sections are in `index.html`:
- Hero: `<section id="hero">`
- About: `<section id="about">`
- Skills: `<section id="skills">`
- Experience: `<section id="experience">`
- Projects: `<section id="projects">`
- Achievements: `<section id="achievements">`
- Contact: `<section id="contact">`

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📝 License

This project is open source and available for personal use.

## 👤 Contact

**Atahar Islam Shihab**
- Email: atahar.sde@gmail.com
- Phone: +880 1533706750
- LinkedIn: [linkedin.com/in/atahar9](https://linkedin.com/in/atahar9)
- GitHub: [github.com/dihanhassan](https://github.com/dihanhassan)
- Location: Dhaka, Bangladesh

---

Built with ❤️ using HTML, CSS, and JavaScript
