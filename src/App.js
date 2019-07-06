import React from 'react';
import { HashRouter as Router } from 'react-router-dom'
import routes from './routes'
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        {routes}
      </div>
    </Router>
  );
}

export default App;
