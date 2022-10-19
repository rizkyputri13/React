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
import RegionViewApi from './ViewApi/RegionViewApi';

function App() {
  return (
    <div>
      <RegionViewApi/>
    </div>
  );
}

export default App;
