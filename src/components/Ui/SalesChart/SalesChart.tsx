function SalesChart() {
    return (
      <div className="rounded-xl border border-border bg-surface p-5 shadow-sm lg:col-span-2">
        
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-lg font-semibold text-text">
              Aylık Satış Grafiği
            </h2>
  
            <p className="mt-1 text-sm text-secondary">
              Aylık Satış ve Gelir Durumu.
            </p>
          </div>
  
          <select
            defaultValue="thisMonth"
            className="rounded-lg border border-border bg-surface px-3 py-2 text-sm text-text outline-none"
          >
            <option value="thisMonth">Bu Ay</option>
            <option value="lastMonth">Geçen Ay</option>
            <option value="thisYear">Bu Yıl</option>
          </select>
        </div>
  
        <div className="mt-6 flex h-72 items-center justify-center rounded-lg bg-background">
          <p className="text-sm text-secondary">
            Satış Grafiği Burada
          </p>
        </div>
  
      </div>
    );
  }
  
  export default SalesChart;