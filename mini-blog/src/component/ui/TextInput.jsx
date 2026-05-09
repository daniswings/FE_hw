import React from 'react';
import styled from 'styled-components';

const StyledTextInput = styled.input`
    width: 100%;
    /* PostViewPage에서 넘겨준 height={40}이라는 props을 받아 사용 */
    height: ${(props) => props.height}px;
    padding : 16px;
    font-size: 16px;
`;

export default function TextInput(props) {
    const { height, value, onChange, placeholder } = props;

    return (
        <StyledTextInput 
            height={height} 
            value={value} 
            onChange={onChange} 
            placeholder={placeholder}
        />
    );
}