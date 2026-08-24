import Modal from "./Modal";

interface FormModalProps {
    isOpen: boolean;
    onClose: () => void;
    title: string;
    children: React.ReactNode;
    onSubmit?: () => void;
    submitText?: string;
    isSubmitting?: boolean;
}


export default function FormModal({
    isOpen,
    onClose,
    title,
    children,
    onSubmit,
    submitText = "Kaydet",
    isSubmitting = false,
}: FormModalProps){
    return(
        <Modal isOpen={isOpen} onClose={onClose} title={title}>
            <form 
            onSubmit={(e) => {
              e.preventDefault();
              onSubmit?.()
            }}>
                <div className="px-6">
                    {children}
                    <div className="mt-6 flex justify-end gap-3 border-t border-border pt-5">
                        <button type="button" onClick={onClose} className="rounded-lg border border-border bg-background px-5 py-2.5 text-sm font-medium text-text transition hover:bg-border cursor-pointer">
                            İptal
                        </button>
                        <button type="submit" disabled={isSubmitting} className="rounded-lg bg-primary px-5 py-2.5 text-sm font-medium text-white transition hover:bg-primary/90 cursor-pointer">
                            {isSubmitting ? "Kaydediliyor..." : submitText}
                        </button>
                    </div>
                </div>

            </form>
        </Modal>
    )
}
