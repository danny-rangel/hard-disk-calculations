import React, { useState } from 'react';
import DataInput from './DataInput';
import styled from 'styled-components';

const StyledForm = styled.form`
    box-sizing: border-box;
    width: 100%;
    padding: 20px;
    display: grid;
    grid-gap: 20px;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: repeat(5, 1fr);
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
          key={field}
          id={field}
          onChange={handleInputChange}
          value={values[field]}
          label={field}
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
                <div style={{gridColumn: '1 / span 2', textAlign: 'center'}}>
                    <button style={{width: '50%'}}>Calculate</button>
                </div>
            </StyledForm>
        </>
    );
}

export default DataForm;