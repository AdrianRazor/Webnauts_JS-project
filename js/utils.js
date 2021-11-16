export function getRandom (max) {
    return Math.floor(Math.random() * max)
};

export function getRandomArrayItem (arr) {
    return arr[getRandom(arr.length)]
};

export function getNodeValue (selector, key = 'value') {
    const node = document.querySelector(selector)

    return node[key]
}