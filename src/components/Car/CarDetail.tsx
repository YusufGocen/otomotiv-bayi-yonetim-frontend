import type { Car } from "../../types/car";

interface CarDetailProps{
    car:Car
}

export default function CarDetail({car}:CarDetailProps){
return(
    <div className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="text-sm text-secondary">Araç Marka</p>
            <p className="mt-1 font-medium text-text">
              {car.brand}
            </p>
          </div>
  
          <div>
            <p className="text-sm text-secondary">Model</p>
            <p className="mt-1 font-medium text-text">
              {car.model}
            </p>
          </div>
  
          <div>
            <p className="text-sm text-secondary">Üretim Yılı</p>
            <p className="mt-1 font-medium text-text">
              {car.productionYear}
            </p>
          </div>
  
          <div>
            <p className="text-sm text-secondary">Plaka</p>
            <p className="mt-1 font-medium text-text">
              {car.plaka}
            </p>
          </div>
  
          <div>
            <p className="text-sm text-secondary">Fiyat</p>
            <p className="mt-1 font-medium text-text">
              {car.price} {car.currencyType}
            </p>
          </div>
  
          <div>
            <p className="text-sm text-secondary">Durum</p>
            <p className="mt-1 font-medium text-text">
              {car.carStatusType === "SALABLE"
                ? "Stokta"
                : "Satıldı"}
            </p>
          </div>
        </div>
    </div>
)
}