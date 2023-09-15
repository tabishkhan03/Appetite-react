import Allroutes from './Allroutes';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Allroutes/>
      </div>
    </BrowserRouter>
  );
}

export default App;
