import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import SelfEsteem from './pages/SelfEsteem';
import EmotionalHelp from './pages/EmotionalHelp';
import Relaxation from './pages/Relaxation';
import AntiStress from './pages/AntiStress';
import AIChat from './pages/AIChat';
import { useThemeStore } from './stores/themeStore';

function App() {
  const isDarkMode = useThemeStore((state) => state.isDarkMode);

  return (
    <Router>
      <div className={`min-h-screen transition-colors duration-200 ${
        isDarkMode ? 'bg-gray-900 text-gray-100' : 'bg-gray-50 text-gray-900'
      }`}>
        <Navbar />
        <main className="container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/self-esteem" element={<SelfEsteem />} />
            <Route path="/emotional-help" element={<EmotionalHelp />} />
            <Route path="/relaxation" element={<Relaxation />} />
            <Route path="/anti-stress" element={<AntiStress />} />
            <Route path="/ai-chat" element={<AIChat />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;