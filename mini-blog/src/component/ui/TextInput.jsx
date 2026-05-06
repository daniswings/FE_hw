import React from 'react';
import styled from 'styled-components';

const StyledTextInput = styled.input`
    width: 700px;
    height: 400px;
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