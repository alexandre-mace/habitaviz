import React from 'react';
import {Bar} from 'react-chartjs-2';

const options = {
    scales: {
        yAxes: [
            {
                stacked: true,
                ticks: {
                    beginAtZero: true,
                },
            },
        ],
        xAxes: [
            {
                stacked: true,
            },
        ],
    },
};

const GroupedBar = ({data}) => {
    return (
        <>
            <div className='header'>
                <h1 className='title'>Consommation énergétique des bâtiments : diagramme 1</h1>
            </div>
            <Bar data={data}/>
        </>
    )};

export default GroupedBar;