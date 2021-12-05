const axios = require("axios")

module.exports = async (options) => {
    var key = options.apikey
    var limit = options.limit || '1'
    var offset = options.offset || '0'
    var word = options.keyword || 'none'

    if(!options.apikey) {
        throw new Error(`No API key was supplied, please read the docs.`)
    }

    if (options.random === true) {
        var max = 500
        var num = Math.floor(Math.random() * max) + 1;
        var url = `https://developers.medal.tv/v1/search?text=${word}&limit=${limit}&offset=${num}`.replace('#', '%23').replace(' ', '%20')
    } else url = `https://developers.medal.tv/v1/search?text=${word}&limit=${limit}&offset=${offset}`.replace('#', '%23').replace(' ', '%20')

    var clip = await axios.get(url, {
        headers: { "Content-Type": "application/json", "authorization": key }
    })
    .catch(function(err) {
        throw new Error('Something went wrong when querying the Medal API.')
    })

    return clip.data.contentObjects;
}