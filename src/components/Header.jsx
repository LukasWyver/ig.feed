import { MoonStar, Quote, Sun } from 'lucide-react';
import { useEffect, useState } from 'react';

export function Header() {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  function toggleDarkMode() {
    setDarkMode(!darkMode);
  }


  return (
    <header className="flex max-h-[100px] items-center justify-center gap-3 bg-white drop-shadow-md dark:bg-gray-800 px-0 py-5 relative">
      <strong className="flex items-baseline text-4xl">
        ig.feed
      </strong>

      <Quote size={32} className='text-success-500' />

      <button onClick={toggleDarkMode} className='absolute right-5'>
            {darkMode ? (
              <MoonStar color="#c4c4cc" size={20}/>
            ) : (
              <Sun color="#202024" size={20}/>
            )}
          </button>
    </header>
  );
}
