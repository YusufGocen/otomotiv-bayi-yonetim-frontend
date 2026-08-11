import {FaCar,FaBuilding,FaUsers,FaShoppingCart,FaMoneyBillWave,} from "react-icons/fa";
import StatCard from "../../components/Ui/StatCard";
import SalesChart from "../../components/Ui/SalesChart";
import QuickActions from "../../components/Ui/QuickActions";
import CarStatusChart from "../../components/Ui/CarStatusChart";
import RecentCars from "../../components/Ui/RecentCars";
import RecentSales from "../../components/Ui/RecentSales/RecentSales";

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
        <StatCard title="Toplam Araç" icon={<FaCar/>} iconClassName="bg-blue-100 text-primary"/> 
        <StatCard title="Toplam Bayi" icon={<FaBuilding/>} iconClassName="bg-green-100 text-success"/> 
        <StatCard title="Toplam Müşteri" icon={<FaUsers/>} iconClassName="bg-orange-100 text-warning"/> 
        <StatCard title="Toplam Satış" icon={<FaShoppingCart/>} iconClassName="bg-sky-100 text-sky-500"/> 
        <StatCard title="Toplam Gelir" icon={<FaMoneyBillWave/>} iconClassName="bg-red-100 text-danger"/> 
      </div>
      
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-4">
        <SalesChart/>
        <CarStatusChart/>
        <QuickActions/>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <RecentCars />
        <RecentSales />
      </div>

    </div>
  )
}
