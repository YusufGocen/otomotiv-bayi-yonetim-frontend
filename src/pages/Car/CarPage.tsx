import { useEffect , useState } from "react"
import type { Car } from "../../types/car"
import { getAllCars } from "../../api/carApi"
import CarStats from "../../components/Car/CarStats";
import CarList from "../../components/Car/CarList";
import BrandDistributionProps from "../../components/Car/BrandDistributionProps";
import RecentCarsCard from "../../components/Car/RecentCarsCard";
import { getCurrencyRates } from "../../api/api";

export default function CarPage() {

  const [cars, setCars] = useState<Car[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [usdRate, setUsdRate] = useState(0)

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
      console.log(cars)
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
        <div></div>
        <div></div>
      </div>

      <div className="grid grid-cols-1 items-start gap-6 xl:grid-cols-[minmax(0,1fr)_320px]">

          <div className="min-w-0">
            <CarList cars={cars} />
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



    </div>
  )
}
