import { defineStore } from "pinia";
import { composite } from "seemly";
function createHoverColor(color: string, overlayAlpha: number = 0.15): string {
	return composite(color, [255, 255, 255, overlayAlpha]);
}

function createPressedColor(color: string, overlayAlpha: number = 0.15): string {
	return composite(color, [0, 0, 0, overlayAlpha]);
}
export const useTheme = defineStore("theme", {
	state: () => ({
		isDarkTheme: false,
		primaryColor: "#18A058",
		primaryColorHover: "#36ad6a",
		primaryColorPressed: "#0c7a43",
		navBarStyle: "dark",
	}),
	getters: {
		darkTheme(state) {
			return state.isDarkTheme;
		},
		themeOverrides(state) {
			return {
				primaryColor: state.primaryColor,
				primaryColorHover: state.primaryColorHover,
				primaryColorPressed: state.primaryColorPressed,
				primaryColorSuppl: state.primaryColorHover,
			};
		},
	},
	actions: {
		switchDarkTheme() {
			this.isDarkTheme = !this.isDarkTheme;
		},
		setPrimaryColor(color: string) {
			this.primaryColor = color;
			this.primaryColorHover = createHoverColor(color);
			this.primaryColorPressed = createPressedColor(color);
		},
	},
	persist: true,
});
