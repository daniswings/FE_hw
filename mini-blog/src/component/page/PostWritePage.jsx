import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import TextInput from "../ui/TextInput";
import Button from "../ui/Button";

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
    padding: 16px;
    border-radius: 8px;
    cursor: pointer;
    align-items: center;
`;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
    max-width: 720px;
    width: 100%;
`;

const DainsMiniBlog = styled.p`
    font-size: 24px;
    font-weight: bold;
    margin: 20px 0;
    text-align: center;
`;

export default function PostWritePage() {
    const navigate = useNavigate();
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    const handlePostSubmit = () => {
        fetch("http://localhost:3001/posts", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                id: String(Date.now()),
                title,
                content,
                comments: [], // 새 글이므로 댓글은 빈 배열임
            }),
        }).then((res) => {
                if (res.ok) {
                    navigate("/");
                }
            });
    };

    return (
        <Wrapper>
            <Container>
                <DainsMiniBlog>다인의 미니 블로그</DainsMiniBlog>
                <TextInput
                    height={40}
                    value={title}
                    onChange={(event) => {
                        setTitle(event.target.value);
                    }}
                    placeholder="제목을 입력하세요"
                />
                <TextInput
                    height={200}
                    value={content}
                    onChange={(event) => {
                        setContent(event.target.value);
                    }}
                    placeholder="내용을 입력하세요"
                />
                <Button title="글 작성하기" onClick={handlePostSubmit} />
            </Container>
        </Wrapper>
    );
}