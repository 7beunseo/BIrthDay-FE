import React, { useState } from "react";
import * as S from "../styles/SendStyle";
import Input from "./Input";
import sendButton from "../img/sendButton.png";
import TextArea from "./TextArea";
import { createPost } from "../../api/api.js"; // API 요청 함수 가져오기

function Send({ fetchPosts }) { // fetchPosts를 props로 받음
    const [message, setMessage] = useState(""); // 축하 메시지 상태
    const [from, setFrom] = useState(""); // 작성자 상태
    const [password, setPassword] = useState(""); // 비밀번호 상태
    const [error, setError] = useState(""); // 에러 상태
    const [success, setSuccess] = useState(""); // 성공 메시지 상태

    const handleSubmit = async (e) => {
        e.preventDefault(); // 기본 폼 제출 방지
        const postData = {
            content: message,
            writer: from,
            password: password,
        };
        console.log("Sending data:", postData); // 요청 데이터 확인
        try {
            await createPost(postData); // 게시물 생성 요청
            setSuccess("메시지가 성공적으로 전송되었습니다!"); // 성공 메시지 설정

            // 상태 초기화
            setMessage(""); 
            setFrom(""); 
            setPassword(""); 

            // 게시물 목록 재정비
            await fetchPosts(); // 게시물 다시 가져오기
        } catch (error) {
            setError("메시지 전송 중 오류가 발생했습니다."); // 에러 메시지 설정
            console.error('Error creating post:', error);
        }
    };

    return (
        <S.SendContainer>
            <form onSubmit={handleSubmit}>
                <S.From     style={{ marginBottom: "10px" }}             
                >
                    <TextArea 
                        placeholder={"축하 메세지를 남겨주세요"} 
                        value={message} // 상태 값 전달
                        onChange={(e) => setMessage(e.target.value)} // 메시지 입력 변경 처리
                    />
                </S.From>

                <S.From style={{ marginBottom: "10px" }} >
                    <S.FormInfo>From.</S.FormInfo>
                    <Input  
                        placeholder={"신원을 밝혀라"} 
                        value={from} // 상태 값 전달
                        onChange={(e) => setFrom(e.target.value)} // 작성자 입력 변경 처리
                    />
                </S.From>

                <S.Send>
                    <S.InputBox>
                        <S.From style={{ marginBottom: "10px" }} >
                            <S.FormInfo>PW</S.FormInfo>
                            <Input  
                                placeholder={"비밀번호를 입력해주세요"} 
                                type="password" 
                                value={password} // 상태 값 전달
                                onChange={(e) => setPassword(e.target.value)} // 비밀번호 입력 변경 처리
                            />
                        </S.From>
                    </S.InputBox>

                    <button type="submit" style={{ border: "none", background: "none", padding: 0 }}>
                        <S.SendButton src={sendButton} alt="SendButton" />
                    </button>
                </S.Send>

                {error && <p style={{ color: 'red' }}>{error}</p>} {/* 에러 메시지 출력 */}
                {success && <p style={{ color: 'green' }}>{success}</p>} {/* 성공 메시지 출력 */}
            </form>
        </S.SendContainer>
    );
}

export default Send;
