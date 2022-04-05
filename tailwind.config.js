module.exports = {
	purge: ["./public/**/*.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			colors: {
				mainblue: "#264653",
				eggshel: "#F4F1DE",
				coldblue: "#3D405B",
				honey: "#F4A261",
				mandarine: "#E76F51",
				champagne: "#FECB90",
				grayblue: "#ebf0f7",
				trellowish: "#ece8ff",
			},

			fontFamily: {
				poppins: ["Poppins", "sans-serif"],
				lobster: ["Lobster", "sans-serif"],
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
