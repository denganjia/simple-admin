import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { resolve } from "path";
import Components from "unplugin-vue-components/vite";
import { NaiveUiResolver } from "unplugin-vue-components/resolvers";
import vueSetupExtend from "vite-plugin-vue-setup-extend";
// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		vue(),
		Components({
			resolvers: [NaiveUiResolver()],
		}),
		vueSetupExtend(),
	],
	resolve: {
		alias: {
			"@": resolve(__dirname, "src"),
			"@/*": resolve(__dirname, "src/*"),
		},
	},
	server: {
		open: true,
		proxy: {
			"/api": {
				target: "https://www.fastmock.site/mock/a581e723f7b30c50a56ca20b0d19c4cb/simple-admin",
				changeOrigin: true,
				rewrite: path => path.replace(/^\/api/, ""),
			},
		},
	},
});
