import { ReactNode, useEffect, useRef } from "react";
import { IoCloseOutline } from "react-icons/io5";
import { detectClickOutside } from "../../utils/detectClickOutside";
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
  const popupElement = useRef(null);

  useEffect(() => {
    if (closeOnClickOutside && closePopup) {
      document.body.style.overflow = "hidden";
      const unsubscribe = detectClickOutside(popupElement, () => {
        closePopup();
      });
      return () => {
        document.body.style.overflow = "auto";
        unsubscribe();
      };
    }
  }, [closeOnClickOutside, closePopup]);

  return (
    <StyledModal>
      <div id="popup-controls">
        {closePopup && showCloseButton && (
          <button id="close-popup-btn" onClick={() => closePopup()}>
            <IoCloseOutline size={36}></IoCloseOutline>
          </button>
        )}
      </div>
      <div id="popup-content" ref={popupElement}>
        {children}
      </div>
    </StyledModal>
  );
};
