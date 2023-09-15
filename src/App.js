import Allroutes from './Allroutes';
import './App.css';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Allroutes/>
      </div>
    </BrowserRouter>
  );
}

export default App;
