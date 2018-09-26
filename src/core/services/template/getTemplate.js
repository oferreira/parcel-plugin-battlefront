const fs = require('fs');
const path = require('path');
const TEMPLATE_DIR = path.join(process.env.PWD, `/src`);

async function getTemplate(file) {
	return new Promise(async (resolve, reject) => {
        fs.readFile(path.join(TEMPLATE_DIR, `/${file}`), (err, data) => {
            if (err) return reject(err);
            return resolve(data.toString('utf8'));
        });
	});
}

module.exports = getTemplate;
