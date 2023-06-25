import { Edit3 } from 'lucide-react';
import bgProfile from '../assets/bg-profile-sidebar.jpg';
import { Avatar } from './Avatar';

export function Sidebar() {
  return (
    <aside className="bg-white drop-shadow-md dark:bg-gray-800 rounded-lg overflow-hidden">
      <img
        src={bgProfile}
        alt="background profile image"
        className="w-full h-[72px] object-cover"
      />

      <div className="flex flex-col items-center -mt-8">
        <Avatar imgUrl={'https://github.com/lukaswyver.png'} />

        <strong className="text-base mt-4">Lukas Wyver</strong>
        <span className="text-sm text-gray-400">Dev Front-End</span>
      </div>

      <footer className="border-t border-gray-300 dark:border-gray-600 mt-6 pt-6 pb-8 px-8">
        <a
          href="#"
          className="h-[50px] max-w-xs mx-auto bg-transparent font-bold text-success-500 hover:bg-success-500/20 dark:hover:bg-success-500/5 transition-colors duration-75 ease-in-out border border-success-500 rounded-lg flex items-center justify-center gap-2.5 pt-4 pb-3.5"
        >
          <Edit3 color="#00875f" size={16} />
          Editar seu perfil
        </a>
      </footer>
    </aside>
  );
}
