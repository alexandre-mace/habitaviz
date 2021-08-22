import GroupedBar from "./../GroupedBar";
import data from "./../../data";
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import React, {useEffect, useState} from "react";
import InputLabel from '@material-ui/core/InputLabel';
import Switch from '@material-ui/core/Switch';
import {Button, FormControlLabel} from "@material-ui/core/index";
import domainToStackedChartJsAdapter from "../../adapter/domainToStackedChartJsAdapter";
import Period from "../utilities/Period";
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import PauseCircleOutlineIcon from '@material-ui/icons/PauseCircleOutline';

let periodsToPlay = ['2015', '2016'];
let periodPlayingHasStoppedWhileTimeOut = false;

function StackedBuildingsEnergyConsumption() {
    const [valueUnity, setValueUnity] = useState('kWhep/m2.an');
    const [startYear, setStartYear] = useState('2015');
    const [endYear, setEndYear] = useState('2015');
    const [fluid, setFluid] = useState('Gaz');
    const [averageValues, setAverageValues] = useState(false);
    const [playPeriod, setPlayPeriod] = useState(false);

    useEffect(() => {
        if (playPeriod !== false) {
            setTimeout(() => {
                periodsToPlay = (periodsToPlay.filter(period => period !== periodsToPlay[0]))
                if (periodsToPlay.length === 0 || periodPlayingHasStoppedWhileTimeOut) {
                    periodPlayingHasStoppedWhileTimeOut = false
                    setPlayPeriod(false);
                    periodsToPlay = ['2015', '2016'];
                    return;
                }

                setStartYear(periodsToPlay[0]);
                setEndYear(periodsToPlay[0]);
                setPlayPeriod(periodsToPlay[0]);
            }, 1500)
        }
    }, [playPeriod])

    return (
        <div>
            <div className='header'>
                <h1 className='title'>Consommation énergétique des bâtiments : diagramme 1 (min et max "stackés")</h1>
            </div>

            <div style={{ display: 'flex', alignItems: 'center' }}>
                <div style={{display: 'inline-block'}}>
                    <InputLabel id="fluid-label">Fluide</InputLabel>
                    <Select
                        labelId={"fluid-label"}
                        id="fluid"
                        value={fluid}
                        onChange={(event) => setFluid(event.target.value)}
                    >
                        <MenuItem value={'Gaz'}>Gaz</MenuItem>
                        <MenuItem value={'Elec'}>Elec</MenuItem>
                        <MenuItem value={'Fioul'}>Fioul</MenuItem>
                        <MenuItem value={'Bois'}>Bois</MenuItem>
                        <MenuItem value={'Charbon'}>Charbon</MenuItem>
                        <MenuItem value={'Réseau de chaleur'}>Réseau de chaleur</MenuItem>
                    </Select>
                </div>
                <div style={{marginRight: '2rem'}}/>
                <Period startYear={startYear} setStartYear={setStartYear} endYear={endYear} setEndYear={setEndYear} setPlayPeriod={setPlayPeriod}/>
                <div style={{marginRight: '2rem'}}/>
                <div style={{display: 'inline-block'}}>
                    <InputLabel id="value-unity-label">Unité</InputLabel>
                    <Select
                        labelId={"value-unity-label"}
                        id="value-unity"
                        value={valueUnity}
                        onChange={(event) => setValueUnity(event.target.value)}
                    >
                        <MenuItem value={'kWhep/m2.an'}>kWhep/m2.an</MenuItem>
                        <MenuItem value={'kWhef/m2.an'}>kWhef/m2.an</MenuItem>
                    </Select>
                </div>
                <div style={{marginRight: '2rem'}}/>
                <div style={{display: 'inline-block'}}>
                    <FormControlLabel
                        control={<Switch checked={averageValues} onChange={(event) => setAverageValues(event.target.checked)} />}
                        label="Valeur moyenne"
                    />
                </div>
                {playPeriod &&
                <Button
                    style={{marginLeft: '2rem', height: 40}}
                    variant="contained"
                    color="primary" onClick={() => {
                        periodPlayingHasStoppedWhileTimeOut = true;
                        setPlayPeriod(false)
                    }}
                    endIcon={<PauseCircleOutlineIcon />}
                >Stop</Button>
                }
                {!playPeriod &&
                <Button
                    style={{marginLeft: '2rem', height: 40}}
                    variant="contained"
                    color="primary" onClick={() => setPlayPeriod(periodsToPlay[0])}
                    endIcon={<PlayCircleOutlineIcon />}
                >Play</Button>
                }
                {(playPeriod && typeof periodsToPlay[0] !== 'undefined') && <h2 style={{marginLeft: '2rem', marginTop: 0, marginBottom: 0}}>{periodsToPlay[0]}</h2>}
            </div>
            <GroupedBar data={domainToStackedChartJsAdapter(data, startYear, endYear, averageValues, fluid)}/>
        </div>
    );
}

export default StackedBuildingsEnergyConsumption;
