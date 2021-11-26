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

    if(config.price !== ANY) {
        filteredData = filteredData.filter(function (mock) {
            if (mock.offer.price === config.price) {
                return true
            } else {
                return false
            }
        })
        console.log(filteredData);
    }

    // if(config.rooms !== ANY) {
    //     filteredData = filteredData.filter(function (mock) {
    //         if (mock.offer.rooms === config.rooms) {
    //             return true
    //         } else {
    //             return false
    //         }
    //     })
    // }

    // if(config.guests !== ANY) {
    //     filteredData = filteredData.filter(function (mock) {
    //         if (mock.offer.guests === config.guests) {
    //             return true
    //         } else {
    //             return false
    //         }
    //     })
    // }

    if(config.wifi) {
        filteredData = filteredData.filter(function (mock) {
            if (mock.offer.features.includes('wifi')) {
                return true
            } else {
                return false
            }
        })
    }

    if(config.dishwasher) {
        filteredData = filteredData.filter(function (mock) {
            if (mock.offer.features.includes('dishwasher')) {
                return true
            } else {
                return false
            }
        })
    }
    
    if(config.parking) {
        filteredData = filteredData.filter(function (mock) {
            if (mock.offer.features.includes('parking')) {
                return true
            } else {
                return false
            }
        })
    }
    
    if(config.washer) {
        filteredData = filteredData.filter(function (mock) {
            if (mock.offer.features.includes('washer')) {
                return true
            } else {
                return false
            }
        })
    }
    
    if(config.elevator) {
        filteredData = filteredData.filter(function (mock) {
            if (mock.offer.features.includes('elevator')) {
                return true
            } else {
                return false
            }
        })
    }
    
    if(config.conditioner) {
        filteredData = filteredData.filter(function (mock) {
            if (mock.offer.features.includes('conditioner')) {
                return true
            } else {
                return false
            }
        })
    }

    return filteredData
};


export default function getFilterValues (data) {
    const form = document.querySelector('.map__filters')
    let filteredData = data

    form.addEventListener('change', function () {
        filteredData = filterData(data, {
            type: getNodeValue('#housingtype'),
            price: getNodeValue('#housingprice'),
            // rooms: getNodeValue('#housing-rooms'),
            // guests: getNodeValue('#housing-guests'),
            wifi: getNodeValue('#filter-wifi', 'checked'),
            dishwasher: getNodeValue('#filter-dishwasher', 'checked'),
            parking: getNodeValue('#filter-parking', 'checked'),
            washer: getNodeValue('#filter-washer', 'checked'),
            elevator: getNodeValue('#filter-elevator', 'checked'),
            conditioner: getNodeValue('#filter-conditioner', 'checked'),
        })
        removePins()
        setPins(filteredData)
    })

    return filteredData
};
