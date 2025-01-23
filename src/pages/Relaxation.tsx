import React from 'react';
import AudioPlayer from '../components/AudioPlayer';

const Relaxation = () => {
  const meditations = [
    {
      title: "Meditación Guiada para la Paz Interior",
      audioUrl: "https://example.com/meditation1.mp3"
    },
    {
      title: "Sonidos de la Naturaleza - Lluvia Suave",
      audioUrl: "https://example.com/nature1.mp3"
    },
    {
      title: "Respiración Consciente - 10 minutos",
      audioUrl: "https://example.com/breathing.mp3"
    }
  ];

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-8">Terapias de Relajación</h1>
      
      <div className="grid gap-6">
        {meditations.map((meditation, index) => (
          <AudioPlayer
            key={index}
            title={meditation.title}
            audioUrl={meditation.audioUrl}
          />
        ))}
      </div>

      <div className="mt-12">
        <h2 className="text-2xl font-semibold mb-4">Técnicas de Relajación</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-3">Respiración 4-7-8</h3>
            <p className="text-gray-600 dark:text-gray-300">
              1. Inhala por la nariz durante 4 segundos<br />
              2. Mantén la respiración durante 7 segundos<br />
              3. Exhala por la boca durante 8 segundos<br />
              4. Repite el ciclo 4 veces
            </p>
          </div>
          
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-3">Relajación Muscular Progresiva</h3>
            <p className="text-gray-600 dark:text-gray-300">
              1. Tensa cada grupo muscular por 5 segundos<br />
              2. Relaja lentamente durante 10 segundos<br />
              3. Observa la diferencia entre tensión y relajación<br />
              4. Avanza desde los pies hasta la cabeza
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Relaxation;