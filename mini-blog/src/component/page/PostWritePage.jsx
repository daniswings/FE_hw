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
    border: 1px solid #ccc;
    border-radius: 8px;
    cursor: pointer;
    width: 700px;
`;

const Container = styled.div`
    width: 90%;
    display: flex;
    flex-direction: column;
    gap: 16px;
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
                <TextInput
                    height={20}
                    value={title}
                    onChange={(event) => {
                        setTitle(event.target.value);
                    }}
                    placeholder="제목을 입력하세요"
                />
                <TextInput
                    height={400}
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