import StatCard from '../Ui/StatCard'
import { FaCar, FaShoppingCart, FaWarehouse, FaCarSide } from "react-icons/fa";
import { MdAttachMoney } from "react-icons/md";
import type{ Car } from '../../types/car';

interface CarStatsProps {
    cars: Car[];
    usdRate:number;
  }


export default function CarStats({cars ,usdRate,}:CarStatsProps) {

  const salableCars = cars.filter(
    (car) => car.carStatusType === "SALABLE"
  );
  
  const stockCars = salableCars.length;
  
  const saledCars = cars.filter(
    (car) => car.carStatusType === "SALED"
  ).length;
  
  const totalPrice = salableCars.reduce((total, car) => {
    const price = Number(car.price);
  
    if (car.currencyType === "USD") {
      return total + price * usdRate;
    }
  
    return total + price;
  }, 0);
  
  const averagePrice =
    salableCars.length > 0
      ? totalPrice / salableCars.length
      : 0;

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
    <StatCard title="Toplam Araç" icon={<FaCar/>} value={String(cars.length)} iconClassName="bg-blue-100 text-primary"/>
    <StatCard title="Stoktaki Araç" icon={<FaWarehouse/>} value={String(stockCars)} iconClassName="bg-green-100 text-success"/>
    <StatCard title="Satılan Araç" icon={<FaShoppingCart/>} value={String(saledCars)} iconClassName="bg-orange-100 text-warning"/>
    <StatCard title="Ortalama Fiyat" icon={<FaCarSide />} value={`${averagePrice.toLocaleString("tr-TR", {maximumFractionDigits: 0})} ₺`}iconClassName="bg-sky-100 text-sky-500" />
    <StatCard title="Toplam Araç Değeri" icon={<MdAttachMoney/>}   value={`${totalPrice.toLocaleString("tr-TR", {maximumFractionDigits: 0,})} ₺`} iconClassName="bg-red-100 text-danger"/>
  </div>
  )
}
