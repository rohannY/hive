import { useState, useEffect } from 'react';


export default function NavBar() {

  const [theme, setTheme] = useState<string>('light');

  useEffect(() => {
    if (localStorage.getItem('theme') === null) {
      localStorage.setItem('theme', 'light');
    }
  }, []);

  useEffect(() => {
    const html = document.querySelector('html');
    if (localStorage.getItem('theme') === 'dark') {
      html?.classList.add('dark');
      setTheme('dark');
    } else {
      html?.classList.remove('dark');
      setTheme('light');
    }
  }, [theme]);

  const handleThemeSwitch = () => {
    if (localStorage.getItem('theme') === 'light') {
      setTheme('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      setTheme('light');
      localStorage.setItem('theme', 'light');
    }
  };

  return (
    <div className="container mx-auto font-Geist sticky top-0 z-10 backdrop-blur-xl">
      <nav className="flex py-2 place-content-between flex-wrap mx-auto border-b border-gray-900">
        <div className="flex justify-start space-x-3">
          <img src="" alt="logo" className="h-8 w-8 border" />
          <div className="">
            <span className='text-xl font-medium'>Placa</span>
          </div>
        </div>
        <div className="p-2 flex space-x-4">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-6 h-6 cursor-pointer"
              onClick={handleThemeSwitch}
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"
              />
            </svg>
          </div>
          <p>Menu</p>
        </div>
      </nav>
    </div>
  );
}
