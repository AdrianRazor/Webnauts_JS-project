export function getRandom (max, min = 0) {
    return Math.floor(Math.random() * max + min)
};

export function getRandomArrayItem (arr) {
    return arr[getRandom(arr.length)]
};

export function getNodeValue (selector, key = 'value') {
    const node = document.querySelector(selector)

    return node[key]
}

export function getPriceValue (int) {
    switch(true) {
        case int >= 10000 && int <= 50000:
            return 'middle'
        case int < 10000:
            return 'low'
        case int > 50000:
            return 'high'
        default:
            return 'ANY'
    }
}