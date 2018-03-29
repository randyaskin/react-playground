import React from 'react';
import './App.css';
import Header from '../Header/Header';
import ProgressBar from '../ProgressBar/ProgressBar';
import ContactList from '../ContactList/ContactList';

function App(props) {
  return (
    <div>
      <Header />
      <main>
        <h4>Progress:</h4>
        <ProgressBar progress="40" />
        <h4>Contacts:</h4>
        <ContactList />
      </main>
    </div>
  );
}

export default App;
