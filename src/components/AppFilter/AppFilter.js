import './appFilter.css';

export const AppFilter = () => {
  return (
    <div className="btn-group">
      <button 
        className="btn btn-light"
        type="button">
          Все сотрудники
      </button>
      <button 
        className="btn btn-outline-light"
        type="button">
          Cотрудники на повышение
      </button>
      <button 
        className="btn btn-outline-light"
        type="button">
          З/П больше 100$
      </button>
    </div>
  )
}