import React from 'react';

interface CheckboxListProps {
  items: string[];
  selected: string[];
  onChange: (items: string[]) => void;
  className?: string;
}

export const CheckboxList: React.FC<CheckboxListProps> = ({
  items,
  selected,
  onChange,
  className = ''
}) => {
  const handleToggle = (item: string) => {
    const newSelected = selected.includes(item)
      ? selected.filter(i => i !== item)
      : [...selected, item];
    onChange(newSelected);
  };

  return (
    <div className={`space-y-2 ${className}`}>
      {items.map((item) => (
        <label key={item} className="flex items-center space-x-3 cursor-pointer">
          <input
            type="checkbox"
            checked={selected.includes(item)}
            onChange={() => handleToggle(item)}
            className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
          />
          <span className="text-sm text-gray-700">{item}</span>
        </label>
      ))}
    </div>
  );
};
