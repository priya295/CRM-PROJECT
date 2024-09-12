import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/SuperAdmin/Login';
import Register from './pages/SuperAdmin/Register';
import SuperAdmin_Dashboard from './pages/SuperAdmin/Dashboard';
import Front from './pages/front';
import SuperAdmin_Profile from './pages/SuperAdmin/Profile';
import SuperAdmin_Package from './pages/SuperAdmin/Package/package';
import SuperAdmin_Subscription from './pages/SuperAdmin/Subscription/subscription';
import SuperAdmin_CreatePackage from "./pages/SuperAdmin/Package/Create_Package";
import SuperAdmin_CreateSubscription  from "./pages/SuperAdmin/Subscription/create_subscription";
import SuperAdmin_update_package from "./pages/SuperAdmin/Package/update_package";
import SuperAdmin_create_user from "./pages/SuperAdmin/User/create_user";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Front />} />
        <Route path="/superadmin/login" element={<Login />} />
        <Route path="/superadmin/register" element={<Register />} />
        <Route path="/superadmin/dashboard" element={<SuperAdmin_Dashboard />} />
        <Route path="/superadmin/profile" element={<SuperAdmin_Profile />} />
        <Route path='/superadmin/package'  element={<SuperAdmin_Package />} />
        <Route path='/superadmin/create_package'  element={<SuperAdmin_CreatePackage />} />
        <Route path='/superadmin/create_subscription'  element={<SuperAdmin_CreateSubscription />} />
        <Route path='/superadmin/subscription'  element={<SuperAdmin_Subscription />} />
        <Route path="/superadmin/update_package/:packageId" element={<SuperAdmin_update_package />} />
        <Route path="/superadmin/create_user" element={<SuperAdmin_create_user />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
