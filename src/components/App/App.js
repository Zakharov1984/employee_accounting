import { AppInfo } from '../AppInfo/AppInfo';
import { SearchPanel } from '../SearchPanel/SearchPanel';
import { AppFilter } from '../AppFilter/AppFilter';
import { EmployeeList } from '../EmployeeList/EmployeeList'; 
  
import './app.css';


function App() {
  return (
    <div className="app">
      <AppInfo/>

      <div className="search-panel">
        <SearchPanel/>
        <AppFilter/>
      </div>

      <EmployeeList/>
    </div>
  )
}

export default App;