import { useEffect , useState } from "react"
import { FaPlus } from "react-icons/fa";
import type { Car } from "../../types/car"
import { getAllCars , deleteCars } from "../../api/carApi"
import CarStats from "../../components/Car/CarStats";
import CarList from "../../components/Car/CarList";
import BrandDistributionProps from "../../components/Car/BrandDistributionProps";
import RecentCarsCard from "../../components/Car/RecentCarsCard";
import { getCurrencyRates } from "../../api/api";
import DetailModal from "../../components/Common/DetailModal";
import CarDetail from "../../components/Car/CarDetail";
import ConfirmModal from "../../components/Common/ConfirmModal";
import CarForm from "../../components/Car/CarForm";

export default function CarPage() {

  const [cars, setCars] = useState<Car[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [usdRate, setUsdRate] = useState(0)
  const [isDetailModalOpen, setIsDetailModalOpen] = useState(false);
  const [selectedCar, setSelectedCar] = useState<Car | null>(null);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [carToDelete, setCarToDelete] = useState<Car | null>(null);     
  const [isCarFormOpen, setIsCarFormOpen] = useState(false);

  useEffect(() => {
    const fetchCurrencyRate=async () => {
      try {
        const today=new Date().toISOString().split("T")[0]

        const response=await getCurrencyRates(today,today);

        const rate=Number(response.data.items[0].usd)

        setUsdRate(rate)

      } catch (error) {
        console.log("USD kuru Alınmadı",error)
      }
    }
    fetchCurrencyRate();
  },[])

  useEffect(() => {
    getAllCars().then((data) => {
      setCars(data);
    })
    .catch((error) => {
      console.log("Araçlar bulunamadı",error);
      setError("Araçlar Yüklenirken Bir Hata Oluştu")
    })
    .finally(() => {
      setLoading(false)
    })
  },[])

    if (loading) {  
      return <div>Araçlar yükleniyor...</div>;
    }
    
    if (error) {
      return <div>{error}</div>;
    }
  
  return (
    <div className="space-y-8">
      <CarStats cars={cars} usdRate={usdRate}/>

      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-lg font-semibold text-text">Filtreleme ...</h2>
        </div>
        <button type="button"
        onClick={() => setIsCarFormOpen(true)} 
        className="flex items-center gap-2 rounded-md bg-primary px-4 py-3 text-sm font-medium text-white shadow-sm transition hover:bg-primary/90 cursor-pointer">
          <FaPlus /> Yeni Araç Ekle
        </button>
      </div>

      <div className="grid grid-cols-1 items-start gap-6 xl:grid-cols-[minmax(0,1fr)_320px]">

          <div className="min-w-0">
            <CarList cars={cars} 
            onDetail={(car)=>{
              setSelectedCar(car);
              setIsDetailModalOpen(true);
            }}
            onDelete={(car) => {
              setCarToDelete(car);
              setIsDeleteModalOpen(true);
            }}
            />
          </div>

          <div className="flex flex-col gap-6">

            <BrandDistributionProps cars={cars}/>

            <div className="rounded-xl border border-gray-100 bg-white p-5 shadow-sm">
              <h3 className="font-semibold text-gray-900">
                Kasa Tipi Dağılımı
              </h3>

              <div className="mt-4 h-48 flex items-center justify-center text-gray-400">
                Grafik gelecek
              </div>
            </div>

              <RecentCarsCard cars={cars}/>

          </div>

      </div>

      <DetailModal
      isOpen={isDetailModalOpen}
      onClose={() => {
        setIsDetailModalOpen(false)
        setSelectedCar(null)
      }}
      title="Araç Detayı"
      >
        {selectedCar && <CarDetail car={selectedCar}/>}
      </DetailModal>

      <ConfirmModal
      isOpen={isDeleteModalOpen}
      onClose={() => {
        setIsDeleteModalOpen(false)
        setCarToDelete(null)
      }}
      title="Aracı Sil"
      onConfirm={async()=>{
        if(!carToDelete) return;
        try {
          await deleteCars(carToDelete.id);
          setCars((prevCars)=>prevCars.filter((car)=>car.id !== carToDelete.id));

          setIsDeleteModalOpen(false)
          setCarToDelete(null)
        } catch (error) {
          console.log("Araç Silinemedi",error)
        }
      }}
      message={
        carToDelete ? `${carToDelete.brand} ${carToDelete.model} Aracı Silmek İstediğinize Emin Misiniz?` 
        : "Bu aracı silmek istediğinize emin misiniz?"}
      />

      <CarForm 
      isOpen={isCarFormOpen} onClose={() => setIsCarFormOpen(false)} 
      onSuccess={async ()=>{
        try {
          const data=await getAllCars();
          setCars(data);
        } catch (error) {
          console.log("araç yenilenemedi",error)
        }
      }}
      />

      
    </div>
  )
}
