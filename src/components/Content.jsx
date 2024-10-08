import React, { useEffect, useState } from "react";
import * as C from "../styles/ContentStyle";
import trashImage from "../img/trash.png";
import Modal from "./Modal";
import { fetchPosts, deletePost } from "../../api/api"; // API 함수 가져오기

function Content({ posts, setPosts }) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedPostId, setSelectedPostId] = useState(null); // 선택한 게시물 ID

    const openModal = (postId) => {
        setSelectedPostId(postId); // 선택한 게시물 ID 설정
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedPostId(null); // 선택한 게시물 ID 초기화
    };

    const handleDelete = async (postId, password) => {
        try {
            await deletePost(postId, password); // 삭제 요청
            console.log(`Post with ID ${postId} deleted`); // 삭제 성공 메시지

            // 게시물 목록 재정비
            const updatedPosts = await fetchPosts(); // 게시물 다시 가져오기
            setPosts(updatedPosts); // 상태 업데이트
            closeModal(); // 모달 닫기
        } catch (error) {
            console.error("Error deleting post:", error);
        }
    };

// 날짜 포맷팅 함수
const formatDate = (dateString) => {
  const date = new Date(dateString); // Date 객체 생성

  // UTC 시간을 한국 시간으로 변환 (9시간 추가)
  const localDate = new Date(date.getTime() + 9 * 60 * 60 * 1000);

  const options = {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      hour12: false, // 24시간 형식
  };
  const formattedDate = new Intl.DateTimeFormat("ko-KR", options).format(localDate); // 포맷팅
  return formattedDate.replace(" ", "일 "); // "2024년 10월 8일 15시 4분"에서 "2024년 10월 8일 몇 시" 형태로 변경
};

    return (
        <>
            <C.ContentContainer>
                {posts.map(post => (
                    <C.Content key={post.id}>
                        <C.Id>{post.id}</C.Id>
                        <C.ContentBox>
                            <C.TopMessage>
                                <C.Message>{post.content}</C.Message>
                                <C.Trash src={trashImage} alt="trash" onClick={() => openModal(post.id)} />
                            </C.TopMessage>
                            <C.ButtonMessage>
                                <C.From>From. {post.writer}</C.From>
                                <C.CreatedAt>{formatDate(post.createdAt)}</C.CreatedAt> {/* 포맷팅된 날짜 표시 */}
                            </C.ButtonMessage>
                        </C.ContentBox>
                    </C.Content>
                ))}
            </C.ContentContainer>
            {isModalOpen && <Modal onClose={closeModal} onDelete={handleDelete} postId={selectedPostId} />} {/* 선택한 게시물 ID를 모달에 전달 */}
        </>
    );
}

export default Content;
