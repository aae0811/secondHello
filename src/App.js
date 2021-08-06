
import './App.css';
import Sidebar from './Components/Sidebar';
import Navbar from './Components/Navbar';
import Body from './Components/Body';

function App() {
  return (
    <div className="container">
        <div>
             <Sidebar/>
        </div>
        <div className="background">
             <Navbar/>
             <Body/>
        </div>
    </div>
  );
}

export default App;
