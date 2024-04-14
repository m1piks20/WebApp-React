import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Main from './MainPage/Main';
// import MainPageRegistry from './MainPageRegistr/MainPageRegistr';
import MemoryPage from './MemoryPage/MemoryPage';
import AddedEpitaphs from './AddedEpitaphs/AddedEpitaphs';
import MemoryPage2 from './MemoryPage2/MemoryPage2';
import MemoryPage3Generate from './MemoryPage3Generate/MemoryPage3Generate';
import MemoryBio from "./MemeryBio/MemoryBio";
import MemoryBio2 from "./MemoryBio2/MemoryBio2";
import MemoryBio3 from "./MemoryBio3/MemoryBio3";
import MemoryBioEnd from "./MemoryBioEnd/MemoryBioEnd";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/MemoryPage" element={<MemoryPage />} />
                <Route path="/AddedEpitaphs" element={<AddedEpitaphs />} />
                <Route path="/MemoryPage2" element={<MemoryPage2 />} />
                <Route path="/MemoryPage3Generate" element={<MemoryPage3Generate />} />
                <Route path="/MemoryBio" element={<MemoryBio />} />
                <Route path="/MemoryBio2" element={<MemoryBio2 />} />
                <Route path="/MemoryBio3" element={<MemoryBio3 />} />
                <Route path="/MemoryBioEnd" element={<MemoryBioEnd />} />
            </Routes>
        </Router>
    );
}

export default App;