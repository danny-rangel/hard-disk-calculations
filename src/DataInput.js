import React from 'react';
import styled, { css } from 'styled-components';


const size = {
    small: 600,
    medium: 960,
    large: 1140
  }
  
  const media = Object.keys(size).reduce((acc, label) => {
    acc[label] = (...args) => css`
        @media (max-width: ${size[label]}px) {
            ${css(...args)}
        }
    `
    return acc;
  }, {});

const StyledDiv = styled.div`
    

    ${media.small`
        
  `} 
`;



const DataInput = ({ label, onChange, value, id }) => {

    const handleChange = e => {
        onChange(id, Number(e.target.value));
    };

    return (
        <div>
            <h4>{label}</h4>
            <input onChange={handleChange} value={value} ></input>
        </div>
    );
}

export default DataInput;