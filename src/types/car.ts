export interface Car{
    id: number;
    createTime: string;
  
    plaka: string;
    brand: string;
    model: string;
    productionYear: number;
    transmissionType: "OTOMATIK" | "MANUEL";
    price: number;
    currencyType: string;
    damagePrice: number;
    carStatusType: string;
  }


  export interface CarCreateRequest {
    plaka: string;
    brand: string;
    model: string;
    productionYear: number;
    price: number;
    currencyType: "Tl" | "USD";
    transmissionType: "OTOMATIK" | "MANUEL";
    damagePrice: number;
    carStatusType: "SALABLE";
  }