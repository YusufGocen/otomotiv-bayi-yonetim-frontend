import { Outlet } from "react-router-dom"
import SideBar from "../components/Layout/Sidebar"
import Navbar from "../components/Layout/Navbar"

function AdminLayout() {
  return (
    <div className="flex min-h-screen bg-background">
      <SideBar/>

      <div className="flex min-w-0 flex-1 flex-col bg-background">
        <Navbar/>

        <main className="flex-1 p-6">
          <Outlet/>
        </main>

      </div>

      
    </div>
  )
}
export default AdminLayout;
