const explodeField = require('./explodeField');

/**
 * parseFieldName
 *
 * @param str
 */
const parseFieldName = (str) => {
    const args = explodeField(str);
    return args[0];
};

module.exports = parseFieldName;