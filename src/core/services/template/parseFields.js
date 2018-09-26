const explodeField = require('./explodeField');
const parseFieldType = require('./parseFieldType');
const parseFieldValue = require('./parseFieldValue');

async function parseFields(html) {
	return new Promise(async (resolve, reject) => {
		let fields = [];
		let match;
		const pattern = /\[\[\s*?([\s\S]*?)\s*?\]\]/gim;

		try {
			while ((match = pattern.exec(html)) !== null) {
				let args = explodeField(match[1]);
				let name = args[0];
				
				if( !name.startsWith('extend') && !name.startsWith('include') ){
					let type = parseFieldType(name);
					let value = parseFieldValue(match[1]);
					fields.push({
						name,
						type,
						value
					});
				}
			}
			
			resolve(fields);
		} catch (e) {
			console.log('parseFields', e);
			reject(e);
		}
	});
}

module.exports =  parseFields;