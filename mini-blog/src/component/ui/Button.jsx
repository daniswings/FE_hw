import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  border-width: 1px;
  border-radius: 8px;
  font-size: 16px;
  padding: 8px 16px;
  cursor: pointer;
`;

export default function Button(props) {
    const { title, onClick } = props;

    return (
        <StyledButton onClick={onClick}>{title}</StyledButton>
    );
}