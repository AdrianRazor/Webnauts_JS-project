import getFilterValues from './filters.js';
// import getMocksArray from './mock.js';
import { setPins } from './pins.js';
import { URL } from './const.js';
import fetchData from './api.js';
import moveMainPin from './mover.js';

moveMainPin()

// const mocks = getMocksArray();

const data = await fetchData(URL);
const filteredData = getFilterValues(data);

setPins(filteredData);