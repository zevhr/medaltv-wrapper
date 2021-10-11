# <p align="center"><a href="https://medal.tv/">Medal.tv</a> Rest API Wrapper - Node.js</p>
<p align="center"
<a href="https://npmjs.com/package/medaltv-wrapper"><img src="https://nodei.co/npm/medaltv-wrapper.png?downloads=true&downloadRank=true&stars=true"></a>
</p>
<p align="center">This project allows you to easily grab and sort through the data provided by <a href="https://medal.tv">Medal.tv's</a> API. 

# Installation
```
npm i medaltv-wrapper
```

# Usage
<p>First, you'll need an API key from the <a href="https://docs.medal.tv/api#generate-an-api-key">Medal.tv Developer Docs</a>.<br>
There are two different keys you can get. One is a private key, which gives you more options to sort through.<br>
<i>Note that the <strong>private</strong> key should be only server sided and not in the public</i>.</p>

<p>All properties can be accessed by <strong>.data</strong> using normal JSON syntax (ex, if you need the title: mtv.data[0].contentTitle). See it more in depth below.</p>

<p>If you want to customize and change the clips you're getting, use offset!</p>

# One last thing!
<p>To learn how to find Category IDs, please see the bottom of this readme :)</p>

# searchClips()
<p>Searches for clips under the specified keyword.</p>

```
const mtv = require('medaltv-wrapper')
async function searchForClip() {
await mtv.searchClips({
    apikey: '',
    keyword: 'your search term',
    limit: 'how many clips you want returned (up to 1000, default is 1)',
    offset: 'how many objects to skip (default is 0)',
    random: boolean (if you want a random clip to be returned)
    })

    console.log(mtv.data)
}
```
# latestClips()
<p>Searches for a users/categories latest clip.<br>
<strong>NOTE:</strong> For the UID option, do <strong>not</strong> use a username. Use their numeric ID. This can be found by navigating to the profile online.<br>
Head to https://medal.tv/yourusername and the link should be changed to medal.tv/users/your-id. Copy the ID.</p>

```
const mtv = require('medaltv-wrapper')
async function getNewestClip() {
    await mtv.latestClips({
        apikey: '',
        uid: 'the users id (NOT THEIR USERNAME), see above.',
        limit: 'how many clips you want returned (up to 1000, default is 1)',
        offset: 'how many objects to skip (default is 0)',
        categoryId: 'game you want to sift through. see Notices below for more info! (default is none)',
        random: boolean (if you want a random clip to be returned)
    })
}
```
# trendingClips()
<p>Returns the most trending clip. Can be used with or without categoryId.</p>

```
const mtv = require('medaltv-wrapper')
async function getTrendingClip() {
    await mtv.trendingClips({
        apikey: '',
        limit: 'how many clips you want returned (up to 1000, default is 1)',
        offset: 'how many objects to skip (default is 0)',
        categoryId: 'game you want to sift through. see Notices below for more info! (default is none)'
    })
}
```

# Help Accessing Content
<p>In order to access content, you need to tell your app what to look for.<br>
An example object looks like this:</p>

```
[
    {
        contentId: 'cid58407840',
        rawFileUrl: 'not_authorized',
        rawFileUrlLowRes: 'not_authorized',
        unbrandedFileUrl: 'not_authorized',
        contentTitle: 'HE PICKED UP A LLAMA LMAO | MedalSMP',
        contentViews: 57,
        contentLikes: 2,
        contentThumbnail: 'https://cdn.medal.tv/215577/thumbnail-58407840-360p.jpg',
        categoryId: 17,
        videoLengthSeconds: 15,
        createdTimestamp: 1626429133000,
        directClipUrl: 'https://medal.tv/clip/58407840/dgbos8JLqrP3n2ho',
        embedIframeCode: "<iframe width='640' height='360' src='https://medal.tv/clip/58407840/sPbIcf1lvX78uHdu?loop=1&autoplay=1&muted=1&cta=1' frameborder='0' allow='autoplay' allowfullscreen class='medal-clip' id='cid58407840'></iframe>",
        credits: 'Credits to lulawex (https://medal.tv/users/215577)' 
    }
]
```
<p>For example, if you needed to access the title of the clip, you'd add <strong>mtv.data[0].contentTitle</strong> (Replace mtv with whatever you defined the module as), and boom!<br> You now have your clip title! You can change contentTitle to whatever else is listed in that object, like <strong>categoryId</strong>, for example.</p>

<p>If you set your limit to something more than 1, you'll need to set the .data[0] to the object you need. For reference: the first object is .data[0], the next is .data[1] and so on.</p> 

# Notices/FAQ
## How do I find a games category ID?
<p>Head to <a href="https://jsoneditoronline.org/#left=url.https%3A%2F%2Fapi-v2.medal.tv%2Fcategories">this link</a>! When you're there, click on the left box (with all the text) and press CTRL + F on your keyboard.<br> Search for the game title you want, and look for the <strong>categoryId</strong> to the left of it!</p>

## My username isn't working for latestClip!
<p>Don't use your normal username! Navigate to your profile on the web and look at the address bar (it will look something like https://medal.tv/users/[numbers]).<br>Copy the numbers after the last / and use those opposed to your username!</p>