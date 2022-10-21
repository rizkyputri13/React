import logo from './logo.svg';
import './App.css';
import Counter from './Counter/Counter';
import CounterArrow from './Counter/CounterArrow';
import CounterHook from './Counter/CounterHook';
import Parent from './ParentChild/Parent';
import EmployeeList from './List/EmployeeList';
import ListEmployee from './Form/ListEmployee';
import EmployeeRedux from './ReduxList/EmployeeRedux';
import EmployeeReduxToolkit from './ReduxList/EmployeeReduxToolkit';
import RegionViewApi from './ViewApiRegion/RegionViewApi';
import CountryViewApi from './ViewApiCountry/CountryViewApi';
import DepartmentViewApi from './ViewApiDepartment/DepartmentViewApi';
import EmployeeViewApi from './ViewApiEmployee/EmployeeViewApi';
import JobViewApi from './ViewApiJob/JobViewApi';
import JobHistoryViewApi from './ViewApiJobHistory/JobHisViewApi';
import LocationViewApi from './ViewApiLocation/LocationViewApi';

function App() {
  return (
    <div>
      <RegionViewApi/>
    </div>
  );
}

export default App;
