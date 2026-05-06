import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Button from '../ui/Button';
import PostList from '../list/PostList';

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

export default function MainPage() {
    const [posts, setPosts] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        fetch('http://localhost:3001/posts')
            .then((res) => res.json())
            .then((data) => setPosts(data));
    }, []);

    return (
        <Wrapper>
            <Container>
                <Button title="글 작성하기" 
                onClick={() => navigate('/post-write')} 
                />

                <PostList posts={posts} 
                onClickItem={(item) => navigate(`/post/${item.id}`)} />
            </Container>
        </Wrapper>
    );
}