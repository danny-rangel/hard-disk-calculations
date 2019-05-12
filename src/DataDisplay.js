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
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    align-items: center;
    justify-items: center;
    padding: 20px;
    text-align: center;
    grid-gap: 40px;

    ${media.small`
        grid-template-columns: 1fr;
    `} 
`;

const StyledMiniDiv = styled.div`
    display: grid;
    grid-template-rows: 1fr 10px 1fr;
`;

const Divider = styled.div`
    height: 2px;
    width: 100%;
    background-color: black;
    align-self: center;
    opacity: 0.1;
    border-radius: 6px;
`;

const DataDisplay = ({ data }) => {
    return (
        <StyledDiv>
            <StyledMiniDiv>
                <h4>Average Rotational Delay</h4>
                <Divider></Divider>
                <h4>{`${data.avgRotDelay} ms`}</h4>
            </StyledMiniDiv>
            <StyledMiniDiv>
                <h4>Records per Sector</h4>
                <Divider></Divider>
                <h4>{`${data.recordsInOneSector} records`}</h4>
            </StyledMiniDiv>
            <StyledMiniDiv>
                <h4>Clusters needed for file</h4>
                <Divider></Divider>
                <h4>{`${data.clustersPerFile} clusters`}</h4>
            </StyledMiniDiv>
            <StyledMiniDiv>
                <h4>Reading One Track</h4>
                <Divider></Divider>
                <h4>{`${data.readingTimePerTrack} ms`}</h4>
            </StyledMiniDiv>
            <StyledMiniDiv>
                <h4>Contiguous Storage Read Time</h4>
                <Divider></Divider>
                <h4>{`${data.readingTimeForFile} ms`}</h4>
            </StyledMiniDiv>
            <StyledMiniDiv>
                <h4>Time for Reading One Cluster</h4>
                <Divider></Divider>
                <h4>{`${data.readingTimePerCluster} ms`}</h4>
            </StyledMiniDiv>
            <StyledMiniDiv style={{gridColumn: '1 / -1'}}>
                <h4>Random Storage Read Time</h4>
                <Divider></Divider>
                <h4>{`${data.randomReadingTimeForFile} ms`}</h4>
            </StyledMiniDiv>
        </StyledDiv>
    );
}

export default DataDisplay;