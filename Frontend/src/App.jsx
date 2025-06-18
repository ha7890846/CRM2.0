import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from './component/Homepage';
import DashBoard from "./component/DashBoard";
import LeadsPage from "./component/LeadsPage";
import EmployeesPage from "./component/EmployeesPage";
import SettingsPage from "./component/SettingsPage";
function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} >
          <Route path="/dashboard" element={<DashBoard/>}/>
          <Route path="/leads" element={<LeadsPage/>}/>
          <Route path="/employees" element={<EmployeesPage/>}/>
          <Route path="/settings" element={<SettingsPage/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
