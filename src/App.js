import './App.css';
import Topbar from './components/topbar/Topbar';
import ReactBootstrap from './components/reactBootstrap/ReactBootstrap';
import Mui from './components/mui/Mui';

import logo from './images/logo.png'

function App() {
  return (
    <div className='App'>
      <Mui />
      <Topbar logo={logo} />
      <ReactBootstrap/>
    </div>
  );
}

export default App;
