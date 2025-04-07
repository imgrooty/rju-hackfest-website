# RJU Hackfest 1.0 Website

A modern, responsive website for the RJU Hackfest 1.0 hackathon event. Built with React, TypeScript, and Tailwind CSS.

![RJU Hackfest](https://via.placeholder.com/800x400?text=RJU+Hackfest+1.0)

## 🌟 Features

- **Responsive Design**: Fully responsive layout that works on all devices
- **Dark/Light Mode**: Theme switching with system preference detection
- **Interactive UI**: Modern UI components with smooth animations
- **Registration System**: Team and individual registration with Google Sheets integration
- **3D Elements**: Three.js powered 3D scene for visual appeal
- **Accessibility**: Built with accessibility in mind

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/rju-hackfest-website.git
   cd rju-hackfest-website
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Start the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open your browser and navigate to `http://localhost:5173`

## 🛠️ Built With

- [React](https://reactjs.org/) - UI library
- [TypeScript](https://www.typescriptlang.org/) - Type safety
- [Vite](https://vitejs.dev/) - Build tool and dev server
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [shadcn/ui](https://ui.shadcn.com/) - Re-usable components
- [Three.js](https://threejs.org/) - 3D graphics library
- [React Router](https://reactrouter.com/) - Routing
- [React Query](https://tanstack.com/query/latest) - Data fetching
- [GSAP](https://greensock.com/gsap/) - Animations

## 📁 Project Structure

```
rju-hackfest-website/
├── public/              # Static assets
├── src/
│   ├── components/      # React components
│   │   ├── ui/          # UI components (shadcn)
│   │   ├── About.tsx    # About section
│   │   ├── FAQ.tsx      # FAQ section
│   │   ├── Footer.tsx   # Footer component
│   │   ├── Hero.tsx     # Hero section
│   │   ├── Navbar.tsx   # Navigation bar
│   │   ├── Prizes.tsx   # Prizes section
│   │   ├── RegisterForm.tsx # Registration form
│   │   ├── Schedule.tsx # Schedule section
│   │   ├── Scene3D.tsx  # 3D scene
│   │   ├── Team.tsx     # Team section
│   │   ├── ThemeProvider.tsx # Theme context
│   │   └── ThemeSwitcher.tsx # Theme toggle
│   ├── hooks/           # Custom React hooks
│   ├── lib/             # Utility functions
│   ├── pages/           # Page components
│   ├── services/        # API services
│   ├── utils/           # Helper utilities
│   ├── App.tsx          # Main app component
│   ├── index.css        # Global styles
│   └── main.tsx         # Entry point
├── index.html           # HTML template
├── tailwind.config.ts   # Tailwind configuration
├── tsconfig.json        # TypeScript configuration
└── vite.config.ts       # Vite configuration
```

## 🧩 Key Components

- **Hero**: Eye-catching introduction to the hackathon
- **About**: Information about the event
- **Schedule**: Timeline of hackathon events
- **Prizes**: Available prizes and rewards
- **Team**: Organizing team members
- **RegisterForm**: Registration form with Google Sheets integration
- **FAQ**: Frequently asked questions
- **Footer**: Site footer with links and information

## 🎨 Customization

### Theme Colors

The theme colors can be customized in `tailwind.config.ts`:

```typescript
colors: {
  hackathon: {
    primary: '#9b87f5',
    secondary: '#7E69AB',
    dark: '#1A1F2C',
    light: '#D6BCFA',
    soft: '#E5DEFF',
  },
  // ...
}
```

### Registration Form

The registration form data is sent to a Google Sheet. To set up your own:

1. Create a Google Sheet with appropriate columns
2. Create a Google Apps Script to handle form submissions
3. Deploy the script as a web app
4. Update the `GOOGLE_SCRIPT_URL` in `RegisterForm.tsx`

## 📱 Responsive Design

The website is fully responsive with breakpoints for:
- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

## 🔧 Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 👥 Contributors

- [Your Name](https://github.com/yourusername)

## 🙏 Acknowledgments

- [shadcn/ui](https://ui.shadcn.com/) for the UI components
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS framework
- [Three.js](https://threejs.org/) for the 3D graphics library
