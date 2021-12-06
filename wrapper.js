//////////////////////////////////////
//      Medal.tv API Wrapper        //
//          By Awexxx               //
//////////////////////////////////////

var k = document.querySelectorAll("[data-medal-key]");
this.apiKey = k[0].getAttribute("data-medal-key")

// Medal Trending Element
if (document.querySelectorAll("[data-medal-trending]").length) {
    const clipElement = document.querySelectorAll("[data-medal-trending]");
    var catName = clipElement[0].getAttribute("data-medal-trending")

    if(!catName) console.error(`No category name was defined`)
    else {
        fetchCategoryId(catName.toLowerCase()).then(function(category) {
            fetch(`https://developers.medal.tv/v1/trending?categoryId=${category.categoryId}&limit=1&offset=0`, {
                headers: { "Content-Type": "application/json", "authorization": this.apiKey }
            }).then(async function(response) {
                var d = await response.json();
                clipElement[0].innerHTML = d.contentObjects[0].embedIframeCode
            })
        })
    }
}

async function fetchCategoryId(category) {
    var cat = await fetch(`https://developers.medal.tv/v1/categories`, {
        headers: { "Content-Type": "application/json", "authorization": this.apiKey }
    }).then(response => response.json());

    var ind = cat.findIndex(x => x.slug === category);
    if (ind !== -1) return cat[ind];
    else console.error('Category "' + category + '" does not exist')
}

