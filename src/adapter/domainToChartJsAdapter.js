const domainToChartJsAdapter = (domainData, year, averageValues, fluid) => {
    let valueStates = ['min', 'max'];

    if (averageValues) {
        valueStates = ['moy'];
    }

    const energyTypes = domainData[0].data.map(dataItem => valueStates.map(valueState => dataItem.energy_type + ' ' + valueState)).flat();
    const energyTypeValueStacks = domainData[0].data.map((dataItem, i) => valueStates.map(valueState => i)).flat();
    let values = valueStates.map(valueState => domainData[0].data.map((dataItemEnergy, i) => domainData.map((dataItem, j) => dataItem.data[i].data[year][valueState])));

    if (!averageValues) {
        values = values[0].map((valuesSet, i) => [values[0][i], values[1][i]]).flat()
    } else {
        values = values[0]
    }

    return {
        labels: domainData.map(dataItem => dataItem.label),
        datasets:  energyTypes.map((energyType, i) => ({
            label: energyType,
            data:  values[i],
            backgroundColor: 'rgb(' + Math.round(Math.random() * 255) + ',' + Math.round(Math.random() * 255) + ',' + Math.round(Math.random() * 255) +')',
            stack: energyTypeValueStacks[i]
        }))
    };
}

export default domainToChartJsAdapter;