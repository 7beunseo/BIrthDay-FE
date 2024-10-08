import * as M from "../styles/ModalStyle";
import Input from "./Input";

const Modal = ({ onClose, onDelete }) => {
  return (
    <div>
      <M.Background onClick={onClose} />
      <M.DeleteModal>
        <M.ModalWrap>
          <M.ModalCloseSpace>
            <M.ModalClose onClick={onClose}>X</M.ModalClose>
          </M.ModalCloseSpace>
          <M.ModalContent>
            <M.ModalTitle>해당 댓글을 삭제하시겠습니까?</M.ModalTitle>
            <M.ModalText>삭제 시, 복원이 어렵습니다.</M.ModalText>
            <M.PwInput>
              PW
              <Input />
            </M.PwInput>
            <M.CardDeleteBtn onClick={onDelete}>삭제</M.CardDeleteBtn>
            <M.CardDeleteBtnNone onClick={onClose}>취소</M.CardDeleteBtnNone>
          </M.ModalContent>
        </M.ModalWrap>
      </M.DeleteModal>
    </div>
  );
};

export default Modal;
