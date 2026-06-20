import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				night: 'hsl(var(--night))',
				periwinkle: 'hsl(var(--periwinkle))',
				lavender: 'hsl(var(--lavender))',
				blush: 'hsl(var(--blush))',
				pink: 'hsl(var(--pink))',
				peach: 'hsl(var(--peach))',
				sun: 'hsl(var(--sun))',
				navy: 'hsl(var(--navy))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			fontFamily: {
				pixel: ['"VT323"', 'Nunito', 'monospace'],
				arcade: ['"Press Start 2P"', 'monospace'],
				sans: ['Nunito', 'system-ui', 'sans-serif']
			},
			boxShadow: {
				pixel: '4px 4px 0 0 hsl(var(--navy))',
				'pixel-sm': '2px 2px 0 0 hsl(var(--navy))',
				'pixel-lg': '6px 6px 0 0 hsl(var(--navy))'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				float: {
					'0%, 100%': { transform: 'translateY(0px)' },
					'50%': { transform: 'translateY(-16px)' }
				},
				slideUp: {
					'0%': { opacity: '0', transform: 'translateY(60px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' }
				},
				fadeInDelay: {
					'0%': { opacity: '0', transform: 'translateY(30px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' }
				},
				twinkle: {
					'0%, 100%': { opacity: '1' },
					'50%': { opacity: '0.25' }
				},
				drift: {
					from: { transform: 'translateX(-10vw)' },
					to: { transform: 'translateX(110vw)' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'float': 'float 6s ease-in-out infinite',
				'slide-up': 'slideUp 0.8s ease-out forwards',
				'fade-in-delay': 'fadeInDelay 0.8s ease-out forwards',
				'twinkle': 'twinkle 3s steps(2, end) infinite',
				'drift': 'drift 60s linear infinite'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
