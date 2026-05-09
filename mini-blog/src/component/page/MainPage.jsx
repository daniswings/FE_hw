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
    cursor: pointer;
    width: 100%;
    align-items: center;
`;

const Container = styled.div`
    width: 80%;
    height: 40px;
    display: flex;
    flex-direction: column;
    gap: 16px;
`;

const DainsMiniBlog = styled.p`
    font-size: 24px;
    font-weight: bold;
    margin: 20px 0;
    text-align: center;
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

                <DainsMiniBlog>다인의 미니 블로그</DainsMiniBlog>


                <PostList posts={posts} 
                onClickItem={(item) => navigate(`/post/${item.id}`)} />

            </Container>
        </Wrapper>
    );
}