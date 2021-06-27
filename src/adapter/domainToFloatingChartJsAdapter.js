import colors from "../colors";

const domainToStackedChartJsAdapter = (domainData, year, averageValues, fluid) => {

    const energyTypes = domainData[0].data.map(dataItem => dataItem.energy_type).flat();
    const energyTypeValueStacks = domainData[0].data.map((dataItem, i) => i).flat();

    let values = domainData[0].data.map((dataItemEnergy, i) => domainData.map((dataItem, j) => [dataItem.data[i].data[year]['min'], dataItem.data[i].data[year]['max']]));

    if (averageValues) {
        let valueStates = ['moy'];
        values = valueStates.map(valueState => domainData[0].data.map((dataItemEnergy, i) => domainData.map((dataItem, j) => dataItem.data[i].data[year][valueState])));
        values = values[0]
    }

    return {
        labels: domainData.map(dataItem => dataItem.label),
        datasets:  energyTypes.map((energyType, i) => ({
            label: energyType,
            data:  values[i],
            backgroundColor: colors[energyType],
            stack: energyTypeValueStacks[i]
        }))
    };
}

export default domainToStackedChartJsAdapter;