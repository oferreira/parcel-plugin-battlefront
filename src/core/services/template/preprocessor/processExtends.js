const getTemplate = require('../getTemplate');
const errorMessage = require('../render/errorMessage');

/**
 * processExtends
 * 
 * @param {string} html 
 * @param {*} vars 
 */
async function processExtends(html) {
	return new Promise(async (resolve, reject) => {
        let $return;
      
        try {
			let match;
            let pattern = /(\[\[.*?extend.*?file\=['|"](\S*)['|"].*?\]\])/gim;
            while ((match = pattern.exec(html)) !== null) {
				let search = match[1];
				let path = match[2];

				try {
					// remove tag [[ extend '****' ]]
					html = html.replace(search, '');

					// fetch templete extended
					$return = await getTemplate(path);

					// use extend
					$return = $return.replace(/(\[\[.*?body.*?\]\])/gim, html);
				} catch (err) {
					$return = html.replace(
						search,
						errorMessage(
							`ERROR, the file you are trying to extend <strong>${path}</strong> does not exist !`
						)
					);
				}
			}
			// if no extend detected return html
			resolve($return || html);
		} catch (error) {
			console.warn('processExtends', error);
			reject(error);
		}
	});
}

module.exports = processExtends;
