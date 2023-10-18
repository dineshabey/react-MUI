import logo from './logo.svg';
import './App.css';
import BasicButtons from './components/BasicButtons';
import LoadingButtonsTransition from './components/LoadingButtonsTransition';
import CustomizedRating from './components/CustomizedRating';
import SelectOtherProps from './components/SelectOtherProps';
import BasicTextFields from './components/BasicTextFields';
import Types from './components/Types';
import ScrollDialog from './components/ScrollDialog';

function App() {
  return (
    <div className="App">

      <BasicButtons />
      <LoadingButtonsTransition />
      <CustomizedRating />
      <SelectOtherProps />
      <BasicTextFields />
      <br />
      <Types />
      <br />
      <ScrollDialog />
    </div>
  );
}

export default App;
