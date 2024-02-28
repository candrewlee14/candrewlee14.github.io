import { vitePlugin as remix } from "@remix-run/dev";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import { qrcode } from 'vite-plugin-qrcode';

export default defineConfig({
	plugins: [
		remix({
			ssr: false,
			ignoredRouteFiles: ["**/*.css"],
		}),
		tsconfigPaths(),
    qrcode(), // only applies in dev mode
	],
});
