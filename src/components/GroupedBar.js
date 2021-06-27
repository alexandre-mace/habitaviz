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
            <div className='header'>
                <h1 className='title'>Consommation énergétique des bâtiments : diagramme 1</h1>
            </div>
            <Bar data={data} options={options}/>
        </>
    )};

export default GroupedBar;