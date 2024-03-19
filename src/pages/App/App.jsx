import { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import { getUser } from '../../utilities/users-services';

import './App.css';

import AuthPage from '../AuthPage/AuthPage';
import NotesPage from '../NotesPage/NotesPage';

import NavBar from '../../components/NavBar/NavBar';

function App() {
  const [user, setUser] = useState(getUser());
  return (
    <main className="App">
      { user ?
        <>
          <NavBar user={ user } setUser={ setUser } />
          <Routes>
            <Route path="/notes" element={<NotesPage />} />
            <Route path="*" element={<Navigate to="/notes" />} />
          </Routes>
        </>
        :
        <AuthPage setUser={ setUser }/>  
      }
    </main>
  );
}

export default App;