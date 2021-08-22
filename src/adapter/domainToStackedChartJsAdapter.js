import colors from "../colors";

const domainToStackedChartJsAdapter = (domainData, startYear, endYear, averageValues, fluid) => {
    let valueStates = ['min', 'max'];

    if (averageValues) {
        valueStates = ['moy'];
    }

    const energyTypes = domainData[0].data.map(dataItem => valueStates.map(valueState => dataItem.energy_type + ' ' + valueState)).flat();
    const energyTypeValueStacks = domainData[0].data.map((dataItem, i) => valueStates.map(valueState => i)).flat();
    let valuesStart = valueStates.map(valueState => domainData[0].data.map((dataItemEnergy, i) => domainData.map((dataItem, j) => dataItem.data[i].data[startYear][valueState])));
    let valuesEnd = valueStates.map(valueState => domainData[0].data.map((dataItemEnergy, i) => domainData.map((dataItem, j) => dataItem.data[i].data[endYear][valueState])));

    if (!averageValues) {
        valuesStart = valuesStart[0].map((valuesSet, i) => [valuesStart[0][i], valuesStart[1][i]]).flat()
        valuesEnd = valuesEnd[0].map((valuesSet, i) => [valuesEnd[0][i], valuesEnd[1][i]]).flat()
    } else {
        valuesStart = valuesStart[0]
        valuesEnd = valuesEnd[0]
    }

    const values = valuesStart.map((valueStartDeep1, i) => valueStartDeep1.map((valueStartDeep2, j) => {
        return (valueStartDeep2 + valuesEnd[i][j]) / 2;
    }))

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