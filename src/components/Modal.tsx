type ModalProps = {
  toggleModal: () => void;
  children: React.ReactNode;
  styles?: string;
};

export default function Modal({ toggleModal, children, styles = "" }: ModalProps): React.JSX.Element {
  return (
    <div className={`fixed z-50 ${styles}`}>
      <div className={styles}>
        {children}
      </div>
    </div>
  );
}
