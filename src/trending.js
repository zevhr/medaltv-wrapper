const axios = require('axios');
const getCat = require('./category');
module.exports = async (options) => {
    var key = options.apikey
    var limit = options.limit || '1'
    var offset = options.offset || '0'
    if(options.categoryId) var category = await getCat({ categoryId: options.categoryId, apikey: key });
    else var category = `none`; 

    if(!options.apikey) {
        throw new Error(`No API key was supplied, please read the docs.`)
    }

    const clip = await axios.get(`https://developers.medal.tv/v1/trending?categoryId=${category.categoryId || category}&limit=${limit}&offset=${offset}`, {
        headers: { "Content-Type": "application/json", 'Authorization': key}
    })
    .catch(function(err) {
        throw new Error('Something went wrong when querying the Medal API.')
    })

    return clip.data.contentObjects
}