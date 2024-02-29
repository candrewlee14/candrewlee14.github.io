import { Link } from "@remix-run/react";
import AndrewLogo from "./andrew";
import { useTheme } from "~/storage/theme";
import { FaMoon, FaSun } from "react-icons/fa";
import { useLocation } from "@remix-run/react";

export function ThemeToggle() {
    const { theme, setTheme } = useTheme();
    return (
        <button
            type="button"
            className="absolute top-10 right-4 md:right-10 text-3xl transition-all hover:rotate-45"
            onClick={() =>
                setTheme((curTheme) => (curTheme === "light" ? "dark" : "light"))
            }
        >
            {theme === "light" ? <FaMoon /> : <FaSun />}
        </button>
    );
}

export function Navbar() {
    const location = useLocation();
    const isBlog = location.pathname === "/blog";
    const isWork = location.pathname === "/work";
    const isHome = location.pathname === "/";
    return (
        <div className="my-8 mb-10 flex justify-around flex-wrap">
            <Link to="/" className="my-8">
                <AndrewLogo className="mx-auto" />
            </Link>
            <ThemeToggle />
            <div id="navbar" className="prose-xl flex mx-auto justify-center relative mt-4 lg:mt-0 lg:absolute lg:top-8 lg:right-24 p-1 rounded max-w-min">
                <div className="mx-3 whitespace-nowrap">👨<Link to='/' className={isHome ? "text-blue-400 dark:text-blue-500" : "no-underline"}>About</Link></div>
                <div className="mx-3 whitespace-nowrap">⚒️<Link to='/work' className={isWork ? "text-blue-400 dark:text-blue-500" : "no-underline"}>Work</Link></div>
                <div className="mx-3 whitespace-nowrap">📃<Link to='/blog' className={isBlog ? "text-blue-400 dark:text-blue-500" : "no-underline"}>Blog</Link></div>
            </div>
        </div>
    );

}