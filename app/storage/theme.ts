import { useEffect, useState } from "react";

export type Theme = "light" | "dark";

export const useTheme = () => {
	const themeFromLocalStorage = (localStorage.getItem("theme") ||
		"light") as Theme;
	const [theme, setTheme] = useState<Theme>(themeFromLocalStorage);

	useEffect(() => {
		const htmlNode = document.querySelector("html");
		htmlNode?.setAttribute("data-theme", theme);
		htmlNode?.setAttribute("class", theme);
		localStorage.setItem("theme", theme);
	}, [theme]);

	return { theme, setTheme };
};
