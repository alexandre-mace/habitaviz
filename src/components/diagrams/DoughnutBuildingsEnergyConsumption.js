import data from "./../../data";
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import React, {useState} from "react";
import InputLabel from '@material-ui/core/InputLabel';
import Doughnut from "../Dougnut";
import domainToDoughnutAdapter from "../../adapter/domainToDoughnutAdapter";

function DoughnutBuildingsEnergyConsumption() {
    const [valueUnity, setValueUnity] = useState('kWhep/m2.an');
    const [year, setYear] = useState('2015');
    const [fluid, setFluid] = useState('Gaz');
    const [buildingType, setBuildingType] = useState('Maisons individuelles');

    return (
        <div>
            <div className='header'>
                <h1 className='title'>Consommation énergétique des bâtiments : diagramme 2 (représentation en doughnut)</h1>
            </div>
            <div style={{ display: 'flex' }}>
                <div style={{display: 'inline-block'}}>
                    <InputLabel id="buildingType-label">Type de logement</InputLabel>
                    <Select
                        labelId={"buildingType-label"}
                        id="buildingType"
                        value={buildingType}
                        onChange={(event) => setBuildingType(event.target.value)}
                    >
                        <MenuItem value={'Maisons individuelles'}>Maisons individuelles</MenuItem>
                        <MenuItem value={'Logements collectifs'}>Logements collectifs</MenuItem>
                        <MenuItem value={'Bureau, enseignement'}>Bureau, enseignement</MenuItem>
                        <MenuItem value={'Hôtel'}>Hôtel</MenuItem>
                    </Select>
                </div>
                <div style={{marginRight: '2rem'}}/>
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
                <div style={{display: 'inline-block'}}>
                    <InputLabel id="year-label">Période</InputLabel>
                    <Select
                        labelId={"year-label"}
                        id="year"
                        value={year}
                        onChange={(event) => setYear(event.target.value)}
                    >
                        <MenuItem value={'2015'}>2015</MenuItem>
                        <MenuItem value={'2016'}>2016</MenuItem>
                    </Select>
                </div>
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
            </div>
            <Doughnut data={domainToDoughnutAdapter(data, year, buildingType)}/>
        </div>
    );
}

export default DoughnutBuildingsEnergyConsumption;
