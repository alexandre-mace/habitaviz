import './App.css';
import GroupedBar from "./components/GroupedBar";
import data from "./data";
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import {useState} from "react";
import InputLabel from '@material-ui/core/InputLabel';
import Switch from '@material-ui/core/Switch';
import {FormControlLabel} from "@material-ui/core/index";
import domainToChartJsAdapter from "./adapter/domainToChartJsAdapter";

function App() {
    const [valueUnity, setValueUnity] = useState('kWhep/m2.an');
    const [year, setYear] = useState('2015');
    const [fluid, setFluid] = useState('Gaz');
    const [averageValues, setAverageValues] = useState(false);

    return (
        <div className="App">
            <div style={{ display: 'flex' }}>
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
                    <FormControlLabel
                        control={<Switch checked={averageValues} onChange={(event) => setAverageValues(event.target.checked)} />}
                        label="Valeur moyenne"
                    />
                </div>
            </div>
            <GroupedBar data={domainToChartJsAdapter(data)}/>
        </div>
    );
}

export default App;
