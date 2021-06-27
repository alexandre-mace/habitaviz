import React from 'react';
import { Doughnut as ChartJsDoughnut } from 'react-chartjs-2';

const Doughnut = ({ data }) => {
    return (
        <div className={"doughnut"}>
            <ChartJsDoughnut data={data}/>
        </div>
    )};

export default Doughnut;