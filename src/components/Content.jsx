import React, { useState } from "react";
import * as C from "../styles/ContentStyle";
import trashImage from "../img/trash.png";

import Modal from "./Modal";

function Content() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleDelete = async () => {
    // api 삭제 연동
    closeModal();
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <C.ContentContainer>
        
        <C.Content>
            <C.Id>1</C.Id>
            <C.ContentBox>
            <C.TopMessage>
                
                <C.Message>content</C.Message>
                <C.Trash src={trashImage} alt="trash" onClick={() => openModal()} />
            </C.TopMessage>
            <C.ButtonMessage>
                <C.From>From. 금금서</C.From>
                <C.CreatedAt>2024년 10월 8일</C.CreatedAt>
            </C.ButtonMessage>
          </C.ContentBox>
        </C.Content>

        <C.Content>
            <C.Id>1</C.Id>
            <C.ContentBox>
            <C.TopMessage>
                
                <C.Message>최고로긴문자메세지최고로긴문자메세지최고로긴문자메세지최고로긴문자메세지최고로긴문자메세지최고로긴문자메세지최고로긴문자메세지최고로긴문자메세지최고로긴문자메세지최고로긴문자메세지최고로긴문자메세지최고로긴문자메세지최고로긴문자메세지</C.Message>
                <C.Trash src={trashImage} alt="trash" onClick={() => openModal()} />
            </C.TopMessage>
            <C.ButtonMessage>
                <C.From>From. 금금서</C.From>
                <C.CreatedAt>2024년 10월 8일</C.CreatedAt>
            </C.ButtonMessage>
          </C.ContentBox>
        </C.Content>

        <C.Content>
            <C.Id>1</C.Id>
            <C.ContentBox>
            <C.TopMessage>
                
                <C.Message>content</C.Message>
                <C.Trash src={trashImage} alt="trash" onClick={() => openModal()} />
            </C.TopMessage>
            <C.ButtonMessage>
                <C.From>From. 금금서</C.From>
                <C.CreatedAt>2024년 10월 8일</C.CreatedAt>
            </C.ButtonMessage>
          </C.ContentBox>
        </C.Content>

        <C.Content>
            <C.Id>1</C.Id>
            <C.ContentBox>
            <C.TopMessage>
                
                <C.Message>content</C.Message>
                <C.Trash src={trashImage} alt="trash" onClick={() => openModal()} />
            </C.TopMessage>
            <C.ButtonMessage>
                <C.From>From. 금금서</C.From>
                <C.CreatedAt>2024년 10월 8일</C.CreatedAt>
            </C.ButtonMessage>
          </C.ContentBox>
        </C.Content>

        <C.Content>
            <C.Id>1</C.Id>
            <C.ContentBox>
            <C.TopMessage>
                
                <C.Message>content</C.Message>
                <C.Trash src={trashImage} alt="trash" onClick={() => openModal()} />
            </C.TopMessage>
            <C.ButtonMessage>
                <C.From>From. 금금서</C.From>
                <C.CreatedAt>2024년 10월 8일</C.CreatedAt>
            </C.ButtonMessage>
          </C.ContentBox>
        </C.Content>

      </C.ContentContainer>
      {isModalOpen && <Modal onClose={closeModal} onDelete={handleDelete} />}
    </>
  );
}

export default Content;
