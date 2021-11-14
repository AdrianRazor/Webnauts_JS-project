import { getRandom } from "./utils.js";
import { getRandomArrayItem } from "./utils.js";
import { TITLES, OFFER_TYPES, TIME_VALUES, FEATURES } from "./const.js";

function getMock() {
    let mock = {
        "author": {
            "avatar": `img/avatars/default.png`,
        },
            
        "location": {
            "x": 1200,
            "y": 630,
        },
    
        "offer": {
            "title": 'Nagasaki Hotel',
            "address": '1200, 630',
            "price": 10000,
            "type": 'palace',
            "rooms": 3,
            "guests": 6,
            "checkin": '14:00',
            "checkout": '12:00',
            "features": [],
            "description": 'Lorem neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit',
        },
    }

    mock.author.avatar = 'img/avatars/user0' + getRandom(8) + '.png';

    mock.location.x = getRandom(1200);
    mock.location.y = getRandom(600);

    mock.offer.title = getRandomArrayItem(TITLES);
    mock.offer.address = `${mock.location.x}, ${mock.location.y}`;
    mock.offer.price = getRandom(2500);
    mock.offer.type = getRandomArrayItem(OFFER_TYPES);
    mock.offer.rooms = getRandom(3);
    mock.offer.guests = getRandom(6);
    mock.offer.checkin = getRandomArrayItem(TIME_VALUES);
    mock.offer.checkout = getRandomArrayItem(TIME_VALUES);
    
    for (let i = 0; i < FEATURES.length; i++) {
        const currentItem = FEATURES[i]
        if (getRandom(10) > 5) {
            mock.offer.features.push(currentItem)
        }
    };

    mock.offer.description = 'Lorem neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit';

    return mock
};

function getMocksArray (mockCount = 8) {
    const resultArray = []

    for (let i = 0; i < mockCount; i++) {
        const mock = getMock()
        resultArray.push(mock)
    }

    return resultArray
};

export default getMocksArray