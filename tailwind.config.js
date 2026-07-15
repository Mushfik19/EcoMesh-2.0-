/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)"],
        display: ["var(--font-display)"],
        mono: ["var(--font-mono)"],
      },
      colors: {
        background: "var(--color-background)",
        foreground: "var(--color-foreground)",
        surface: {
          DEFAULT: "var(--color-surface)",
          raised: "var(--color-surface-raised)",
          subtle: "var(--color-surface-subtle)",
          glass: "var(--color-surface-glass)",
        },
        border: {
          DEFAULT: "var(--color-border)",
          strong: "var(--color-border-strong)",
        },
        muted: {
          DEFAULT: "var(--color-muted)",
          foreground: "var(--color-muted-foreground)",
        },
        primary: {
          DEFAULT: "var(--color-primary)",
          hover: "var(--color-primary-hover)",
          foreground: "var(--color-primary-foreground)",
        },
        secondary: {
          DEFAULT: "var(--color-secondary)",
          hover: "var(--color-secondary-hover)",
          foreground: "var(--color-secondary-foreground)",
        },
        accent: {
          DEFAULT: "var(--color-accent)",
          hover: "var(--color-accent-hover)",
          foreground: "var(--color-accent-foreground)",
        },
        destructive: {
          DEFAULT: "var(--color-destructive)",
          hover: "var(--color-destructive-hover)",
          foreground: "var(--color-destructive-foreground)",
        },
        status: {
          online: "var(--status-online)",
          degraded: "var(--status-degraded)",
          offline: "var(--status-offline)",
          critical: "var(--status-critical)",
          healing: "var(--status-healing)",
          predictive: "var(--status-predictive)",
        },
        chart: {
          cyan: "var(--chart-cyan)",
          teal: "var(--chart-teal)",
          green: "var(--chart-green)",
          yellow: "var(--chart-yellow)",
          orange: "var(--chart-orange)",
          red: "var(--chart-red)",
          violet: "var(--chart-violet)",
          slate: "var(--chart-slate)",
        },
      },
      borderRadius: {
        xs: "var(--radius-xs)",
        sm: "var(--radius-sm)",
        md: "var(--radius-md)",
        lg: "var(--radius-lg)",
        xl: "var(--radius-xl)",
        "2xl": "var(--radius-2xl)",
      },
      boxShadow: {
        control: "var(--shadow-control)",
        panel: "var(--shadow-panel)",
        command: "var(--shadow-command)",
        glow: "var(--shadow-glow)",
      },
      backgroundImage: {
        mission: "var(--gradient-mission)",
        climate: "var(--gradient-climate)",
        alert: "var(--gradient-alert)",
        glass: "var(--gradient-glass)",
        radar: "var(--gradient-radar)",
      },
    },
  },
  plugins: [],
};
