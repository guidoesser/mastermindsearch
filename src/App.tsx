import React from 'react';
import { Header } from './components/Header';
import { MastermindForm } from './components/MastermindForm';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      <Header />
      <main className="py-12 px-4 sm:px-6 lg:px-8">
        <MastermindForm />
      </main>
      <footer className="bg-gray-900 text-white py-8 mt-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p>© 2024 Mastermind Groups. Erstellt mit ❤️ für persönliches Wachstum.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
