//////////////////////////////////////
//      Medal.tv API Wrapper        //
//          By Awexxx               //
//////////////////////////////////////

const searchClips = require('./func/search')
const newestClips = require('./func/newest')
const trendingClips = require('./func/trending')

module.exports = { searchClips, newestClips, trendingClips }