import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/SuperAdmin/Login';
import SuperAdmin_login from "./pages/SuperAdmin/superlogin";
import Register from './pages/SuperAdmin/Register';
import SuperAdmin_Dashboard from './pages/SuperAdmin/Dashboard';
import Front from './pages/front';
import SuperAdmin_Profile from './pages/SuperAdmin/Profile';
import SuperAdmin_Package from './pages/SuperAdmin/package';
import SuperAdmin_CreatePackage from "./pages/SuperAdmin/Create_Package";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Front />} />
        <Route path="/superadmin/login" element={<Login />} />
        <Route path="/superadmin/superlogin" element={<SuperAdmin_login/>} />
        <Route path="/superadmin/register" element={<Register />} />
        <Route path="/superadmin/dashboard" element={<SuperAdmin_Dashboard />} />
        <Route path="/superadmin/profile" element={<SuperAdmin_Profile />} />
        <Route path='/superadmin/package'  element={<SuperAdmin_Package />} />
        <Route path='/superadmin/create_package'  element={<SuperAdmin_CreatePackage />} />
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
