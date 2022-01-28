import './App.css';
import Topbar from './components/topbar/Topbar';
import ReactBootstrap from './components/reactBootstrap/ReactBootstrap';

import logo from './images/logo.png'

function App() {
  return (
    <div className='App'>
      <Topbar logo={logo} />

      <ReactBootstrap/>
    </div>
  );
}

export default App;
