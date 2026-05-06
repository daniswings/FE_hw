import React from 'react';
import styled from 'styled-components';

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

const Title = styled.div`
    font-size: 20px;
    font-weight: bold;
`;

export default function PostListItem(props) {
    const { post, onClick } = props;

    return (
        <Wrapper onClick={onClick}>
            <Title>{post.title}</Title>
        </Wrapper>
    );
}