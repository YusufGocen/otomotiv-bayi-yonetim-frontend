import type { Car } from "../../types/car";

interface TransmissionDistributionCardProps {
  cars: Car[];
}

export default function TransmissionDistributionCard({
  cars,
}: TransmissionDistributionCardProps) {
  const automaticCount = cars.filter(
    (car) => car.transmissionType === "OTOMATIK"
  ).length;

  const manualCount = cars.filter(
    (car) => car.transmissionType === "MANUEL"
  ).length;

  const total = automaticCount + manualCount;

  const automaticPercentage =
    total > 0 ? Math.round((automaticCount / total) * 100) : 0;

  const manualPercentage =
    total > 0 ? Math.round((manualCount / total) * 100) : 0;

  return (
    <div className="rounded-xl border border-border bg-surface p-5 shadow-sm">
      <h3 className="font-semibold text-text">
        Vites Dağılımı
      </h3>
      <div className="mt-6 space-y-5">

        <div>
          <div className="mb-2 flex items-center justify-between">
            <div>
              <span className="text-sm font-medium text-text">
                Otomatik
              </span>

              <span className="ml-2 text-xs text-secondary">
                ({automaticCount} araç)
              </span>
            </div>

            <span className="text-sm font-semibold text-text">
              %{automaticPercentage}
            </span>
          </div>

          <div className="h-2.5 w-full overflow-hidden rounded-full bg-background">
            <div
              className="h-full rounded-full bg-primary transition-all duration-500"
              style={{ width: `${automaticPercentage}%` }}
            />
          </div>
        </div>

        <div>
          <div className="mb-2 flex items-center justify-between">
            <div>
              <span className="text-sm font-medium text-text">
                Manuel
              </span>

              <span className="ml-2 text-xs text-secondary">
                ({manualCount} araç)
              </span>
            </div>

            <span className="text-sm font-semibold text-text">
              %{manualPercentage}
            </span>
          </div>

          <div className="h-2.5 w-full overflow-hidden rounded-full bg-background">
            <div
              className="h-full rounded-full bg-warning transition-all duration-500"
              style={{ width: `${manualPercentage}%` }}
            />
          </div>
        </div>

      </div>

      <div className="mt-6 border-t border-border pt-4 text-center">
        <span className="text-xs text-secondary">
          Toplam {total} araç
        </span>
      </div>
    </div>
  );
}