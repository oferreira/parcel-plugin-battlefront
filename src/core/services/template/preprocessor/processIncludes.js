const getTemplate = require('../getTemplate');
const errorMessage = require('../render/errorMessage');

/**
 * processIncludes
 * 
 * @param {string} html 
 * @param {*} vars 
 */
async function processIncludes(html) {
	return new Promise(async (resolve, reject) => {
        let $return = html;
		
        try {
			let match;
            let pattern = /(\[\[.*?include.*?file\=['|"](.*)['|"].*?\]\])/gim;
            while ((match = pattern.exec(html)) !== null) {
				let search = match[1];
				let path = match[2];

				try {
                    template = await getTemplate(path);
                } catch (err){
                    template = errorMessage(`ERROR, the file you are trying to include <strong>${path}</strong> does not exist !`);
                }

                $return = $return.replace(search, template);
			}

			if(pattern.test($return)) {
				$return =  await processIncludes($return);
			}
		
			// if no extend detected return html
			return resolve($return || html);
		} catch (error) {
			console.warn('processIncludes', error);
			return reject(error);
		}
	});
}

module.exports = processIncludes;
