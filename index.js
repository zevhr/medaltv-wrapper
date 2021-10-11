//////////////////////////////////////
//      Medal.tv API Wrapper        //
//          By Awexxx               //
//////////////////////////////////////

const axios = require('axios').default;
const chalk = require('chalk');

// Generate a public API key. Keep it handy, you'll need it!
async function genPublicKey() {
    var data = await axios.get(`https://developers.medal.tv/v1/generate_public_key`)
    let token = data.data.substr(30)
    console.log(`Great news! Your new token is ${chalk.greenBright.bold(token)}!`)
}

// Get trending clips, either via category or just offset/limit! 
async function trendingClips(options) {
    var key = options.apikey
    var limit = options.limit || '1'
    var offset = options.offset || '0'
    var category = options.categoryId || 'none'

    if(key === '' || key === undefined) {
        return console.log(chalk.redBright.bold(`Sorry, but you need a Medal.tv API key!\nUse built-in function or get one from their Developer Docs (https://docs.medal.tv/api)`))
    }

    var url = `https://developers.medal.tv/v1/trending?categoryId=${category}&limit=${limit}&offset=${offset}`

    const data = await axios.get(url, {
        method: 'GET',
        headers: { 'Authorization': `${key}`}
    })

    return module.exports.data = data.data.contentObjects[0]
}

// Get the latest clip from user or category!
async function latestClip(options) {
    var key = options.apikey
    var limit = options.limit || '1'
    var offset = options.offset || '0'
    var uid = options.uid || 'none'
    var category = options.categoryId || 'none'

    if(key === '' || key === undefined) {
        return console.log(chalk.redBright.bold(`Sorry, but you need a Medal.tv API key!\nUse built-in function or get one from their Developer Docs (https://docs.medal.tv/api)`))
    } else {
        var url = `https://developers.medal.tv/v1/latest?userId=${uid}&categoryId=${category}&limit=${limit}&offset=${offset}`
        const data = await axios.get(url, {
            method: 'GET',
            headers: { 'Authorization': `${key}` }
        })
        return module.exports.data = data.data.contentObjects[0]
    }
}

// Search for clips using the provided keyword!
async function searchClips(options) {
    var key = options.apikey
    var limit = options.limit || '1'
    var offset = options.offset || '0'
    var word = options.keyword || 'none'

    if(key === '' || key === undefined) {
        return console.log(chalk.redBright.bold(`Sorry, but you need a Medal.tv API key!\nUse built-in function or get one from their Developer Docs (https://docs.medal.tv/api)`))
    } else if (options.random === true) {
        var max = 500
        var num = Math.floor(Math.random() * max) + 1;
        var url = `https://developers.medal.tv/v1/search?text=${word}&limit=${limit}&offset=${num}`.replace('#', '%23').replace(' ', '%20')
    } else url = `https://developers.medal.tv/v1/search?text=${word}&limit=${limit}&offset=${offset}`.replace('#', '%23').replace(' ', '%20')

    const data = await axios.get(url, {
        method: 'GET',
        headers: { 'Authorization': `${key}` }
    })
    return module.exports.data = data.data.contentObjects[0]
}

module.exports = { genPublicKey, trendingClips, latestClip, searchClips }