import type{ Car } from '../../types/car'
import { FiEye, FiEdit2, FiTrash2 } from "react-icons/fi";

interface CarListProps {
    cars: Car[];
  }

export default function CarList({cars} : CarListProps) {
    return (
        <div className="rounded-xl border border-border bg-surface shadow-sm">
      
          <div className="border-b border-border p-5">
            <h2 className="text-lg font-semibold text-text">
              Araç Listesi
            </h2>
      
            <p className="mt-1 text-sm text-secondary">
              Sistemde kayıtlı araçlar
            </p>
          </div>
      
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
      
              <thead className="border-b border-border">
                <tr>
      
                  <th className="px-5 py-4 font-semibold text-dark">
                    Araç Marka
                  </th>
      
                  <th className="px-5 py-4 font-semibold text-dark">
                    Model
                  </th>
      
                  <th className="px-5 py-4 font-semibold text-dark">
                    Yıl
                  </th>
      
                  <th className="px-5 py-4 font-semibold text-dark">
                    Plaka
                  </th>
      
                  <th className="px-5 py-4 font-semibold text-dark">
                    Fiyat
                  </th>
      
                  <th className="px-5 py-4 font-semibold text-dark">
                    Durum
                  </th>

                  <th className="px-5 py-4 font-semibold text-dark">
                    İşlemler
                  </th>
                </tr>
              </thead>
      
              <tbody>
                {cars.map((car) => (
                  <tr
                    key={car.id}
                    className="border-b border-border last:border-0 hover:bg-background"
                  >
      
                    <td className="px-5 py-4 text-text">
                      {car.brand}
                    </td>
      
                    <td className="px-5 py-4 text-text">
                      {car.model}
                    </td>
      
                    <td className="px-5 py-4 text-secondary">
                      {car.productionYear}
                    </td>
      
                    <td className="px-5 py-4 text-text">
                      {car.plaka}
                    </td>
      
                    <td className="px-5 py-4 text-text">
                      {car.price} {car.currencyType}
                    </td>
      
                    <td className="px-5 py-4">
                      <span
                        className={
                          car.carStatusType === "SALABLE"
                            ? "rounded-md bg-green-100 px-3 py-1 text-xs font-semibold text-green-700"
                            : "rounded-md bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-700"
                        }
                      >
                        {car.carStatusType === "SALABLE" ? "Stokta" : "Satıldı"}
                      </span>
                    </td>

                    <td className='px-5 py-4'>
                      <div className='flex items-center gap-3'>
                        <button type='button' title='detay' className='flex h-9 w-9 items-center justify-center rounded-lg bg-background text-secondary transition hover:text-text cursor-pointer'>
                          <FiEye size={18}/>
                        </button>

                        <button type='button' title='Güncelle' className='flex h-9 w-9 items-center justify-center rounded-lg bg-background text-secondary transition hover:text-text cursor-pointer'>
                          <FiEdit2 size={18}/>
                        </button>

                        <button type='button' title='Sil' className='flex h-9 w-9 items-center justify-center rounded-lg bg-red-50 text-red-500 transition hover:bg-red-100 hover:text-red-700 cursor-pointer'>
                          <FiTrash2 size={18}/>
                        </button>

                      </div>

                    </td>
      
                  </tr>
                ))}
              </tbody>
      
            </table>
          </div>
      
        </div>
      );
}
