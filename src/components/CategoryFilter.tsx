import React from 'react';

const categories = [
  'All Parts',
  'Engine',
  'Brakes',
  'Suspension',
  'Exhaust',
  'Lighting',
  'Wheels',
  'Gear'
];

export default function CategoryFilter() {
  return (
    <div className="w-full overflow-x-auto bg-white shadow-sm mb-6">
      <div className="flex gap-2 p-4 max-w-7xl mx-auto">
        {categories.map((category) => (
          <button
            key={category}
            className="whitespace-nowrap px-4 py-2 rounded-full text-sm font-medium
              hover:bg-blue-50 hover:text-blue-600 transition-colors
              focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
}