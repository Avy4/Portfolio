const container = document.querySelector('#bookshelf-grid');
const errorContainer = document.querySelector('#bookshelf-status')
function main() {
    var query = `
        query Query($name: String, $page: Int) {
            User(name: $name) {
                favourites {
                    manga(page: $page) {
                        nodes {
                            coverImage {
                                extraLarge
                            }
                            title {
                                english
                                romaji
                            }
                            siteUrl
                        }
                    }
                }
            }
        }
    `

    var variables = 
    {
        "name": "avy",
        "page": 1
    }

    var url = 'https://graphql.anilist.co',
        options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
            body: JSON.stringify({
                query: query,
                variables: variables
            })
        };

    fetch(url, options).then(handleResponse)
        .then(handleData).then(addElements)
        .catch(handleError);
}

function handleResponse(response) {
    return response.json().then(function (json) {
        return response.ok ? json : Promise.reject(json);
    });
} 

function handleData(data) {
    // console.log(JSON.stringify(data, null, 2));
    // console.log(JSON.stringify(data.data.User.favourites.manga.nodes, null, 2));

    const mangaEntries = [];
    var entries = data.data.User.favourites.manga.nodes;

    //console.log(entries);

    entries.forEach(element => {
        var title = element.title.english != null ? element.title.english : element.title.romaji;
        var coverImage = element.coverImage.extraLarge;
        var siteUrl = element.siteUrl;
        mangaEntries.push(new MangaEntry(title, coverImage, siteUrl));
    });

    // console.log(mangaEntries);

    return mangaEntries;
}

function addElements(mangaEntries) {
    var rawTextHtml = "";
    mangaEntries.forEach(element => {
        rawTextHtml += 
        `
            <a href = "${element.siteUrl}" target="_blank" rel="noopener noreferrer">
                <li class="book-card">
                <div class="book-cover"><img src="${element.coverImage}" alt="${element.title} cover" loading="lazy"></div>
                <div class="book-body">
                    <h3 class="${element.title.length > 28 ? "book-title book-title--long" : "book-title"}" title="${element.title}">${element.title}</h3>

                </div>
                </li>   
            </a>
        `
    })

    container.innerHTML = rawTextHtml;
} 

function handleError(error) {
    container.innerHTML ="<p> Nothing to see here for now! </p>";
    errorContainer.innerHTML = "<p> Ran into a small error! Try Refreshing! </p>";
}


class MangaEntry {
    constructor(title, coverImage, siteUrl) {
        this.title = title;
        this.coverImage = coverImage;
        this.siteUrl = siteUrl;
    }
}

main();