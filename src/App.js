import logo from './logo.svg';
import './App.css';
import BasicButtons from './components/BasicButtons';
import LoadingButtonsTransition from './components/LoadingButtonsTransition';
import CustomizedRating from './components/CustomizedRating';
import SelectOtherProps from './components/SelectOtherProps';

function App() {
  return (
    <div className="App">

      <BasicButtons />
      <LoadingButtonsTransition />
      <CustomizedRating />
      <SelectOtherProps />
    </div>
  );
}

export default App;
