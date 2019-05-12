export function calculateAvgRotationalDelay(spindleSpeed) {
    return (60000 / spindleSpeed) / 2;
}

export function calculateRecordsStoredInOneSector(bytesPerSector, bytesInRecord) {
    return bytesPerSector / bytesInRecord;
}

export function calculateClustersPerFile(recordsInFile, sectorsPerCluster, recordsInOneSector) {

    const first = recordsInFile / recordsInOneSector;
    return first / sectorsPerCluster;
}

export function calculateReadingTimePerTrack(spindleSpeed, averageSeekTime, averageRotationalDelay) {
    const transferTime = 60000 / spindleSpeed;
    return transferTime + averageSeekTime + averageRotationalDelay;
}

export function calculateReadingTimeForFile(recordsInFile, bytesInRecord, sectorsPerTrack, bytesPerSector, readingTimeforOneTrack) {
    const totalBytes = recordsInFile * bytesInRecord;
    const totalTrackSize = sectorsPerTrack * bytesPerSector;
    const result = totalBytes / totalTrackSize;
    return result * readingTimeforOneTrack;
}

export function calculateReadingTimePerCluster(sectorsPerTrack, bytesPerSector, sectorsPerCluster, averageRotationalDelay, averageSeekTime) {
    const trackSize = sectorsPerTrack * bytesPerSector;
    const clusterSize = sectorsPerCluster * bytesPerSector;
    const transferTime = ((averageRotationalDelay * 2) * clusterSize) / trackSize;
    return averageSeekTime + averageRotationalDelay + transferTime;
}

export function calculateReadingTimeForEntireFile(readingTimePerCluster, clustersPerFile) {
    return clustersPerFile * readingTimePerCluster;
}

