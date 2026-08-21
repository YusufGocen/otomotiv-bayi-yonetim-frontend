import type{ Car } from "../../types/car"

interface RecentCarsCardProps{
    cars:Car[];
}


export default function RecentCarsCard({
    cars
}: RecentCarsCardProps){
    const recentCars=[...cars].sort((a,b)=>
        new Date(b.createTime).getTime() - new Date(a.createTime).getTime()).slice(0,3)

    return(
        <div className="rounded-xl border border-border bg-surface p-5 shadow-sm">

            <div>
                <h2 className="text-lg font-semibold text-text">Son Eklenen Araçlar</h2>
                <p className="mt-1 text-sm text-secondary">Sisteme Son Eklenen Araçlar</p>
            </div>

            <div className="mt-5">
                {recentCars.map((car,index)=>(
                    <div
                    key={car.id}
                    className={`flex items-center justify-between py-4 ${
                      index !== recentCars.length - 1
                        ? "border-b border-border"
                        : ""
                    }`}
                    >
                        <div>
                            <p className="font-medium text-text">
                                {car.brand} - {car.model}
                            </p>
                            <p className="mt-1 text-sm text-secondary">
                                {car.plaka}
                            </p>
                        </div>
                        <p className="text-sm text-secondary">
                            {new Date(car.createTime).toLocaleDateString("tr-Tr")}
                        </p>
                    </div>
                ))}
            </div>

        </div>
    )
}
