import { NavLink } from "react-router-dom";
import {
    FaHome,
    FaUsers,
    FaCar,
    FaBuilding,
    FaMoneyBillWave,
    FaUserCircle,
    FaSignOutAlt,
  } from "react-icons/fa";

import Logo from '../../assets/Logo.png'

function SideBar(){

    const menuItems=[
        {
            name: "Dashboard",
            path: "/dashboard",
            icon: <FaHome />,
        },
        {
            name: "Müşteriler",
            path: "/customers",
            icon: <FaUsers />,
        },
        {
            name: "Araçlar",
            path: "/cars",
            icon: <FaCar />,
        },
        {
            name: "Bayiler",
            path: "/dealers",
            icon: <FaBuilding />,
        },
        {
            name: "Satışlar",
            path: "/sales",
            icon: <FaMoneyBillWave />,
        },
        {
            name: "Hesap",
            path: "/account",
            icon: <FaUserCircle />,
        },
    ]
    return(
        <aside className="flex h-screen w-60 flex-col bg-sidebar text-white">
            {/* Logo */}
            <div className="flex items-center justify-center gap-3 h-20 border-b border-sidebar-muted/10 ">
                <img src={Logo} alt="Otomotiv Bayi Yönetim Sistemi" className="h-18 object-contain" />
            </div>
        
            {/* Menü */}
            <nav className="flex-1 space-y-2 p-6">
                {menuItems.map((item)=>(
                    <NavLink 
                    key={item.path}
                    to={item.path}
                    className={({ isActive }) =>
                        `flex items-center gap-3 rounded-lg px-4 py-3 text-sm font-medium transition ${
                          isActive
                            ? "bg-primary text-white shadow-md"
                            : "text-sidebar-muted hover:bg-sidebar-hover hover:text-sidebar-text"
                        }`
                      }
                    >
                        <span className="text-lg">{item.icon}</span>
                        <span>{item.name}</span>
                    </NavLink>
                ))}
            </nav>
            
            <div className="border-t border-sidebar-muted/10 p-4">
                <button type="button" 
                className="flex w-full items-center gap-4 rounded-lg px-4 py-3 text-sm font-medium text-white/80 transition hover:bg-white/10 hover:text-white cursor-pointer">
                    <FaSignOutAlt/>
                    <span>Çıkış Yap</span>
                </button>
            </div>

        </aside>    
    )

}

export default SideBar;