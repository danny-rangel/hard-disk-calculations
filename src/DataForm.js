import React, { useState } from 'react';
import DataInput from './DataInput';
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

const StyledForm = styled.form`
    box-sizing: border-box;
    width: 100%;
    padding: 20px;
    display: grid;
    grid-gap: 20px;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: repeat(4, 1fr);
    justify-items: center;
    text-align: center;

    ${media.small`
        grid-template-columns: 1fr;
    `} 
`;

const StyledButton = styled.button`
    width: 100%;
    height: 50px;
    border-radius: 5px;
    font-size: 20px;
    font-weight: 500;
    text-transform: uppercase;
    padding: 5px;
    cursor: pointer;
    color: black;
    background: white;
    box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.16), 0 0 0 1px rgba(0, 0, 0, 0.08);

    :hover {
        color: #ffffff;
        background: #FFBEA6;
        transition: all 0.2s ease 0s;
    }

`;

const DataForm = ({ fields, onSubmit }) => {

    const [values, setValues] = useState({
        "Capacity": 0, "AverageSeekTime": 0, "SpindleSpeed": 0, "BytesPerSector": 0, 
    "SectorsPerCluster": 0, "SectorsPerTrack": 0, "RecordsInFile": 0, "BytesInRecord": 0
    });

    const handleInputChange = (id, value) => {
        setValues({ ...values, [id]: value });
    }

    const inputs = fields.map(field => (
        <DataInput
          key={field.id}
          id={field.id}
          onChange={handleInputChange}
          value={values[field.id]}
          label={field.label}
        />
      ));

      const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(values);
      }


    return (
        <>
            <StyledForm onSubmit={e => handleSubmit(e)}>
                {inputs}
                <div style={{width: '50%', justifySelf: 'center', alignSelf: 'center', gridColumn: '1 / -1'}}>
                    <StyledButton onClick={handleSubmit}>Calculate</StyledButton>
                </div>
            </StyledForm>
        </>
    );
}

export default DataForm;