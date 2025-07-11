import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from '@/components/ui/toaster';
import HomePage from '@/pages/HomePage.jsx';
import BuildingDetail from '@/pages/BuildingDetail.jsx';
import SubBuildingDetail from '@/pages/SubBuildingDetail.jsx';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/building/:buildingId" element={<BuildingDetail />} />
          <Route path="/building/:buildingId/sub/:subBuildingId" element={<SubBuildingDetail />} />
        </Routes>
        <Toaster />
      </div>
    </Router>
  );
}

export default App;