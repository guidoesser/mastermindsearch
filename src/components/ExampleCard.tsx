import React from 'react';
import { User, Target } from 'lucide-react';

interface ExampleCardProps {
  example: {
    name: string;
    focus: string;
    about: string;
  };
}

export const ExampleCard: React.FC<ExampleCardProps> = ({ example }) => {
  return (
    <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-xl p-6 border border-purple-200">
      <h3 className="text-lg font-semibold text-purple-800 mb-4 flex items-center">
        <User className="w-5 h-5 mr-2" />
        Beispiel-Teilnehmer:in
      </h3>
      <div className="space-y-3">
        <div>
          <span className="font-medium text-gray-900">Name:</span>
          <span className="ml-2 text-gray-700">{example.name}</span>
        </div>
        <div className="flex items-start">
          <Target className="w-4 h-4 text-purple-600 mt-1 mr-2 flex-shrink-0" />
          <div>
            <span className="font-medium text-gray-900">Fokus:</span>
            <span className="ml-2 text-gray-700">{example.focus}</span>
          </div>
        </div>
        <div>
          <span className="font-medium text-gray-900">Über mich:</span>
          <p className="mt-1 text-gray-700 text-sm leading-relaxed">{example.about}</p>
        </div>
      </div>
    </div>
  );
};
