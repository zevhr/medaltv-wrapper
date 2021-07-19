const fetch = require('node-fetch')
const chalk = require('chalk')

async function searchClips(options) {

    const key = options.apikey
    const word = options.keyword
    const limit = options.limit
    const offset = options.offset

    if (!key || key === ``) {
        return console.log(chalk.red(`An empty string or undefined was returned for the API key. Please check your options and try again.`))
    } else if (word === `` || word === undefined) {
        return console.log(chalk.red(`An empty string or undefined was returned for the keyword to search. Please check your options and try again.`))
    }

    if (limit === `` && offset != `` || limit === undefined) {
        console.log(`Using default value for limit.`)
        var nolimit = `https://developers.medal.tv/v1/search?limit=10&offset=${offset}&text=${word}`
        
        const { contentObjects } = await fetch(nolimit, {
            method: 'GET',
            headers: {'Authorization': `${key}`, 'Content-Type': 'application/json' }
        }).then(response => response.json())
        
        const base = contentObjects[0]
        module.exports.cdnUrl = base.rawFileUrl // Direct link to the CDN version of the clip. Only works with server-side private key.
        module.exports.cdnUrlLow = base.rawFileUrlLowRes // Same as above but low res. Only also works with server-side private key.
        module.exports.unbrandedFileUrl = base.unbrandedFileUrl
        module.exports.title = base.contentTitle // Clip title
        module.exports.views = base.contentViews // Total amount of views
        module.exports.likes = base.contentLikes // Total amount of likes
        module.exports.thumb = base.contentThumbnail // Clip thumbnail
        module.exports.gameid = base.categoryId // Game category. List of game categories can be found on their docs.
        module.exports.length = base.videoLengthSeconds // Video length in seconds.
        module.exports.timestamp = base.createdTimestamp // Unix timestamp of when the video was created.
        module.exports.clipUrl = base.directClipUrl // Clip URL in Medal's player but entire screen width
        module.exports.credits = base.credits // Credits the user
        module.exports.iframe = base.embedIframeCode // HTML IFrame embeddable video code
    } else if (limit != `` && offset === `` || offset === undefined) {
        console.log(`Using default value for offset.`)
        var nooffset = `https://developers.medal.tv/v1/search?limit=${limit}&text=${word}`
        
        const { contentObjects } = await fetch(nooffset, {
            method: 'GET',
            headers: {'Authorization': `${key}`, 'Content-Type': 'application/json' }
        }).then(response => response.json())

        const base = contentObjects[0]
        module.exports.cdnUrl = base.rawFileUrl // Direct link to the CDN version of the clip. Only works with server-side private key.
        module.exports.cdnUrlLow = base.rawFileUrlLowRes // Same as above but low res. Only also works with server-side private key.
        module.exports.unbrandedFileUrl = base.unbrandedFileUrl
        module.exports.title = base.contentTitle // Clip title
        module.exports.views = base.contentViews // Total amount of views
        module.exports.likes = base.contentLikes // Total amount of likes
        module.exports.thumb = base.contentThumbnail // Clip thumbnail
        module.exports.gameid = base.categoryId // Game category. List of game categories can be found on their docs.
        module.exports.length = base.videoLengthSeconds // Video length in seconds.
        module.exports.timestamp = base.createdTimestamp // Unix timestamp of when the video was created.
        module.exports.clipUrl = base.directClipUrl // Clip URL in Medal's player but entire screen width
        module.exports.credits = base.credits // Credits the user
        module.exports.iframe = base.embedIframeCode // HTML IFrame embeddable video code
    } else if (limit === `` && offset === `` || limit === undefined && offset === undefined) {
        console.log(`Using default value for limit & offset.`)
        var none = `https://developers.medal.tv/v1/search?text=${word}`
        
        const { contentObjects } = await fetch(none, {
            method: 'GET',
            headers: {'Authorization': `${key}`, 'Content-Type': 'application/json' }
        }).then(response => response.json())

        const base = contentObjects[0]
        module.exports.cdnUrl = base.rawFileUrl // Direct link to the CDN version of the clip. Only works with server-side private key.
        module.exports.cdnUrlLow = base.rawFileUrlLowRes // Same as above but low res. Only also works with server-side private key.
        module.exports.unbrandedFileUrl = base.unbrandedFileUrl
        module.exports.title = base.contentTitle // Clip title
        module.exports.views = base.contentViews // Total amount of views
        module.exports.likes = base.contentLikes // Total amount of likes
        module.exports.thumb = base.contentThumbnail // Clip thumbnail
        module.exports.gameid = base.categoryId // Game category. List of game categories can be found on their docs.
        module.exports.length = base.videoLengthSeconds // Video length in seconds.
        module.exports.timestamp = base.createdTimestamp // Unix timestamp of when the video was created.
        module.exports.clipUrl = base.directClipUrl // Clip URL in Medal's player but entire screen width
        module.exports.credits = base.credits // Credits the user
        module.exports.iframe = base.embedIframeCode // HTML IFrame embeddable video code
    } else {
        var api = `https://developers.medal.tv/v1/search?text=${word}&limit=${limit}&offset=${offset}`

        const data = await fetch(api, {
            method: 'GET',
            headers: {'Authorization': `${key}`, 'Content-Type': 'application/json'}
        }).then(response => response.json())
    
        console.log(data.contentObjects[0])
    
        const base = data.contentObjects[0]
    
        module.exports.cdnUrl = base.rawFileUrl // Direct link to the CDN version of the clip. Only works with server-side private key.
        module.exports.cdnUrlLow = base.rawFileUrlLowRes // Same as above but low res. Only also works with server-side private key.
        module.exports.unbranded = base.unbrandedFileUrl
        module.exports.title = base.contentTitle // Clip title
        module.exports.views = base.contentViews // Total amount of views
        module.exports.likes = base.contentLikes // Total amount of likes
        module.exports.thumb = base.contentThumbnail // Clip thumbnail
        module.exports.gameid = base.categoryId // Game category. List of game categories can be found on their docs.
        module.exports.length = base.videoLengthSeconds // Video length in seconds.
        module.exports.timestamp = base.createdTimestamp // Unix timestamp of when the video was created.
        module.exports.clipUrl = base.directClipUrl // Clip URL in Medal's player but entire screen width
        module.exports.credits = base.credits // Credits the user
        module.exports.iframe = base.embedIframeCode // HTML IFrame embeddable video code
    }
}

module.exports = searchClips