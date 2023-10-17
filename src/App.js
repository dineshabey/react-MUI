import logo from './logo.svg';
import './App.css';
import BasicButtons from './components/BasicButtons';
import LoadingButtonsTransition from './components/LoadingButtonsTransition';

function App() {
  return (
    <div className="App">

      <BasicButtons />
      <LoadingButtonsTransition />
    </div>
  );
}

export default App;
