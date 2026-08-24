import { FiX } from "react-icons/fi";

interface ModalProps{
    isOpen:boolean;
    onClose: ()=>void;
    title?:string;
    children:React.ReactNode
}

export default function Modal({
    isOpen,
    onClose,
    title,
    children
}:ModalProps){
    if(!isOpen){
        return null;
    }

    return(
        <div
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4"
        onClick={onClose}
        >
            <div
                className="w-full max-w-2xl rounded-xl border border-border bg-surface shadow-xl"
                onClick={(e) => e.stopPropagation()}
            >
                <div className="flex items-center justify-between border-b border-border px-6 py-4">
                    {title && (
                        <h2 className="text-lg font-semibold text-text">
                            {title}
                        </h2>
                    )}
                    <button 
                    type="button"
                    title="Kapat"
                    onClick={onClose}
                    className="flex h-9 w-9 items-center justify-center rounded-lg bg-background text-secondary transition hover:text-text cursor-pointer"
                    >
                        <FiX size={20}/>
                    </button>
                </div>
                
                <div className="py-6">
                    {children}
                </div>
            </div>

        </div>
    )
}