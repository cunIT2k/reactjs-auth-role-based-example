import React from 'react';
import './styles/index.less';
import AppLayout from './components/layout';
import HomePage from './pages/home';

function App() {
  return (
    <div className="App">
      <AppLayout>
        <HomePage />
      </AppLayout>
    </div>
  );
}

export default App;
