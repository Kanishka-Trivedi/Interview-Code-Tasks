import React, { useState } from 'react';

const names = [
  'Kai Azer',
  'Paedyn Gray',
  'Zade Medows',
  'Adeline Reily',
  'Kitt',
  'Kanishka',
  'Khushbu',
  'Dhruvesh Shyara',
  'Arjun',
  'Rhys Larsen',
  'Ava',
  'Morana',
  'Tristian Caine',
];

function LiveSearch() {
  const [search, setSearch] = useState('');

  const filteredNames = names.filter((name) =>
    name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div style={{ textAlign: 'center', marginTop: '2rem' }}>
      <h2>Live Search Filter</h2>
      <input
        type="text"
        placeholder="Search names..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <ul>
        {filteredNames.map((name, index) => (
          <li key={index}>{name}</li>
        ))}
        {filteredNames.length === 0 && <li>No results found.</li>}
      </ul>
    </div>
  );
}

export default LiveSearch;
