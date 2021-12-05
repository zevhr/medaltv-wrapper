const axios = require('axios');
module.exports = async (options) => {

    if(!options.apikey) {
        throw new Error(`No API key was supplied, please read the docs.`)
    }

    var category = options.categoryId.toLowerCase();
    var data = await axios.get(`https://developers.medal.tv/v1/categories`, {
        headers: { "Content-Type": "application/json", "authorization": options.apikey}
    })

    // BINGO
    var ind = data.data.findIndex(x => x.slug === category);
    if (ind !== -1) return data.data[ind];
    else throw new Error('Category "' + options.category + '" does not exist')
}