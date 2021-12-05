const axios = require('axios');
const getCat = require('./category');
module.exports = async (options) => {
    var key = options.apikey
    var limit = options.limit || '1'
    var offset = options.offset || '0'
    var uid = options.uid || 'none'

    if(!options.apikey) {
        throw new Error(`No API key was supplied, please read the docs.`)
    }

    if(options.categoryId) var category = await getCat({ categoryId: options.categoryId, apikey: key });
    else var category = `none`; 

    if(uid === "none" && category === "none") {
        throw new Error(`You need to provide at least a Medal User ID or category name.`)
    } else if (options.random === true) {
        var max = 500
        var num = Math.floor(Math.random() * max) + 1;
        var url = `https://developers.medal.tv/v1/latest?categoryId=${category.categoryId || category}&userId=${uid}&limit=${limit}&offset=${num}`.replace('#', '%23').replace(' ', '%20')
    } else url = `https://developers.medal.tv/v1/latest?categoryId=${category.categoryId || category}&userId=${uid}&limit=${limit}&offset=${offset}`.replace('#', '%23').replace(' ', '%20')

    const clip = await axios.get(url, {
        method: 'GET',
        headers: { "Content-Type": "application/json", 'Authorization': key }
    })
    
    return clip.data.contentObjects
}