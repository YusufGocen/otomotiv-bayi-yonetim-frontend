import Modal from "./Modal";

interface ConfirmModalProps{
    isOpen: boolean;
    onClose: () => void;
    onConfirm: () => void;
    title: string;
    message: string;
    confirmText?: string;
    cancelText?: string;
}

export default function ConfirmModal({
    isOpen,
    onClose,
    onConfirm,
    title,
    message,
    confirmText = "Sil",
    cancelText = "İptal",
  }: ConfirmModalProps) {
    return(
        <Modal
        isOpen={isOpen}
        onClose={onClose}
        title={title}
        >
            <div className="space-y-6 px-6 py-4">
                <p className="text-sm text-secondary">
                    {message}
                </p>

                <div className="flex justify-end gap-3">
                    <button type="button" onClick={onClose} 
                    className="rounded-lg bg-background px-6 py-2 text-sm font-medium text-text transition hover:bg-border cursor-pointer">
                        {cancelText}
                    </button>

                    <button type="button" onClick={onConfirm}
                    className="rounded-lg bg-red-500 px-8 py-2 text-sm font-medium text-white transition hover:bg-red-600 cursor-pointer"
                    >
                        {confirmText}
                    </button>
                </div>
            </div>
        </Modal>
    )
}