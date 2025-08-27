import React from 'react';
import { Users, Brain } from 'lucide-react';

export const Header: React.FC = () => {
  return (
    <header className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center justify-center space-x-4 mb-6">
          <div className="flex items-center space-x-2">
            <Users className="w-8 h-8" />
            <Brain className="w-8 h-8" />
          </div>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">
          Mastermind Gruppe Erstellen
        </h1>
        <p className="text-xl text-center text-blue-100 max-w-3xl mx-auto">
          Finde Gleichgesinnte für deine persönliche und berufliche Entwicklung
        </p>
      </div>
    </header>
  );
};
