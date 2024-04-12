import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Main from './MainPage/Main';
import MemoryPage from './MemoryPage/MemoryPage';
import AddedEpitaphs from './AddedEpitaphs/AddedEpitaphs';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/MemoryPage" element={<MemoryPage />} />
                <Route path="/AddedEpitaphs" element={<AddedEpitaphs />} />
            </Routes>
        </Router>
    );
}

export default App;