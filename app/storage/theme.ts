import { useEffect, useState } from "react";

export type Theme = "light" | "dark";

export const useTheme = () => {
	const themeFromLocalStorage = (typeof window !== 'undefined' ? (localStorage.getItem("theme") || "light") : "light") as Theme;
	const [theme, setTheme] = useState<Theme>(themeFromLocalStorage);

	useEffect(() => {
		if (typeof window !== 'undefined') {
			localStorage.setItem("theme", theme);
			const htmlNode = document.querySelector("html");
			htmlNode?.setAttribute("data-theme", theme);
			htmlNode?.setAttribute("class", theme);
		}
	}, [theme]);

	return { theme, setTheme };
};
