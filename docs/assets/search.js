var $ = document.getElementById.bind(document)
var resCount = 0;
var idx = lunr(function () {
    this.ref('url')
    this.field('content')

    documents.forEach(function (doc) {
        this.add(doc)
    }, this)
})
document.addEventListener("DOMContentLoaded", (_event) => {
    searchNow();
})
function searchNow() {
    var url_string = window.location.href;
    var url = new URL(url_string);
    const searchString = url.searchParams.get("keys");
    console.log(searchString)
    $('s-k').textContent = searchString;
    $('search-input').value = searchString;
    var result = idx.search(searchString)
    // method (return element > 0). 
    $('s-n').textContent = result.length
    if (result.length === 1) {
        $('pl').textContent = ""
    }
    else if (result.length === 0) {
        $('s-n').textContent = No
        $('pl').textContent = "s"
    }
    else{
        $('pl').textContent = "s"
    }
    for (i = 0; i < result.length; i++) {
        var found = documents.find(function (element) {
            return element.url === result[i].ref;
        });
        generateResultElement(found.url, found.title, found.image, found.excerpt)
    }

}

function generateResultElement(ref, titleText, imgRef, content) {
    var card = document.createElement("li");
    var img = document.createElement("img");
    var title = document.createElement("div");

    var body = document.createElement("div");
    var link = document.createElement("a");

    body.style.color = "black"
    link.style.textDecoration = "none"
    card.style.display = "inline-block"
    link.href = ref;
    img.src = imgRef;
    img.className = "grid-post-image"
    title.textContent = titleText;
    title.className = "grid-post-head"
    card.style.overflow = "hidden"
    body.style.overflow = "hidden"

    body.textContent = content;
    img.style.marginRight = "10px";

    link.appendChild(img);
    link.appendChild(title);
    link.appendChild(body);
    card.appendChild(link)
    $('search-results').appendChild(card)
}
function readJson() {
    // http://localhost:8080
    fetch('/Reading/api/file')
        .then(response => {
            if (!response.ok) {
                throw new Error("HTTP error " + response.status);
            }
            return response.json();
        })
        .then(json => {
            var indexes = json;
            console.log(indexes)
        })
        .catch(function () {
            this.dataError = true;
        })
}