# Bethusile Mafumana - Portfolio Website

A modern, responsive personal portfolio website showcasing my projects, skills, and professional journey as a Software Developer, Cloud Engineer, and Project Manager.

## Features

- **Responsive Design**: Fully responsive layout that works seamlessly on desktop, tablet, and mobile devices
- **Dark/Light Theme Toggle**: User-friendly theme switcher with persistent preference storage
- **Interactive Project Showcase**: Categorized projects (Full-Stack, Cloud, Data Analytics) with carousel navigation
- **Animated UI Elements**: Smooth animations and transitions for an engaging user experience
- **Glass Morphism Design**: Modern transparent glass effect cards in dark mode
- **Professional Journey Timeline**: Interactive tabs showcasing education, experience, and certifications

## Technologies Used

### Frontend
- **HTML5** - Semantic markup
- **CSS3** - Custom styling with advanced features (flexbox, grid, animations)
- **JavaScript** - Interactive functionality and theme management
- **Bootstrap 5.3** - Responsive framework
- **Font Awesome** - Icon library

### Design Features
- Custom fonts (Pristina, Freestyle Script)
- CSS animations and transitions
- Backdrop blur effects (glass morphism)
- Responsive media queries
- Custom color scheme (Pink #ff69b4 accent)

## Project Structure

```
portfolio-static/
│
├── index.html          # Main landing page
├── about.html          # About me page
├── site.css            # Main stylesheet
├── site.js             # JavaScript functionality
│
├── fonts/              # Custom font files
│   ├── Pristina.ttf
│   ├── Pristina.woff
│   ├── Pristina.woff2
│   ├── FreestyleScript.ttf
│   ├── FreestyleScript.woff
│   └── FreestyleScript.woff2
│
└── images/             # Project screenshots and assets
    ├── bg1.jpg
    ├── calculator.png
    ├── lasertag.png
    ├── ab1.JPG
    ├── bike1.png
    └── [other project images]
```

## Getting Started

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, or Edge)
- No server-side dependencies required (static website)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Bethusile/portfolio-static.git
   ```

2. **Navigate to the project directory**
   ```bash
   cd portfolio-static
   ```

3. **Open in browser**
   - Simply open `index.html` in your web browser
   - Or use a local development server:
     ```bash
     # Using Python
     python -m http.server 8000
     
     # Using Node.js (http-server)
     npx http-server
     
     # Using VS Code Live Server extension
     Right-click on index.html → "Open with Live Server"
     ```

4. **View the website**
   - Open your browser and navigate to `http://localhost:8000` (or the appropriate port)

## Customization

### Changing Theme Colors
To modify the primary pink accent color, update the CSS variable in `site.css`:
```css
:root { --pink: #ff69b4; }
```

### Adding New Projects
Add new project cards in the appropriate tab section in `index.html`:
```html
<div class="carousel-item">
    <div class="row justify-content-center">
        <div class="col-md-7 mb-4">
            <div class="card">
                <!-- Your project content -->
            </div>
        </div>
    </div>
</div>
```

### Modifying Fonts
Custom fonts are loaded via `@font-face` in `site.css`. Add your fonts to the `/fonts` directory and reference them accordingly.

## Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 991px
- **Desktop**: 992px - 1199px
- **Large Desktop**: ≥ 1200px
- **Extra Large**: ≥ 1400px

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Opera (latest)

## Key Sections

1. **Hero Section** - Animated introduction with background image
2. **Projects** - Tabbed interface showcasing Full-Stack, Cloud, and Data Analytics projects
3. **My Journey** - Professional experience, education, and certifications
4. **About Me** - Personal information and professional profile
5. **Footer** - Social media links and contact information

## Live Demo

Visit the live portfolio: [Your deployment URL here]

## Contact

- **Email**: s212280317@mandela.ac.za
- **GitHub**: [@Bethusile](https://github.com/Bethusile)
- **LinkedIn**: [Bethusile Mafumana](https://www.linkedin.com/in/bethusile-mafumana-1996a289/)

## License

This project is open source and available under the [MIT License](LICENSE).

## Acknowledgments

- Bootstrap team for the excellent framework
- Font Awesome for the comprehensive icon library
- All the open-source contributors whose work made this possible

---

**© 2025 Bethusile Mafumana. All rights reserved.**
