import Modal from "./Modal";

interface DetailModalProps{
    isOpen:boolean;
    onClose: ()=>void;
    title?:string;
    children:React.ReactNode
}

export default function DetailModal({
    isOpen,
    onClose,
    title,
    children,
  }: DetailModalProps) {
    return (
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        title={title}
      >
        {children}
      </Modal>
    );
  }