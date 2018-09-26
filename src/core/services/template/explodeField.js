const _ = require('lodash');

/**
 * explodeField
 *
 * @param str txt1 | `` | upper
 */
const explodeField = (str) => {
    return _.trim(str).split('|').map((x) => _.trim(x));
};

module.exports = explodeField;