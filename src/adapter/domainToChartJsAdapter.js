const domainToChartJsAdapter = (domainData) => {
    const energyTypeValueStates = Array(domainData[0].data.length * ['min', 'max'].length).fill(['min', 'max']).flat();
    const energyTypes = domainData[0].data.map(dataItem => ['min', 'max'].map(valueState => dataItem.energy_type + ' ' + valueState)).flat();
    const energyTypeValueStacks = domainData[0].data.map((dataItem, i) => ['min', 'max'].map(valueState => i)).flat();

    const totalValues = (Array(domainData.length * domainData[0].data.length * ['min', 'max'].length));
    let values = ['min', 'max'].map(valueState => domainData[0].data.map((dataItemEnergy, i) => domainData.map((dataItem, j) => dataItem.data[i].data['2015'][valueState])));
    values = values[0].map((valuesSet, i) => [values[0][i], values[1][i]]).flat()


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