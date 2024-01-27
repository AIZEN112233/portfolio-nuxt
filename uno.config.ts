// uno.config.ts
import { defineConfig, presetTypography, presetUno, presetWebFonts, transformerDirectives, transformerVariantGroup } from "unocss";

export default defineConfig({
	shortcuts: [
		// ...
	],
	theme: {
		colors: {
			// ...
		},
	},
	presets: [
		presetUno(),
		presetTypography(),
		presetWebFonts({
			provider: "google",
			fonts: {
				poppins: ["Poppins", "sans-serif"],
			},
		}),
	],
	transformers: [transformerDirectives(), transformerVariantGroup()],
});
