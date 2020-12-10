import { BrowserRouter as Router } from 'react-router-dom';
import DashBoard from './feature/DashBoard';
function App() {
  return (
    <Router>
      <div className='App'>
        <DashBoard />
      </div>
    </Router>
  );
}

export default App;
