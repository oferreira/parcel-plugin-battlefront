/**
 * fields2Pairs
 * 
 * @param {*} fields 
 */
async function fields2Pairs(fields) {
	return new Promise(async (resolve, reject) => {
		try {
			const $return = {};
            
            fields.forEach(async(x) => {
                if( 'name' in x && 'value' in x ) {
                    $return[x.name] = x.value;
                }
            });
			
			resolve($return);
		} catch (e) {
			console.log('fields2Pairs', e);
			reject(e);
		}
	});
}

module.exports = fields2Pairs;