import { Route,Routes,BrowserRouter,Navigate } from "react-router-dom"

import LoginPage from "../pages/Login/LoginPage"
import NotFound from "../pages/NotFound/NotFound"
import DashboardPage from "../pages/Dashboard/DashboardPage"
import AdminLayout from "../layout/AdminLayout"
import CustomerPage from "../pages/Customer/CustomerPage"
import CarPage from "../pages/Car/CarPage"
import DealerPage from "../pages/Dealer/DealerPage"
import SalesPage from "../pages/Sales/SalesPage"
import AccountPage from "../pages/Account/AccountPage"
import ProtectedRoute from "./ProtectedRoute"

function AppRouter() {
  return (
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Navigate to="/login" replace />} />
          
            <Route path="/login" element={<LoginPage/>}/>
          
            <Route element={<ProtectedRoute/>}>
              <Route element={<AdminLayout/>}>
                <Route path="dashboard" element={<DashboardPage/>}/>
                <Route path="customers" element={<CustomerPage/>}/>
                <Route path="cars" element={<CarPage/>}/>
                <Route path="dealers" element={<DealerPage/>}/>
                <Route path="sales" element={<SalesPage/>}/>
                <Route path="account" element={<AccountPage/>}/>
              </Route>
            </Route>
            <Route path="*" element={<NotFound/>}/>



        </Routes>
      </BrowserRouter>
  )
}

export default AppRouter
