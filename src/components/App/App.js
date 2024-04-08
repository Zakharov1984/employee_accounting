import { AppInfo } from '../AppInfo/AppInfo';
import { SearchPanel } from '../SearchPanel/SearchPanel';
import { AppFilter } from '../AppFilter/AppFilter'; 
  
import './app.css';


function App() {
  return (
    <div className="app">
      <AppInfo/>

      <div className="search-panel">
        <SearchPanel/>
        <AppFilter/>
      </div>
    </div>
  )
}

export default App;