import getFilterValues from './filters.js';
import getMocksArray from './mock.js';
import { setPins } from './pins.js';

const mocks = getMocksArray();

const filteredData = getFilterValues(mocks);

setPins(filteredData);