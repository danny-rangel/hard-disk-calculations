import React from 'react';
import styled from 'styled-components';

const StyledInput = styled.input`
    border-radius: 10px;
    width: 70%;
    border: none;
    box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.16), 0 0 0 1px rgba(0, 0, 0, 0.08);
    padding: 10px 20px;
    font-size: 16px;
    margin: 10px auto;
    text-align: center;
`;



const DataInput = ({ label, onChange, value, id }) => {

    const handleChange = e => {
        onChange(id, Number(e.target.value));
    };

    return (
        <div style={{width: '100%'}}>
            <h3 className="boldLabel">{label}</h3>
            <StyledInput onChange={handleChange} value={value} ></StyledInput>
        </div>
    );
}

export default DataInput;