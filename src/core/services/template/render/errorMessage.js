/**
 * errorMessage
 *
 * @param {string} message
 * @returns {string}
 */
function errorMessage(message) {
    return `<div style="color: #D8000C;background-color: #FFBABA;padding: 20px 20px;border-radius: 4px;">${message}</div>`;
}

module.exports = errorMessage;