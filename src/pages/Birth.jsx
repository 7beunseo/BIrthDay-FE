import React, { useEffect, useState } from "react";
import * as B from "../styles/BirthStyle";
import Picture from "../components/Picture";
import Content from "../components/Content";
import Send from "../components/Send";
import { fetchPosts } from "../../api/api"; // API 함수 가져오기

function Birth() {
    const [posts, setPosts] = useState([]); // 게시물 상태

    const getPosts = async () => {
        try {
            const postsData = await fetchPosts(); // API 호출
            setPosts(postsData); // 상태 업데이트
        } catch (error) {
            console.error("Error fetching posts:", error);
        }
    };

    useEffect(() => {
        getPosts(); // 컴포넌트가 마운트될 때 게시물 가져오기
    }, []);

    return (
        <B.Birth>
            <B.BirthItem>
                <B.BirthTitle>
                    <span>서진영</span>님의<br />🎂생일을 축하드립니다🎂
                </B.BirthTitle>
                <Picture />
            </B.BirthItem>
            <B.BirthItem>
                <Send fetchPosts={getPosts} /> {/* fetchPosts 함수 전달 */}
                <Content posts={posts} /> {/* 게시물 목록을 Content 컴포넌트에 전달 */}
            </B.BirthItem>
        </B.Birth>
    );
}

export default Birth;
