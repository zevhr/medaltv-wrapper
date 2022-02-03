//////////////////////////////////////
//      Medal.tv API Wrapper        //
//          By Awexxx               //
//////////////////////////////////////

// Files
var searchClips = require('./src/search');
var trendingClips = require('./src/trending');
var latestClips = require('./src/latest');
var fetchCategories = require('./src/category');

module.exports = { searchClips, trendingClips, latestClips, fetchCategories };