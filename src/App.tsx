import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useState } from 'react';
import LandingPage from './components/LandingPage';
import OwnerDashboard from './components/owner/OwnerDashboard';
import OwnerLayout from './components/owner/OwnerLayout';
import MyEquipment from './components/owner/MyEquipment';
import AddEquipment from './components/owner/AddEquipment';
import BookingRequests from './components/owner/BookingRequests';
import OwnerActiveRentals from './components/owner/OwnerActiveRentals';
import EarningsSummary from './components/owner/EarningsSummary';
import OwnerProfile from './components/owner/OwnerProfile';
import FarmerDashboard from './components/farmer/FarmerDashboard';
import FarmerLayout from './components/farmer/FarmerLayout';
import SearchEquipment from './components/farmer/SearchEquipment';
import MyRequests from './components/farmer/MyRequests';
import FarmerActiveRentals from './components/farmer/FarmerActiveRentals';
import RentalHistory from './components/farmer/RentalHistory';
import Feedback from './components/farmer/Feedback';
import FarmerProfile from './components/farmer/FarmerProfile';
import EquipmentDetail from './components/farmer/EquipmentDetail';

export default function App() {
  const [currentUser, setCurrentUser] = useState<'owner' | 'farmer' | null>(null);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage onRoleSelect={setCurrentUser} />} />
        
        {/* Equipment Owner Routes */}
        <Route path="/owner" element={<OwnerLayout />}>
          <Route index element={<Navigate to="/owner/dashboard" replace />} />
          <Route path="dashboard" element={<OwnerDashboard />} />
          <Route path="equipment" element={<MyEquipment />} />
          <Route path="add-equipment" element={<AddEquipment />} />
          <Route path="booking-requests" element={<BookingRequests />} />
          <Route path="active-rentals" element={<OwnerActiveRentals />} />
          <Route path="earnings" element={<EarningsSummary />} />
          <Route path="profile" element={<OwnerProfile />} />
        </Route>

        {/* Farmer Routes */}
        <Route path="/farmer" element={<FarmerLayout />}>
          <Route index element={<Navigate to="/farmer/dashboard" replace />} />
          <Route path="dashboard" element={<FarmerDashboard />} />
          <Route path="search" element={<SearchEquipment />} />
          <Route path="equipment/:id" element={<EquipmentDetail />} />
          <Route path="requests" element={<MyRequests />} />
          <Route path="active-rentals" element={<FarmerActiveRentals />} />
          <Route path="history" element={<RentalHistory />} />
          <Route path="feedback" element={<Feedback />} />
          <Route path="profile" element={<FarmerProfile />} />
        </Route>
      </Routes>
    </Router>
  );
}
