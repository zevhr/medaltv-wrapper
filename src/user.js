const axios = require('axios');
module.exports = async (options) => {
    if(!options.apikey) {
        throw new Error(`No API key was supplied, please read the docs.`)
    }

    const user = await axios.get(`https://medal.tv/${options.username}`, {
        headers: { "User-Agent": "medaltv-wrapper" }
    })
    .catch(function(err) {
        throw new Error(`${options.username} doesn't exist or something is wrong on Medal's end.`)
    })
    
    const path = user.request.path
    return path.substring(path.lastIndexOf('/') + 1);
}