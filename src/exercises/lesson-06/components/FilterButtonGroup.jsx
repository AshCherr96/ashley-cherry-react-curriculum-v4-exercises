export default function FilterButtonGroup({ currentFilter, onFilterChange }) {
  const filters = ['all', 'completed', 'pending'];
  return (
    <div>
      {filters.map((f) => (
        <button key={f} onClick={() => onFilterChange(f)}>
          {f.charAt(0).toUpperCase() + f.slice(1)}
        </button>
      ))}
      <p>Current filter: {currentFilter}</p>
    </div>
  );
}
