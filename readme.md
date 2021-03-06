## Medal.tv Javascript API Wrapper
This wrapper utilizes [Medal.tv's Developer API](https://docs.medal.tv) to return clips to your application!  

![NPM](https://nodei.co/npm/medaltv-wrapper.png?downloads=true&downloadRank=true&stars=true)

### NEW!
Categories are now searched by their name! Use game names in categoryId fields now.

### Usage
```
npm i medaltv-wrapper
```

### How do I use this?
It's simple! Call a function, supply a couple parameters, bam! You're done!  
You can see below for all the functions. It's expected you know how to work JSON data and basic Javascript.  
You will also need a [Medal API Key](https://docs.medal.tv/api#generate-an-api-key) in order to utilize this. Use a public one if this is a public app and visa versa.  
  
If you're looking for a vanilla javascript version of this, please see the [VJS branch](https://github.com/awexxx/medaltv-wrapper/tree/vjs).
  
#### searchClips - Search via a keyword
```
const { searchClips } = require('medaltv-wrapper');

searchClips({
    apikey: `pub_xxxxxxxxxxxxxxxxxxxxxxx`,
    limit: '1',
    offset: '0',
    keyword: 'flip reset'
})
.then(clip => console.log(clip))
```

#### latestClips - Latest clips from a category or user
```
const { latestClips } = require('medaltv-wrapper');

latestClips({
    apikey: `pub_xxxxxxxxxxxxxxxxxxxxxxx`,
    limit: '1',
    offset: '0',
    categoryId: 'fortnite',
    userid: '215577'
})
.then(clip => console.log(clip))
```

#### trendingClips - Trending clips on the Medal.tv platform
```
const { trendingClips } = require('medaltv-wrapper');

trendingClips({
    apikey: `pub_xxxxxxxxxxxxxxxxxxxxxxx`,
    limit: '1',
    offset: '0',
    categoryId: `fortnite`
})
.then(clip => console.log(clip))
```

#### fetchCategories - Fetch Medal category data
```
const { fetchCategories } = require('medaltv-wrapper');

fetchCategories({
    apikey: `pub_xxxxxxxxxxxxxxxxxxxxxxx`,
    categoryId: `minecraft`
})
.then(category => console.log(category))
```

#### fetchUser - Fetch a usernames Medal UID
This function was **deprecated** due to Medal changing user URL structures.  
To get your category ID, follow these steps:
- Open Medal on the web and navigate to the profile you're using.
- Click the 3 dots on the clip modal and select **Download..**
- The url should look like `https://cdn.medal.tv/[id]/[quality]-xxxxxxxxx.mp4`. You'll want the string of numbers in the middle.
