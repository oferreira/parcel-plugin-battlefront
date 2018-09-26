const flatten = require('flat');
const _ = require('lodash');
const parseFieldName = require('../parseFieldName');

/**
 * proccessVariables
 * 
 * @param {string} html 
 * @param {*} vars 
 */
async function proccessVariables(html, data) {
	return new Promise(async (resolve, reject) => {
		const vars = flatten(data);
                let $return = html;

		let pattern = /\[\[\s*?([\s\S]*?)\s*?\]\]/gim;
		while ((match = pattern.exec(html)) !== null) {
			let tag = match[0];
                        let fieldName = parseFieldName(match[1]);
			let newContent = undefined;

			if (fieldName in vars) {
                                newContent = vars[fieldName];
			}

			if (newContent != undefined) {
				$return = $return.replace(
					new RegExp(`(\\[\\[ *?${fieldName}[ |\\]][\\s\\S]*? *?\\]\\]?)`, 'gim'),
					_.unescape(newContent)
                                );
                                
				$return = $return.replace(
					new RegExp(`(\\[\\[ *?${fieldName} *?\\]\\])`, 'gim'),
					_.unescape(newContent)
				);
			}
		}

		resolve($return);
	});
}

module.exports = proccessVariables;
