'use strict';
import getMocksArray from './mock.js';
import { setPins } from './pins.js';
import getFilterValues from './filters.js';

const mocks = getMocksArray();

// const filteredData = filterData(mocks);


setPins(mocks);