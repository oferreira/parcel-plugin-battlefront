/**
 * parseFieldType
 * @param {string} fieldName 
 */
const parseFieldType = (fieldName) => {
	if (fieldName.startsWith('img') || fieldName.startsWith('image')) {
		return 'image';
	}

	return 'txt';
};

module.exports = parseFieldType;
