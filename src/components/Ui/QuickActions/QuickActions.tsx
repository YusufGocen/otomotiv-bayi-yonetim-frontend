import {
    FaCar,
    FaUsers,
    FaBuilding,
    FaShoppingCart,
    FaMoneyBillWave,
  } from "react-icons/fa";
  
  function QuickActions() {
    return (
      <div className="rounded-xl border border-border bg-surface p-5 shadow-sm">
        <h2 className="text-lg font-semibold text-text">
          Hızlı İşlemler
        </h2>
  
        <div className="mt-5 space-y-3">
  
          <button
            type="button"
            className="flex w-full items-center justify-between rounded-lg bg-blue-50 px-4 py-4 text-sm font-medium text-text transition hover:bg-blue-100"
          >
            <span className="flex items-center gap-3">
              <FaCar className="text-primary" />
              Yeni Araç Ekle
            </span>
  
            <span className="text-primary">›</span>
          </button>
  
          <button
            type="button"
            className="flex w-full items-center justify-between rounded-lg bg-green-50 px-4 py-4 text-sm font-medium text-text transition hover:bg-green-100"
          >
            <span className="flex items-center gap-3">
              <FaUsers className="text-success" />
              Yeni Müşteri Ekle
            </span>
  
            <span className="text-success">›</span>
          </button>
  
          <button
            type="button"
            className="flex w-full items-center justify-between rounded-lg bg-orange-50 px-4 py-4 text-sm font-medium text-text transition hover:bg-orange-100"
          >
            <span className="flex items-center gap-3">
              <FaBuilding className="text-warning" />
              Yeni Bayi Ekle
            </span>
  
            <span className="text-warning">›</span>
          </button>
  
          <button
            type="button"
            className="flex w-full items-center justify-between rounded-lg bg-purple-50 px-4 py-4 text-sm font-medium text-text transition hover:bg-purple-100"
          >
            <span className="flex items-center gap-3">
              <FaShoppingCart className="text-purple-500" />
              Araç Satışı Yap
            </span>
  
            <span className="text-purple-500">›</span>
          </button>
  
          <button
            type="button"
            className="flex w-full items-center justify-between rounded-lg bg-green-50 px-4 py-4 text-sm font-medium text-text transition hover:bg-green-100"
          >
            <span className="flex items-center gap-3">
              <FaMoneyBillWave className="text-success" />
              Döviz Kuru Sorgula
            </span>
  
            <span className="text-success">›</span>
          </button>
  
        </div>
      </div>
    );
  }
  
  export default QuickActions;