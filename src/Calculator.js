import React, { useState } from 'react';
import DataForm from './DataForm';
import DataDisplay from './DataDisplay';
import styled, { css } from 'styled-components';

import { calculateAvgRotationalDelay, calculateRecordsStoredInOneSector, calculateClustersPerFile,
    calculateReadingTimePerTrack, calculateReadingTimeForFile, calculateReadingTimePerCluster, calculateReadingTimeForEntireFile } from './utils/calculations';

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
    grid-template-rows: 1fr 1fr;
    background: #fff;
    width: 80%;
    margin: 40px 0px;
    border-radius: 4px;
    box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.125);
    justify-items: center;

    ${media.small`
        width: 95%;
  `} 
`;





const Calculator = () => {
    const [data, setData] = useState({avgRotDelay: 0, recordsInOneSector: 0, clustersPerFile: 0, readingTimePerTrack: 0, 
        readingTimeForFile: 0, readingTimePerCluster: 0, randomReadingTimeForFile: 0});

    const handleSubmit = (values) => {
        setData(values);
        computeValues(values);
    }

    const computeValues = values => {
        const avgRotDelay = calculateAvgRotationalDelay(values.SpindleSpeed);
        const recordsInOneSector = calculateRecordsStoredInOneSector(values.BytesPerSector, values.BytesInRecord);
        const clustersPerFile = calculateClustersPerFile(values.RecordsInFile, values.SectorsPerCluster, recordsInOneSector);
        const readingTimePerTrack = calculateReadingTimePerTrack(values.SpindleSpeed, values.AverageSeekTime, avgRotDelay);
        const readingTimeForFile = calculateReadingTimeForFile(values.RecordsInFile, values.BytesInRecord, values.SectorsPerTrack, 
            values.BytesPerSector, readingTimePerTrack);
        const readingTimePerCluster = calculateReadingTimePerCluster(values.SectorsPerTrack, values.BytesPerSector, values.SectorsPerCluster, 
            avgRotDelay, values.AverageSeekTime);
        const randomReadingTimeForFile = calculateReadingTimeForEntireFile(readingTimePerCluster, clustersPerFile);

        setData({
            avgRotDelay,
            recordsInOneSector,
            clustersPerFile,
            readingTimePerTrack,
            readingTimeForFile,
            readingTimePerCluster,
            randomReadingTimeForFile
        });
    }

    const fields = [{id: "Capacity", label: "Capacity (GB)"}, {id: "AverageSeekTime", label: "Average Seek Time (ms)"}, 
    {id: "SpindleSpeed", label: "Spindle Speed (rpm)"}, {id: "BytesPerSector", label: "Bytes Per Sector"}, 
    {id: "SectorsPerCluster", label: "Sectors Per Cluster"}, {id: "SectorsPerTrack", label: "Sectors Per Track"}, 
    {id: "RecordsInFile", label: "Records In File"}, {id: "BytesInRecord", label: "Bytes In Record"}]

    return (
        <StyledDiv>
            <DataForm fields={fields} onSubmit={handleSubmit}></DataForm>
            <DataDisplay data={data}/>
        </StyledDiv>
    );
}

export default Calculator;