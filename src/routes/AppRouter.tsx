import { Route,Routes,BrowserRouter,Navigate } from "react-router-dom"

import LoginPage from "../pages/Login/LoginPage"
import NotFound from "../pages/NotFound/NotFound"
import DashboardPage from "../pages/Dashboard/DashboardPage"
import AdminLayout from "../layout/AdminLayout"

function AppRouter() {
  return (
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Navigate to="/login" replace />} />
          
            <Route path="/login" element={<LoginPage/>}/>
          
            <Route element={<AdminLayout/>}>
              <Route path="dashboard" element={<DashboardPage/>}/>
            </Route>

            <Route path="*" element={<NotFound/>}/>

        </Routes>
      </BrowserRouter>
  )
}

export default AppRouter
