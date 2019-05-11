import React from 'react';
import DataInput from './DataInput';

const DataForm = () => {
    return (
        <>
            <form>
                <DataInput label="Capacity"/>
                <DataInput label="Average Seek Time"/>
                <DataInput label="Spindle Speed"/>
                <DataInput label="Bytes Per Sector"/>
                <DataInput label="Sectors Per Cluster"/>
                <DataInput label="Sectors Per Track"/>
                <DataInput label="Records in File"/>
                <DataInput label="Bytes in Record"/>
                <button>Calculate</button>
            </form>
        </>
    );
}

export default DataForm;