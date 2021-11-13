export function getRandom (max) {
    return Math.ceil(Math.random() * max)
};

export function getRandomArrayItem (arr) {
    return arr[getRandom(arr.length - 1)]
};