import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Moon, Sun } from 'lucide-react';
import { useThemeStore } from '../stores/themeStore';

const Navbar = () => {
  const { isDarkMode, toggleTheme } = useThemeStore();

  return (
    <nav className={`sticky top-0 z-50 ${
      isDarkMode ? 'bg-gray-800 text-gray-100' : 'bg-white text-gray-900'
    } shadow-md`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <Heart className="h-8 w-8 text-rose-500" />
            <span className="text-xl font-bold">MentalCare</span>
          </Link>

          <div className="hidden md:flex space-x-8">
            <Link to="/self-esteem" className="hover:text-rose-500 transition-colors">
              Autoestima
            </Link>
            <Link to="/emotional-help" className="hover:text-rose-500 transition-colors">
              Autoayuda
            </Link>
            <Link to="/relaxation" className="hover:text-rose-500 transition-colors">
              Relajación
            </Link>
            <Link to="/anti-stress" className="hover:text-rose-500 transition-colors">
              Antiestrés
            </Link>
            <Link to="/ai-chat" className="hover:text-rose-500 transition-colors">
              Chat IA
            </Link>
          </div>

          <button
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
          >
            {isDarkMode ? (
              <Sun className="h-5 w-5" />
            ) : (
              <Moon className="h-5 w-5" />
            )}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;