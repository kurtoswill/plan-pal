/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: 'class',
    content: [
        './app/**/*.{js,ts,jsx,tsx}',
        './pages/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['var(--font-outfit)', 'sans-serif'],
            },
            colors: {
                background: 'var(--background)',
                foreground: 'var(--foreground)',
                border: 'var(--border)',
                ring: 'var(--ring)',
                card: 'var(--card)',
                'card-foreground': 'var(--card-foreground)',
                popover: 'var(--popover)',
                'popover-foreground': 'var(--popover-foreground)',
                primary: 'var(--primary)',
                'primary-foreground': 'var(--primary-foreground)',
                secondary: 'var(--secondary)',
                'secondary-foreground': 'var(--secondary-foreground)',
                muted: 'var(--muted)',
                'muted-foreground': 'var(--muted-foreground)',
                accent: 'var(--accent)',
                'accent-foreground': 'var(--accent-foreground)',
                destructive: 'var(--destructive)',
                input: 'var(--input)',
                sidebar: 'var(--sidebar)',
                'sidebar-foreground': 'var(--sidebar-foreground)',
                'sidebar-primary': 'var(--sidebar-primary)',
                'sidebar-primary-foreground': 'var(--sidebar-primary-foreground)',
                'sidebar-accent': 'var(--sidebar-accent)',
                'sidebar-accent-foreground': 'var(--sidebar-accent-foreground)',
                'sidebar-border': 'var(--sidebar-border)',
                'sidebar-ring': 'var(--sidebar-ring)',
            },
            borderRadius: {
                sm: 'var(--radius-sm)',
                md: 'var(--radius-md)',
                lg: 'var(--radius-lg)',
                xl: 'var(--radius-xl)',
            },
        },
    },
    plugins: [
        require('@tailwindcss/line-clamp'),
        // optionally add other plugins here
    ],
}
