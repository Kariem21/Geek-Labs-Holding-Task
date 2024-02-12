import './App.css';
import Content from './components/Content/Content';
import Navbar from './components/Navbar/Navbar';
import Titles from './components/Titles/Titles';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Titles/>
      <Content/>
    </div>
  );
}

export default App;
