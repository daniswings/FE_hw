import React from 'react';
import styled from 'styled-components';
import CommentListItem from './CommentListItem';

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
`;

export default function CommentList(props) {
    const { comments } = props;
    
    return (
        <Wrapper>
            {comments.map((comment) => (
                <CommentListItem key={comment.id} comment={comment} />
            ))}
        </Wrapper>
    );
}