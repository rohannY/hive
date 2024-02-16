import {
  Cross1Icon,
  HamburgerMenuIcon,
  MoonIcon,
  SunIcon,
} from "@radix-ui/react-icons";
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Icon from "@/assets/icon";

export default function NavBar() {
  const [theme, setTheme] = useState<string>("light");
  const [isOpen, setIsOpen] = useState<boolean>(true);

  const location = useLocation();
  const [showNavbar, setShowNavbar] = useState<boolean>(true);

  useEffect(() => {
    if (localStorage.getItem("theme") === null) {
      localStorage.setItem("theme", "light");
    }
    if (location.pathname === "/") {
      setShowNavbar(false);
    } else {
      setShowNavbar(true);
    }
  }, [location.pathname]);

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
    <div
      className={`container mx-auto font-Geist sticky top-0 z-10 backdrop-blur-xl ${
        showNavbar ? "" : "hidden"
      }`}
    >
      <nav className="flex py-2 place-content-between flex-wrap mx-auto border-b border-gray-300 dark:border-gray-900">
        <div className="flex items-center justify-start space-x-3">
          <Link to="/" className="flex items-center space-x-1">
            <div className="w-6 h-6">
              {theme == "light" ? <Icon /> : <Icon fill="white" />}
              {/* yeah ik i have done something here, idk wtf is this "JUGAD" */}
            </div>
            <span className="text-xl font-bold font-Nunito">Hive</span>
          </Link>
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
