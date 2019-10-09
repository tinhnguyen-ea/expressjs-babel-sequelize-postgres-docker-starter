'use strict';
const path = require('path');

const dotEnvPath = path.resolve(`./.env${process.env.NODE_ENV === 'test' ? '.test' : ''}`);
require('dotenv').config({ path: dotEnvPath });
