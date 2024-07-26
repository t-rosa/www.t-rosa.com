/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
		cursor: {
			hey: `url(data:image/svg+xml;utf8,<svg_xmlns='http://www.w3.org/2000/svg'_width='40'_height='48'_viewport='0_0_100_100'_style='fill:black;font-size:24px;'><text y='50%'>👋</text></svg>)`
		},
		animation: {
			wave: "wave 2.5s linear",
		},
		keyframes: {
			wave: {
				'0%': {
					transform: "rotate(0.0deg)"
				},
				'10%': {
					transform: "rotate(14.0deg)"
				},
				'20%': {
					transform: "rotate(-8.0deg)"
				},
				'30%': {
					transform: "rotate(14.0deg)"
				},
				'40%': {
					transform: "rotate(-4.0deg)"
				},
				'50%': {
					transform: "rotate(10.0deg)"
				},
				'60%': {
					transform: "rotate(0.0deg)"
				},
				'100%': {
					transform: "rotate(0.0deg)"
				},
			}
		}
    },
  },
  plugins: [],
};