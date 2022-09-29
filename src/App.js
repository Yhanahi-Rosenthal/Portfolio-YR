import { BrowserRouter} from "react-router-dom";
import './App.css';
import ChangePage from './components/ChangePage';

function App() {

  return (
    <>
      <BrowserRouter>
        <ChangePage />
      </BrowserRouter>
    </>
  );
}

export default App;
