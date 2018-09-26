const HTMLAsset = require('parcel-bundler/src/assets/HTMLAsset');
const parseFields = require('../core/services/template/parseFields');
const fields2Pairs = require('../core/services/template/helpers/fields2Pairs');
const processExtends = require('../core/services/template/preprocessor/processExtends');
const processIncludes = require('../core/services/template/preprocessor/processIncludes');
const proccessVariables = require('../core/services/template/preprocessor/processVariables');

class BattlefrontHTMLAsset extends HTMLAsset {

  processSingleDependency(path, opts) {
    if (isURL(path)) {
      let assetPath = this.addURLDependency(path, opts);
      return assetPath;
    } 

    return path;
  }

  async parse(html) {
    const fields = await parseFields(html);
    let data = await fields2Pairs(fields);
    
    html = await processExtends(html);
    html = await processIncludes(html);
    html = await proccessVariables(html, data);
    
    return super.parse(html) ;
  }
}

module.exports = BattlefrontHTMLAsset;