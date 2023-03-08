import logo from './logo.svg';
import './App.css';
import BucketTransfer from './BucketTransfer';
import Topbar from './Topbar';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Design from './Design';

function App() {
  return (
    <>
      <div>
        <Topbar />
      </div>
      <div style={{marginTop:"70px"}}>
        <Design/>
      </div>
    </>
  );
}

export default App;
