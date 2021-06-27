import colors from "../colors";

const domainToDoughnutAdapter = (domainData, year, buildingType) => {

    const energyTypes = domainData[0].data.map(dataItem => dataItem.energy_type).flat();
    const values = domainData.filter(buildingTypeItem => buildingTypeItem.label === buildingType)[0].data.map(itemData => itemData.data[year]['moy'])

    return {
        labels: energyTypes.map(energyType => energyType),
        datasets: [
            {
                data:  energyTypes.map((energyType, i) => values[i]),
                backgroundColor:  energyTypes.map((energyType, i) => colors[energyType])
            }
        ]
    };
}

export default domainToDoughnutAdapter;