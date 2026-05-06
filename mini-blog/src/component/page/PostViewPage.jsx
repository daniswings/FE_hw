import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Button from '../ui/Button';
import TextInput from '../ui/TextInput';
import CommentList from '../list/CommentList';

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

const PostContainer = styled.div`
    padding: 8px 16px;
    border: 1px solid grey;
    border-radius: 8px;
`;

const TitleText = styled.p`
    font-size: 28px;
    font-weight: bold;
`;
const ContentText = styled.p`
    font-size: 20px;
    line-height: 32px;
`;

const CommentLabel = styled.p`
    font-size: 16px;
    font-weight: 500;
`;

export default function PostViewPage() {
    const navigate = useNavigate();
    const { postId } = useParams();
    const [post, setPost] = useState(null);
    const [comment, setComment] = useState("");

    useEffect(() => {
        fetch(`http://localhost:3001/posts/${postId}`)
            .then((res) => res.json())
            .then((data) => setPost(data));
    }, [postId]);

    if (!post) {
        return <span>Loading...</span>;
    }

    const handleCommentSubmit = () => {
        const newComment = {
            id: Date.now(),
            content: comment
        };
        
        fetch(`http://localhost:3001/posts/${postId}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                comments: [...post.comments, newComment],
            }),
        }).then(() => {
            setPost({
                ...post,
                comments: [...post.comments, newComment],
            });
            setComment("");
        });
    };

    return (
        <Wrapper>
            <Container>
                <Button
                    title="뒤로가기"
                    onClick={() => {
                        navigate("/");
                    }}
                />
                <PostContainer>
                    <TitleText>{post.title}</TitleText>
                    <ContentText>{post.content}</ContentText>
                </PostContainer>

                <CommentLabel>댓글</CommentLabel>
                <CommentList comments={post.comments} />

                <TextInput
                    height={40}
                    value={comment}
                    onChange={(event) => {
                        setComment(event.target.value);
                    }}
                    placeholder="댓글을 입력하세요"
                />
                <Button title="댓글 작성하기" onClick={handleCommentSubmit} />
            </Container>
        </Wrapper>
    );
}