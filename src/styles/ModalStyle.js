import styled from "styled-components";

export const Background = styled.div`
  background-color: rgba(0, 0, 0, 0.25);
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 2;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const DeleteModal = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  position: absolute;
  top: 0;
  left: 0;
`;

export const ModalWrap = styled.div`
  border-radius: 25px;
  padding: 20px 30px;
  z-index: 2;
  background-color: #fff;
`;

export const ModalCloseSpace = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const ModalClose = styled.div`
  cursor: pointer;
  font-size: 20px;
  font-style: normal;
  font-weight: 300;
`;

export const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ModalTitle = styled.div`
  font-size: 18px;
  font-style: normal;
  font-weight: 600;

  margin-top: 23.5px;
`;

export const ModalText = styled.div`
  text-align: center;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;

  margin-top: 9px;
  margin-bottom: 30px;
`;

export const PwInput = styled.div`
  display: flex;
  gap: 10px;
  justify-content: space-between;
  align-items: center;
  font-weight: 500;
`;

export const CardDeleteBtn = styled.div`
  width: 55vw;
  max-width: 420px;
  height: 42px;
  border-radius: 100px;
  background: #448bdb;
  color: #fff;

  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 14px;
  font-style: normal;
  font-weight: 700;

  margin-top: 30px;
  cursor: pointer;
  transition: 400ms ease-in-out;

  &:hover {
    background-color: #1b66bb;
    transition: 300ms ease-in-out;
  }
`;

export const CardDeleteBtnNone = styled.div`
  width: 55vw;
  max-width: 420px;
  height: 42px;
  border-radius: 100px;
  background: #f4f4f4;
  color: #000;

  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 14px;
  font-style: normal;
  font-weight: 700;

  margin-top: 10px;
  cursor: pointer;
  transition: 400ms ease-in-out;

  &:hover {
    background-color: #8c8c8c;
    transition: 400ms ease-in-out;
  }
`;
