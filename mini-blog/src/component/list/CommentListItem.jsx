import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
    padding: 8px 16px;
    border: 1px solid #ccc;
    border-radius: 8px;
    cursor: pointer;
`;

const ContentText = styled.p`
    font-size: 16px;
    margin: 0;
`;

export default function CommentListItem(props) {
    const { comment } = props;
    
    return (
        <Wrapper>
            <ContentText>{comment.content}</ContentText>
        </Wrapper>
    );
}