import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from './component/Homepage';
import DashBoard from "./component/DashBoard";
import LeadsPage from "./component/LeadsPage";
import EmployeesPage from "./component/EmployeesPage";
import SettingsPage from "./component/SettingsPage";
import MobileViewWrapper from "./component/MobileViewWrapper";
import EmpDashboard from "./component/EmpDashboard";
import EmpLeads from "./component/EmpLeads";
import EmpSchedule from "./component/EmpSchedule";
import EmpProfile from "./component/EmpProfile";
function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} >
          <Route path="/dashboard" element={<DashBoard />} />
          <Route path="/leads" element={<LeadsPage />} />
          <Route path="/employees" element={<EmployeesPage />} />
          <Route path="/settings" element={<SettingsPage />} />
        </Route>
        <Route path="/" element={<MobileViewWrapper />}>
          <Route path="/emp-dashboard" element={<EmpDashboard />} />
          <Route path="/emp-leads" element={<EmpLeads />} />
          <Route path="/emp-schedule" element={<EmpSchedule />} />
          <Route path="/emp-profile" element={<EmpProfile />} />
        </Route>
      </Routes>

    </BrowserRouter>
  )
}

export default App
