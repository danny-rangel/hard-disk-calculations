import React from 'react';
import DataInput from './DataInput';
import styled from 'styled-components';

const StyledForm = styled.form`
    padding: 20px;
`;

const DataForm = () => {
    return (
        <>
            <StyledForm>
                <DataInput label="Capacity"/>
                <DataInput label="Average Seek Time"/>
                <DataInput label="Spindle Speed"/>
                <DataInput label="Bytes Per Sector"/>
                <DataInput label="Sectors Per Cluster"/>
                <DataInput label="Sectors Per Track"/>
                <DataInput label="Records in File"/>
                <DataInput label="Bytes in Record"/>
                <button>Calculate</button>
            </StyledForm>
        </>
    );
}

export default DataForm;