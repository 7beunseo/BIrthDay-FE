import React, { useState } from "react";
import * as C from "../styles/ContentStyle";
import trashImage from "../img/trash.png";
import { fetchPosts, deletePost } from "../../api/api"; // API 함수 가져오기

function Content({ posts, setPosts }) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedPostId, setSelectedPostId] = useState(null); // 선택한 게시물 ID

    const handleDelete = async (postId) => {
        const password = prompt("삭제를 위해 비밀번호를 입력하세요:"); // 비밀번호 입력 요청

        if (password) {
            try {
                // 백엔드에 DELETE 요청 보내기
                await deletePost(postId, password); // 삭제 요청
                console.log(`Post with ID ${postId} deleted`); // 삭제 성공 메시지

                // 게시물 목록 재정비
                const updatedPosts = posts.filter(post => post.id !== postId);
                setPosts(updatedPosts); // 상태 업데이트

                // 페이지 새로 고침
                window.location.reload(); // 페이지 새로 고침
            } catch (error) {
                console.error("Error deleting post:", error);
                window.location.reload(); // 페이지 새로 고침

            }
        } else {
            console.log("비밀번호가 입력되지 않았습니다.");
        }
    };

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
        
        // "2024년 10월 8일 15시 4분"에서 "2024년 10월 8일 몇 시" 형태로 변경
        return formattedDate.replace(/(\d{4}년 \d{1,2}월 \d{1,2}일) \d{1,2}시 \d{1,2}분/, "$1 몇 시");
      };

    return (
        <>
            <C.ContentContainer>
                {posts.map(post => (
                    <C.Content key={post.id}>
                        <C.Id>🐶</C.Id>
                        <C.ContentBox>
                            <C.TopMessage>
                                <C.Message>{post.content}</C.Message>
                                <C.Trash src={trashImage} alt="trash" onClick={() => handleDelete(post.id)} />
                            </C.TopMessage>
                            <C.ButtonMessage>
                                <C.From>From. {post.writer}</C.From>
                                <C.CreatedAt>{formatDate(post.createdAt)}</C.CreatedAt> {/* 포맷팅된 날짜 표시 */}
                            </C.ButtonMessage>
                        </C.ContentBox>
                    </C.Content>
                ))}
            </C.ContentContainer>
        </>
    );
}

export default Content;
