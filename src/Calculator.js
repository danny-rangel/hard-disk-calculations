import React from 'react';
import DataForm from './DataForm';
import DataDisplay from './DataDisplay';
import styled from 'styled-components';

const StyledDiv = styled.div`
    display: grid;
    background: white;
    width: 80%;
    margin-top: 40px;
    border-radius: 10px;
`;

const Calculator = () => {
    return (
        <StyledDiv>
            <DataForm />
            <DataDisplay />
        </StyledDiv>
    );
}

export default Calculator;