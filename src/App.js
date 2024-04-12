import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Main from './Main';
import MemoryPage from '../../untileted/my-app-name/src/MemoryPage';

function App() {
    return (
        <Router>
            <Routes>
                <Route exact path="/" element={<Main />} />
                <Route path="/MemoryPage" element={<MemoryPage />} />
            </Routes>
        </Router>
    );
}

export default App;