import React from 'react';
import {Bar} from 'react-chartjs-2';

const options = {
    scales: {
        y: {
            suggestedMax: 100,
        },
        x: {
        }
    },
};

const GroupedBar = ({data}) => {
    return (
        <>
            <Bar data={data} options={options}/>
        </>
    )};

export default GroupedBar;