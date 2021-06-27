import './App.css';
import StackedBuildingsEnergyConsumption from "./components/diagrams/StackedBuildingsEnergyConsumption";
import FloatingBuildingsEnergyConsumption from "./components/diagrams/FloatingBuildingsEnergyConsumption";
import DoughnutBuildingsEnergyConsumption from "./components/diagrams/DoughnutBuildingsEnergyConsumption";

function App() {
    return (
        <div className="App">
            <StackedBuildingsEnergyConsumption/>
            <div style={{marginBottom: '4rem'}}/>
            <FloatingBuildingsEnergyConsumption/>
            <div style={{marginBottom: '4rem'}}/>
            <DoughnutBuildingsEnergyConsumption/>
        </div>
    );
}

export default App;
