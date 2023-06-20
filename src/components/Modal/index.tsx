import { ReactNode, useEffect, useRef } from "react";
import { IoCloseOutline } from "react-icons/io5";
import { StyledModal } from "./styles";

type ModalProps = {
  children: ReactNode;
  closePopup?: () => void;
  showCloseButton?: boolean;
  closeOnClickOutside?: boolean;
};

export const Modal: React.FC<ModalProps> = ({
  children,
  closePopup,
  showCloseButton,
  closeOnClickOutside,
}) => {
  const popupElement = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (closeOnClickOutside && closePopup) {
      document.body.style.overflow = "hidden";
      const handleClickOutside = (ev: MouseEvent) => {
        if (ev.target === popupElement.current) {
          closePopup();
        }
      };
      popupElement.current?.addEventListener("click", handleClickOutside);
      return () => {
        document.body.style.overflow = "auto";
        popupElement.current?.removeEventListener("click", handleClickOutside);
      };
    }
  }, [closeOnClickOutside, closePopup]);

  return (
    <StyledModal ref={popupElement}>
      <div id="popup-controls">
        {closePopup && showCloseButton && (
          <button id="close-popup-btn" onClick={() => closePopup()}>
            <IoCloseOutline size={36}></IoCloseOutline>
          </button>
        )}
      </div>
      <div id="popup-content">{children}</div>
    </StyledModal>
  );
};
