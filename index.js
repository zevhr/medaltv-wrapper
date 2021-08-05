//////////////////////////////////////
//      Medal.tv API Wrapper        //
//          By Awexxx               //
//////////////////////////////////////

const fetch = require('node-fetch');
const chalk = require('chalk');

async function trendingClips(options) {
    const key = options.apikey
    const limit = options.limit
    const offset = options.offset

    if(key === `` || key === undefined) {
        console.log(offset, limit)
        return console.log(chalk.red(`An empty string or undefined was returned for the API key. Please check your options and try again.`))
    }

    if (!offset && !limit) {
        console.log('Using default values for offset and limit.')

        var none = `https://developers.medal.tv/v1/trending?limit=10&offset=0`

        const { contentObjects } = await fetch(none, {
            method: 'GET',
            headers: {'Authorization': `${key}`, 'Content-Type': 'application/json'}
        }).then(response => response.json())

        console.log(contentObjects[0])

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
    }

    if(offset === `` && limit != `` || offset === undefined) {
        console.log(`Using default value for offset.`)
        var limito = `https://developers.medal.tv/v1/trending?limit=${limit}`
        const { contentObjects } = await fetch(limito, {
            method: 'GET',
            headers: {'Authorization': `${key}`, 'Content-Type': 'application/json'}
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

    } else if (offset != `` && limit === `` || limit === undefined) {
        console.log(`Using default value for limit (10).`)
        var offsetto = `https://developers.medal.tv/v1/trending?limit=10&offset=${offset}`

        const { contentObjects } = await fetch(offsetto, {
            method: 'GET',
            headers: {'Authorization': `${key}`, 'Content-Type': 'application/json'}
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
        console.log('All options provided!', offset, limit)
    var api = `https://developers.medal.tv/v1/trending?limit=${limit}&offset=${offset}`
    const { contentObjects } = await fetch(api, {
        method: 'GET',
        headers: {'Authorization': `${key}`, 'Content-Type': 'application/json'}
    }).then(response => response.json())

    console.log(contentObjects[0])

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
    }
}

async function newestClips(options) {

    const key = options.apikey
    const user = options.uid
    const limit = options.limit
    const offset = options.offset
    console.log(limit)

    if(key === `` || key === undefined) {
        return console.log(chalk.red(`An empty string or undefined was returned for the API key. Please check your options and try again.`))
    } else if (user === `` || user === undefined) {
        return console.log(chalk.red(`An empty string or undefined was returned for the user. Please check your options and try again.`))
    } else if (limit === `` && offset != `` || limit === undefined) {
        console.log(`Using default value for limit.`)
        var nolimit = `https://developers.medal.tv/v1/latest?limit=10&offset=${offset}&userId=${user}`
        
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
        var nooffset = `https://developers.medal.tv/v1/latest?limit=${limit}&userId=${user}`
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
    } else if (limit === `` && offset === ``) {
        console.log(`Using default values for limit and offset.`)
        var none = `https://developers.medal.tv/v1/latest?userId=${user}`
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
        console.log(`All options provided!`)

        var api = `https://developers.medal.tv/v1/latest?userId=${user}&limit=${limit}&offset=${offset}`
        
        const { contentObjects } = await fetch(api, {
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
    }
}

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
        var nolimit = `https://developers.medal.tv/v1/search?limit=10&offset=${offset}&text=${word}`.replace('#', '%23')
        console.log(nolimit)
        
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
        var nooffset = `https://developers.medal.tv/v1/search?limit=${limit}&text=${word}`.replace('#', '%23')
        
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
        var api = `https://developers.medal.tv/v1/search?text=${word}&limit=${limit}&offset=${offset}`.replace('#', '%23')

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

module.exports = { searchClips, newestClips, trendingClips }