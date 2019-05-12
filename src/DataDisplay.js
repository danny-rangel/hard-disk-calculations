import React from 'react';

const DataDisplay = ({ data }) => {
    return (
        <div>
            <h4>{`Average Rotational Delay: ${data.avgRotDelay} ms`}</h4>
            <h4>{`Records per Sector: ${data.recordsInOneSector} records`}</h4>
            <h4>{`Clusters needed for file: ${data.clustersPerFile} clusters`}</h4>
            <h4>{`Reading One Track: ${data.readingTimePerTrack} ms`}</h4>
            <h4>{`Total Time for Reading Entire File: ${data.readingTimeForFile} ms`}</h4>
            <h4>{`Time for Reading One Cluster: ${data.readingTimePerCluster} ms`}</h4>
            <h4>{`Total Time for Reading Entire File assuming Random Storage: ${data.randomReadingTimeForFile} ms`}</h4>
        </div>
    );
}

export default DataDisplay;