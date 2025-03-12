# Logic Loom Lab - Agency Website

A modern, responsive agency website built with React and Vite, featuring animations, contact form functionality, and optimized performance.

## 🚀 Live Demo

Visit the live website at [logicloomlab.tech](https://logicloomlab.tech)

## ✨ Features

- **Modern UI/UX**: Clean, professional design with smooth animations
- **Responsive Layout**: Optimized for all devices from mobile to desktop
- **Performance Optimized**: Fast loading times and smooth interactions
- **Contact Form**: Integrated with EmailJS for seamless email functionality
- **SEO Friendly**: Proper meta tags and semantic HTML structure
- **Animations**: Smooth transitions and micro-interactions using Framer Motion
- **Modular Architecture**: Well-organized component structure for easy maintenance

## 🛠️ Technologies Used

- **React**: Frontend library for building user interfaces
- **Vite**: Next-generation frontend tooling
- **Framer Motion**: Animation library for React
- **EmailJS**: Email sending functionality directly from JavaScript
- **React Icons**: Icon library for React applications
- **CSS Modules**: Scoped CSS for components

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v14.0.0 or later)
- npm (v6.0.0 or later) or [Yarn](https://yarnpkg.com/)
- Git

## 🔧 Installation & Setup

1. **Clone the repository**

```bash
git clone <repository-url>
cd my-agency-website
```

2. **Install dependencies**

```bash
npm install
# or
yarn
```

3. **Start the development server**

```bash
npm run dev
# or
yarn dev
```

4. **Open your browser**

The development server will start at `http://localhost:5173` (or another port if 5173 is in use)

## 📁 Project Structure

```
my-agency-website/
├── public/              # Static files
├── src/                 # Source files
│   ├── assets/          # Images and other assets
│   ├── components/      # Reusable components
│   │   ├── common/      # Common UI components
│   │   └── layout/      # Layout components (Header, Footer, etc.)
│   ├── data/            # Static data files
│   ├── pages/           # Page components
│   ├── styles/          # Global styles
│   ├── utils/           # Utility functions
│   ├── App.jsx          # Main App component
│   ├── App.css          # App styles
│   ├── main.jsx         # Entry point
│   └── index.css        # Global CSS
├── .gitignore           # Git ignore file
├── index.html           # HTML template
├── package.json         # Dependencies and scripts
├── vite.config.js       # Vite configuration
└── README.md            # Project documentation
```

## 🧩 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint

## 🔄 Continuous Updates

The website is designed to be easily maintainable and expandable:

1. **Adding New Pages**: Create new components in the `src/pages` directory
2. **Updating Content**: Most content is stored in component files
3. **Styling Changes**: Update CSS files in respective component directories

## 🔒 Environment Variables

For production, consider using environment variables for sensitive information:

1. Create a `.env` file in the root directory
2. Add your variables (e.g., `VITE_EMAILJS_USER_ID=your_user_id`)
3. Access them in code via `import.meta.env.VITE_EMAILJS_USER_ID`

## 📱 Responsive Design

The website is fully responsive with breakpoints at:

- Mobile: 576px and below
- Tablet: 577px to 991px
- Desktop: 992px and above

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)


## 👨‍💻 Author

Suresh Kumar - [logicloomlab.tech](https://logicloomlab.tech)

---

© 2025 Logic Loom Lab. All Rights Reserved.
