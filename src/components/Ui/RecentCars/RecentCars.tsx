
export default function RecentCars() {
  return (
    <div className="rounded-xl border border-border bg-surface p-5 shadow-sm">
        <div className="flex items-center justify-between">
            <div>
                <h2 className="text-lg font-semibold text-text">
                    Son Eklenen Araçlar
                </h2>
                <p className="mt-1 text-sm text-secondary">
                    Sisteme Son Eklenen Araçlar 
                </p>
            </div>
            <button type="button" className="text-sm font-medium text-primary transition hover:text-primary-dark">
                Tümünü Gör
            </button>
        </div>

        <div className="mt-5 overflow-x-auto">
            <table className="w-full text-left text-sm">
                <thead>
                    <tr className="border-b border-border text-secondary">
                        <th className="px-4 py-3 font-medium">
                            Araç
                        </th>
                        <th className="px-4 py-3 font-medium">
                            Plaka
                        </th>
                        <th className="px-4 py-3 font-medium">
                            Model
                        </th>
                        <th className="px-4 py-3 font-medium">
                            Durum
                        </th>
                        <th className="px-4 py-3 font-medium">
                            Fiyat
                        </th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td
                        colSpan={5}
                        className="px-4 py-12 text-center text-sm text-secondary">
                        Henüz Araç Verisi Bulunmuyor.
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>

    </div>
  )
}
