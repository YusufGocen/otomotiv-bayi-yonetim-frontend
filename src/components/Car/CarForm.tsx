import { useForm } from "react-hook-form";
import FormModal from "../Common/FormModal";
import Input from "../Input";
import type { CarCreateRequest } from "../../types/car";
import { createCar } from "../../api/carApi";
import { useState } from "react";




interface CarFormProps{
    isOpen:boolean;
    onClose:()=>void,
    onSuccess: () => void;
}


export default function CarForm({isOpen , onClose,onSuccess}:CarFormProps){

    const [isSubmitting, setIsSubmitting] = useState(false);

    const {register,handleSubmit,formState:{errors},}=useForm<CarCreateRequest>({defaultValues:{currencyType:"Tl",carStatusType: "SALABLE",}})


    const onSubmit = async (data: CarCreateRequest) => {
        try {
          setIsSubmitting(true);
    
          await createCar({
            ...data,
            carStatusType: "SALABLE",
          });
          onSuccess();
          onClose();
        } catch (error) {
          console.error("Araç eklenirken hata oluştu:", error);
        } finally {
          setIsSubmitting(false);
        }
      };

    return(
        <FormModal
        isOpen={isOpen}
        onClose={onClose}
        title="Yeni Araç Ekle"
        onSubmit={handleSubmit(onSubmit)}
        isSubmitting={isSubmitting}
        >
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                <Input label="Plaka" name="plaka"{...register("plaka", {required: "Plaka alanı zorunludur.",})} error={errors.plaka?.message} />
                <Input label="Marka" name="brand"{...register("brand", {required: "Marka alanı zorunludur.",})} error={errors.brand?.message} />
                <Input label="Model" name="model"{...register("model", {required: "Model alanı zorunludur.",})} error={errors.model?.message} />
                <Input label="Üretim Yılı" name="productionYear" type="number" {...register("productionYear", {required: "Üretim Yılı zorunludur.",valueAsNumber: true,})} error={errors.productionYear?.message}/>
                <Input label="Fiyat" name="price" type="number" {...register("price", {required: "Fiyat zorunludur.",valueAsNumber: true,})} error={errors.price?.message}/>
                <Input label="Hasar Bedeli" name="damagePrice" type="number" {...register("damagePrice", {required: "Hasar Bedeli zorunludur.",valueAsNumber: true,})} error={errors.damagePrice?.message}/>
                <div >
                    <label className="mb-2 block text-sm font-semibold text-text">Para Birimi</label>
                    <select {...register("currencyType")}
                    className="w-full rounded-xl border border-border bg-background px-4 py-3 outline-none transition-all duration-200 focus:border-primary focus:ring-2 focus:ring-primary/20"
                    >
                        <option value="Tl">Tl</option>
                        <option value="USD">USD</option>
                    </select>
                </div>
            </div>
        </FormModal>
    )
}
