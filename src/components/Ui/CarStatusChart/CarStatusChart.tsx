function CarStatusChart() {
    return (
      <div className="rounded-xl border border-border bg-surface p-5 shadow-sm">
        
        <div>
          <h2 className="text-lg font-semibold text-text">
            Araç Durum Dağılımı
          </h2>
  
          <p className="mt-1 text-sm text-secondary">
            Araçların Mevcut Durumu
          </p>
        </div>
  
        <div className="mt-6 flex h-72 items-center justify-center rounded-lg bg-background">
          <p className="text-sm text-secondary">
            Durum Grafiği Burada.
          </p>
        </div>
  
      </div>
    );
  }
  
  export default CarStatusChart;