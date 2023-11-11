function makeSongUrl(page=1, query=" ",n=10) {
    return `https://www.jiosaavn.com/api.php?p=${page}&q=${query}&_format=json&_marker=0&api_version=4&ctx=web6dot0&n=${n}&__call=search.getResults`
}


exports.makeSongUrl = makeSongUrl;