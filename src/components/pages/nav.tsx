import {
  Cross1Icon,
  HamburgerMenuIcon,
  MoonIcon,
  SunIcon,
  VercelLogoIcon,
} from "@radix-ui/react-icons";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function NavBar() {
  const [theme, setTheme] = useState<string>("light");
  const [isOpen, setIsOpen] = useState<boolean>(true);

  useEffect(() => {
    if (localStorage.getItem("theme") === null) {
      localStorage.setItem("theme", "light");
    }
  }, []);

  useEffect(() => {
    const html = document.querySelector("html");
    if (localStorage.getItem("theme") === "dark") {
      html?.classList.add("dark");
      setTheme("dark");
    } else {
      html?.classList.remove("dark");
      setTheme("light");
    }
  }, [theme]);

  const handleThemeSwitch = () => {
    if (localStorage.getItem("theme") === "light") {
      setTheme("dark");
      localStorage.setItem("theme", "dark");
    } else {
      setTheme("light");
      localStorage.setItem("theme", "light");
    }
  };

  return (
    <div className="container mx-auto font-Geist sticky top-0 z-10 backdrop-blur-xl">
      <nav className="flex py-2 place-content-between flex-wrap mx-auto border-b border-gray-300 dark:border-gray-900">
        <div className="flex items-center justify-start space-x-3">
          <VercelLogoIcon className="h-6 w-6" />
          <div className="">
            <Link to="/">
              <span className="text-xl font-bold">Hive</span>
            </Link>
          </div>
        </div>
        <div className="p-2 flex items-center space-x-4">
          <div onClick={handleThemeSwitch} className="cursor-pointer">
            {theme === "light" ? (
              <SunIcon className="w-5 h-5" />
            ) : (
              <MoonIcon className="w-5 h-5" />
            )}
          </div>
          <div className="cursor-pointer">
            {isOpen ? (
              <HamburgerMenuIcon
                className="w-5 h-5"
                onClick={() => setIsOpen(false)}
              />
            ) : (
              <Cross1Icon className="w-5 h-5" onClick={() => setIsOpen(true)} />
            )}
          </div>
        </div>
      </nav>
    </div>
  );
}
