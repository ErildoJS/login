import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom'
import Global from './styles/global'
import Routes from './routes'

function App() {
  return (
    <Router>
      <Routes />
    <Global />
    </Router>
  )
}

export default App;
