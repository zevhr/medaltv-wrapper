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
<i>Note that the <strong>private</strong> key should be only server sided and not in the public</i>.<br>
A public key restricts some options, but still leaves you with the essentials.</p>

<p>The properties restricted to private keys are:<br>
<strong>cdnUrl (rawFileUrl)<br>
cdnUrlLow (rawFileUrlLowRes)<br>
unbranded (unbrandedFileUrl)</strong></p>

## <p>See the bottom of the readme for all the variables produced by these functions.</p>

# searchClips()
<p>Searches for clips under the specified keyword.</p>

```
const mtv = require('medaltv-wrapper')
async function searchForClip() {
await mtv.searchClips({
    apikey: '',
    keyword: 'your search term',
    limit: 'how many clips you want returned (up to 1000, default is 10)',
    offset: 'how many objects to skip'
    })
}
```
# newestClips()
<p>Searches for a users latest clip.<br>
<strong>NOTE:</strong> For the UID option, do <strong>not</strong> use a username. Use their numeric ID. This can be found by navigating to the profile online.<br>
Head to https://medal.tv/yourusername and the link should be changed to medal.tv/users/id. Copy the ID.</p>

```
const mtv = require('medaltv-wrapper')
async function getNewestClip() {
    await mtv.newestClips({
        apikey: '',
        uid: 'the users id (NOT THEIR USERNAME), see above.',
        limit: 'how many clip objects you want returned.',
        offset: 'how many objects to skip'
    })
}
```
# trendingClips()
<p>Returns the most trending clip on Medal (soon-to-be sortable via category ids)</p>

```
const mtv = require('medaltv-wrapper')
async function getTrendingClip() {
    await mtv.trendingClips({
        apikey: '',
        limit: '1',
        offset: 'how many objects to skip'
    })
}
```

# Variables
<p>.cdnUrl - Returns string | Returns the direct video URL. <strong>Requires private key.</strong><br>
.cdnUrlLow - Returns string | Returns the direct video URL (low res). <strong>Requires private key.</strong><br>
.unbranded - Returns string | Returns the unbranded URL. <strong>Requires private key.</strong><br>
.title - Returns string | Returns the clip title.<br>
.views - Returns string | Returns total view count.<br>
.likes - Returns string | Returns total like count.<br>
.thumb - Returns string | Returns clip thumbnail jpg.<br>
.gameid - Returns string | Returns the games Medal Category ID.<br>
.length - Returns string | Returns the clips length (seconds)<br>
.timestamp - Returns string | Returns a unix timestamp of when the clip was created.<br>
.clipUrl - Returns string | Returns a direct link to a fullscreen clip playing in Medal's player.<br>
.credits - Returns string | Returns user credits.<br>
.iframe - Returns string | Returns HTML iframe code.
