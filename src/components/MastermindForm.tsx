import React, { useState } from 'react';
import { FormField } from './FormField';
import { SelectField } from './SelectField';
import { InputField } from './InputField';
import { NumberInput } from './NumberInput';
import { CheckboxList } from './CheckboxList';
import { ExampleCard } from './ExampleCard';
import { MastermindGroup } from '../types';

const initialData: MastermindGroup = {
  title: "",
  goal: "",
  target_group: {
    options: [
      "Gründer:innen",
      "Selbstständige",
      "Führungskräfte",
      "Coaches",
      "Kreative",
      "Berufseinsteiger"
    ],
    selected: ""
  },
  experience_level: {
    options: ["Anfänger", "Fortgeschritten", "Gemischt"],
    selected: ""
  },
  group_size: 6,
  meetings: {
    format: {
      options: ["Online", "Vor Ort"],
      selected: ""
    },
    frequency: {
      options: ["wöchentlich", "14-tägig", "monatlich"],
      selected: ""
    },
    duration_minutes: 90,
    structure: {
      options: ["Hot-Seat", "Sechs Denkhüte", "Agenda"],
      selected: ""
    }
  },
  commitment: [
    "Regelmäßige Teilnahme",
    "Vertraulichkeit",
    "Aktive Beteiligung"
  ],
  start: "",
  application: {
    method: {
      options: ["Mail", "PN", "Formular"],
      selected: ""
    },
    fields: ["Name", "Ziele", "Motivation"]
  },
  example: {
    name: "Nadine aus Hamburg",
    focus: "Struktur im Alltag & Marketing",
    about: "Baue gerade mein Online-Business auf und suche Gleichgesinnte, um dranzubleiben."
  }
};

export const MastermindForm: React.FC = () => {
  const [formData, setFormData] = useState<MastermindGroup>(initialData);

  const updateField = (field: string, value: any) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form data:', formData);
    alert('Mastermind-Gruppe erfolgreich erstellt!');
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-4xl mx-auto p-6 space-y-8">
      {/* Basic Information */}
      <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Gruppen-Informationen</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormField label="Gruppen-Titel" required>
            <InputField
              value={formData.title}
              onChange={(value) => updateField('title', value)}
              placeholder="Mastermind-Gruppe für [Thema]"
            />
          </FormField>
          <FormField label="Gemeinsames Ziel" required>
            <InputField
              value={formData.goal}
              onChange={(value) => updateField('goal', value)}
              placeholder="Was möchtet ihr gemeinsam erreichen?"
            />
          </FormField>
        </div>
      </div>

      {/* Target Group & Experience */}
      <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Zielgruppe & Erfahrung</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormField label="Zielgruppe" required>
            <SelectField
              value={formData.target_group.selected}
              onChange={(value) => updateField('target_group', { ...formData.target_group, selected: value })}
              options={formData.target_group.options}
            />
          </FormField>
          <FormField label="Erfahrungslevel" required>
            <SelectField
              value={formData.experience_level.selected}
              onChange={(value) => updateField('experience_level', { ...formData.experience_level, selected: value })}
              options={formData.experience_level.options}
            />
          </FormField>
          <FormField label="Gruppengröße" required>
            <NumberInput
              value={formData.group_size}
              onChange={(value) => updateField('group_size', value)}
              min={3}
              max={12}
            />
          </FormField>
        </div>
      </div>

      {/* Meetings */}
      <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Treffen & Struktur</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormField label="Format" required>
            <SelectField
              value={formData.meetings.format.selected}
              onChange={(value) => updateField('meetings', {
                ...formData.meetings,
                format: { ...formData.meetings.format, selected: value }
              })}
              options={formData.meetings.format.options}
            />
          </FormField>
          <FormField label="Frequenz" required>
            <SelectField
              value={formData.meetings.frequency.selected}
              onChange={(value) => updateField('meetings', {
                ...formData.meetings,
                frequency: { ...formData.meetings.frequency, selected: value }
              })}
              options={formData.meetings.frequency.options}
            />
          </FormField>
          <FormField label="Dauer (Minuten)" required>
            <NumberInput
              value={formData.meetings.duration_minutes}
              onChange={(value) => updateField('meetings', {
                ...formData.meetings,
                duration_minutes: value
              })}
              min={30}
              max={240}
            />
          </FormField>
          <FormField label="Struktur" required>
            <SelectField
              value={formData.meetings.structure.selected}
              onChange={(value) => updateField('meetings', {
                ...formData.meetings,
                structure: { ...formData.meetings.structure, selected: value }
              })}
              options={formData.meetings.structure.options}
            />
          </FormField>
        </div>
      </div>

      {/* Commitment */}
      <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Verpflichtungen</h2>
        <FormField label="Erwartungen an Teilnehmer:innen">
          <CheckboxList
            items={formData.commitment}
            selected={formData.commitment}
            onChange={() => {}}
          />
        </FormField>
      </div>

      {/* Start & Application */}
      <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Start & Bewerbung</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormField label="Starttermin" required>
            <InputField
              value={formData.start}
              onChange={(value) => updateField('start', value)}
              placeholder="Datum oder 'ab sofort'"
            />
          </FormField>
          <FormField label="Bewerbungsmethode" required>
            <SelectField
              value={formData.application.method.selected}
              onChange={(value) => updateField('application', {
                ...formData.application,
                method: { ...formData.application.method, selected: value }
              })}
              options={formData.application.method.options}
            />
          </FormField>
        </div>
      </div>

      {/* Example */}
      <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Beispiel-Teilnehmer:in</h2>
        <ExampleCard example={formData.example} />
      </div>

      {/* Submit Button */}
      <div className="text-center">
        <button
          type="submit"
          className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-3 px-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105"
        >
          Mastermind-Gruppe Erstellen
        </button>
      </div>
    </form>
  );
};
