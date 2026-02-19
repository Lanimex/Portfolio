# Personal Portfolio

A dark-themed, minimalist portfolio website for a Computer Engineering student at Rutgers University—designed for SWE and hardware roles.

## Sections

- **Hero** — Name, title, contact info, CTA buttons
- **About** — Brief intro + certifications
- **Projects** — Featured project cards with images, descriptions, tech stack, achievements
- **Skills** — Languages, Frameworks, Developer Tools, Libraries & Databases
- **Blog** — Blog posts for thoughts and insights
- **Contact** — Email and social links

## Filling In Your Content

Open `index.html` and replace these placeholders:

| Placeholder | What to add |
|-------------|-------------|
| `[Your Name]` | Your full name |
| `[YN]` | Your initials (logo) |
| `[City, State]` | Your location |
| `[Phone Number]` | Your phone number |
| `[your.email@example.com]` | Your email (appears in hero, contact, footer) |
| `[Brief intro...]` | About section text |
| `[Certification 1]`, `[Certification 2]` | Your certifications |
| `[Project X Title]`, `[Project X description]`, etc. | Project details |
| `[Tech 1]`, `[Tech 2]` | Technologies per project |
| `[Key achievement...]` | Bullet points per project |
| `[Language 1]`, `[Framework 1]`, etc. | Your skills by category |
| `[Blog Post Title]`, `[Date]`, excerpt | Blog entries |
| `[GitHub link]`, `[LinkedIn link]` | Your social profiles |

### Project Images

Replace the `[Project X image placeholder]` divs with actual images:

```html
<img src="path/to/your-project-image.png" alt="Project 1" class="project-image" />
```

Or keep the placeholder div and add a background image in CSS if you prefer.

## Running Locally

1. Open `index.html` in a browser, or
2. Use a local server, e.g.:
   - `npx serve .`
   - `python -m http.server 8000`
   - VS Code Live Server extension

## Customization

- **Fonts**: Change the Google Font link in `index.html` if you want a different font.
- **Colors**: Edit `:root` variables in `styles.css` (e.g., `--accent`).
- **Project cards**: Copy a `<div class="project-card">` block to add more projects.
- **Certifications**: Copy a `<div class="cert-card">` to add more certs.
