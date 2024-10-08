import React, { useState } from "react";
import * as C from "../styles/ContentStyle";
import trashImage from "../img/trash.png";
import { fetchPosts, deletePost } from "../../api/api"; // API 함수 가져오기

function Content({ posts, setPosts }) {
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

    return (
        <>
            <C.ContentContainer>
                {posts.map(post => (
                    <C.Content key={post.id}>
                        <C.Id>{post.id}</C.Id>
                        <C.ContentBox>
                            <C.TopMessage>
                                <C.Message>{post.content}</C.Message>
                                <C.Trash src={trashImage} alt="trash" onClick={() => handleDelete(post.id)} />
                            </C.TopMessage>
                            <C.ButtonMessage>
                                <C.From>From. {post.writer}</C.From>
                                <C.CreatedAt>{post.createdAt.toString()}</C.CreatedAt>
                            </C.ButtonMessage>
                        </C.ContentBox>
                    </C.Content>
                ))}
            </C.ContentContainer>
        </>
    );
}

export default Content;
