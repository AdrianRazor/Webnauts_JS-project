import { ANY } from "./const.js";
import { getNodeValue } from "./utils.js";
import { setPins } from "./pins.js"

export function filterDara (rawData, config) {
    let filteredData = rawData;

    if (config.type !== ANY) {
        filteredData = filteredData.filter(function (mock) {
            if (mock.offer.type === config.type) {
                return true
            } else {
                return false
            }
        })
    }

    return filterDara
}

export default function getFilterValues (data) {
    const form = document.querySelector('.map__filters')
    let filteredData = data
    form.addEventListener('change', function () {
        filteredData = filterData(data, {
            type: getNodeValue('#housingtype')
        })
    })

    

    return filteredData
}