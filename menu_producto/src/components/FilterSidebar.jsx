import './FilterSidebar.css'; // Asegúrate de tener este archivo CSS para estilos

export default function FilterSidebar({ onFilterChange }) {
  // Array con todos los equipos
  const equipos = [
    'Todos',
    'Lakers', 'Warriors', 'Bulls', 'Celtics', 'Heat', 'Spurs', 'Nets', 
    '76ers', 'Suns', 'Bucks', 'Mavericks', 'Clippers', 'Nuggets', 'Raptors', 
    'Kings', 'Knicks', 'Pistons', 'Hornets', 'Thunder', 'Hawks', 'Timberwolves',
    'Magic', 'Pacers', 'Pelicans', 'Trail Blazers', 'Jazz', 'Grizzlies', 'Rockets', 
    'Wizards'
  ];

  return (
    <aside className="filter-sidebar">
      <h3>Filtros</h3>

      <label>Equipo:</label>
      <select onChange={(e) => onFilterChange(e.target.value)}>
        {equipos.map((equipo) => (
          <option key={equipo} value={equipo}>
            {equipo}
          </option>
        ))}
      </select>
    </aside>
  );
}

  