import { ANY } from "./const.js";
import { getNodeValue } from "./utils.js";
import { setPins, removePins } from "./pins.js";

function filterData (rawData, config) {
    let filteredData = rawData;


    if(config.type !== ANY) {
        filteredData = filteredData.filter(function (mock) {
            if (mock.offer.type === config.type) {
                return true
            } else {
                return false
            }
             
        })
    }

    if(config.wifi) {
        filteredData = filteredData.filter(function (mock) {
            if (mock.offer.features.includes('wifi')) {
                return true
            } else {
                return false
            }
             
        })
    }

    return filteredData
}

export default function getFilterValues (data) {
    const form = document.querySelector('.map__filters')
    let filteredData = data

    form.addEventListener('change', function () {
        filteredData = filterData(data, {
            type: getNodeValue('#housingtype'),
            wifi: getNodeValue('#filter-wifi', 'checked')
        })
        removePins()
        setPins(filteredData)
    })

    return filteredData
}