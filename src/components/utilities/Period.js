import GroupedBar from "./../GroupedBar";
import data from "./../../data";
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import React, {useState} from "react";
import InputLabel from '@material-ui/core/InputLabel';
import Switch from '@material-ui/core/Switch';
import {FormControlLabel} from "@material-ui/core/index";
import domainToStackedChartJsAdapter from "../../adapter/domainToStackedChartJsAdapter";

function Period({ startYear, setStartYear, endYear, setEndYear}) {

    return (
        <div>
            <div style={{display: 'inline-block', marginRight: "2rem"}}>
                <InputLabel id="start-year-label">Date début</InputLabel>
                <Select
                    labelId={"start-year-label"}
                    id="start-year"
                    value={startYear}
                    onChange={(event) => setStartYear(event.target.value)}
                >
                    <MenuItem value={'2015'}>2015</MenuItem>
                    <MenuItem value={'2016'}>2016</MenuItem>
                </Select>
            </div>
            <div style={{display: 'inline-block'}}>
                <InputLabel id="end-year-label">Date fin</InputLabel>
                <Select
                    labelId={"end-year-label"}
                    id="year"
                    value={endYear}
                    onChange={(event) => setEndYear(event.target.value)}
                >
                    <MenuItem value={'2015'}>2015</MenuItem>
                    <MenuItem value={'2016'}>2016</MenuItem>
                </Select>
            </div>
        </div>
    );
}

export default Period;