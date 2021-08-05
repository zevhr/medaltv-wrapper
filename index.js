//////////////////////////////////////
//      Medal.tv API Wrapper        //
//          By Awexxx               //
//////////////////////////////////////

const fetch = require('node-fetch')
const chalk = require('chalk');

// Generate a public API key. Keep it handy, you'll need it!
async function genPublicKey() {
    var data = await fetch(`https://developers.medal.tv/v1/generate_public_key`).then(response => response.text())
    let token = data.substr(30)
    console.log(token)
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
    console.log(url)

    const data = await fetch(url, {
        method: 'GET',
        headers: { 'Authorization': `${key}`}
    }).then(response => response.json())

    return module.exports.data = data.contentObjects
}

// Get the latest clip from user or category!
async function latestClips(options) {
    var key = options.apikey
    var limit = options.limit || '1'
    var offset = options.offset || '0'
    var uid = options.uid || 'none'
    var category = options.categoryId || 'none'

    if(key === '' || key === undefined) {
        return console.log(chalk.redBright.bold(`Sorry, but you need a Medal.tv API key!\nUse built-in function or get one from their Developer Docs (https://docs.medal.tv/api)`))
    } else {
        var url = `https://developers.medal.tv/v1/latest?userId=${uid}&categoryId=${category}&limit=${limit}&offset=${offset}`
        const data = await fetch (url, {
            method: 'GET',
            headers: { 'Authorization': `${key}` }
        }).then(response => response.json())
        return module.exports.data = data.contentObjects
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
    } else {
        var url = `https://developers.medal.tv/v1/search?text=${word}&limit=${limit}&offset=${offset}`.replace('#', '%23')
        const data = await fetch (url, {
            method: 'GET',
            headers: { 'Authorization': `${key}` }
        }).then(response => response.json())
        return module.exports.data = data.contentObjects
    }
}

module.exports = { genPublicKey, trendingClips, latestClips, searchClips }