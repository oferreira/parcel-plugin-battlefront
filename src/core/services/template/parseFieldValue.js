const explodeField = require('./explodeField');

/**
 * parseFieldValue
 *
 * @param args
 */
const parseFieldValue = (str) => {
    let $return = '';
    const args = explodeField(str);
    const pattern = /^`([\s\S]*?)`$/gim;
   
    args.forEach((x) => {
        let match = pattern.exec(x);
       
        if (match != null) {
            $return = match[1];
        }
    });

    return ($return || args[1]);
};

module.exports = parseFieldValue;