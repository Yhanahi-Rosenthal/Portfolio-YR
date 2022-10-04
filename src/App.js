import { BrowserRouter} from "react-router-dom";
import './css/style.scss';
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
