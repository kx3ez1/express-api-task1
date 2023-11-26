function makeSongUrl(page=1, query=" ",n=10) {
    return `https://www.jiosaavn.com/api.php?p=${page}&q=${query}&_format=json&_marker=0&api_version=4&ctx=web6dot0&n=${n}&__call=search.getResults`
}


const makeDirectSongUrl = (encryptedMediaUrl) => {
    return `https://www.jiosaavn.com/api.php?__call=song.generateAuthToken&url=${encryptedMediaUrl}&bitrate=320&api_version=4&_format=json&ctx=web6dot0&_marker=0`
}


exports.makeSongUrl = makeSongUrl;
exports.makeDirectSongUrl = makeDirectSongUrl;