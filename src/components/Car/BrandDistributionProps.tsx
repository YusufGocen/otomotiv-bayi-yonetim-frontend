import type { Car } from "../../types/car"
import {PieChart,Pie,Cell,ResponsiveContainer,Tooltip} from "recharts";


interface BrandDistributionCardProps{
  cars:Car[];
}

const COLORS = [
  "#3B82F6",
  "#10B981",
  "#F59E0B",
  "#EF4444",
  "#8B5CF6",
  "#EC4899",
  "#06B6D4",
  "#94A3B8",
];

export default function BrandDistributionCard({
  cars,
}: BrandDistributionCardProps) {

  const brandCounts = cars.reduce<Record<string, number>>(
    (acc, car) => {
      acc[car.brand] = (acc[car.brand] || 0) + 1;
      return acc;
    },
    {}
  );

  const totalCars = cars.length;

  const sortedBrands=Object.entries(brandCounts).sort((a,b)=>b[1] - a[1]);

  const topBrands=sortedBrands.slice(0,7);

  const otherCount=sortedBrands.slice(7).reduce((total,[, count])=>total+count,0);

  const data = topBrands.map(([name, value]) => ({
    name,
    value,
  }));

  if(otherCount>0){
    data.push({
      name:"Diğer",
      value:otherCount,
    })
  }


  return(
      <div className="rounded-xl border border-border bg-surface p-5 shadow-sm">

        <div className="flex items-start justify-between">
          <div>
            <h2 className="text-lg font-semibold text-text">Marka Dağılımı</h2>
            <p className="mt-1 text-sm text-secondary">Araçların Markalara Göre Dağılımı</p>
          </div>
        </div>

        <div className="mt-5 h-56">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie           
              data={data}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              innerRadius={55}
              outerRadius={80}
              paddingAngle={3}
              label
              >
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
              </Pie>
                  <Tooltip
                  formatter={(value, _name, props) => [
                    `${value} araç`,
                    props.payload.name,
                  ]}
            />
            </PieChart>
          </ResponsiveContainer>
        </div>

        <div className="text-center">
            <p className=" text-2xl font-bold text-text">
                {totalCars}
            </p>
            <p className="text-sm text-secondary">
              Toplam Araç
            </p>
        </div>

      </div>
  )
}


