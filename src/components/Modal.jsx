import React, { useState } from "react";
import * as M from "../styles/ModalStyle";
import Input from "./Input";

const Modal = ({ onClose, onDelete, postId }) => {
  const [password, setPassword] = useState(""); // 비밀번호 상태

  const handleDelete = () => {
    // 비밀번호와 게시물 ID를 함께 삭제 요청 함수로 전달
    onDelete(postId, password);
    setPassword(""); // 비밀번호 입력 초기화
  };

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
              <Input 
                type="password" // 비밀번호 입력 필드로 설정
                value={password}
                onChange={(e) => setPassword(e.target.value)} // 비밀번호 입력 처리
              />
            </M.PwInput>
            <M.CardDeleteBtn onClick={handleDelete}>삭제</M.CardDeleteBtn>
            <M.CardDeleteBtnNone onClick={onClose}>취소</M.CardDeleteBtnNone>
          </M.ModalContent>
        </M.ModalWrap>
      </M.DeleteModal>
    </div>
  );
};

export default Modal;
