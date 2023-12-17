const host = "https://www.jiosaavn.com/api.php";

function makeSongUrl(page = 1, query = " ", n = 10) {
  return `${host}?p=${page}&q=${query}&_format=json&_marker=0&api_version=4&ctx=web6dot0&n=${n}&__call=search.getResults`;
}

function makeAlbumUrl(query = " ", page = 1, n = 10) {
  return `${host}?p=${page}&q=${query}&_format=json&_marker=0&api_version=4&ctx=web6dot0&n=${n}&__call=search.getAlbumResults`;
}

function makeAlbumDetailUrl(albumId) {
  return `${host}?__call=content.getAlbumDetails&albumid=${albumId}&api_version=4&_format=json&_marker=0&ctx=web6dot0`;
}

function makeSearchPlaylistUrl(query = " ", page = 1, n = 10) {
  return `${host}?p=${page}&q=${query}&_format=json&_marker=0&api_version=4&ctx=web6dot0&n=${n}&__call=search.getPlaylistResults`;
}

function makePlayListDetailUrl1(playlistId) {
  return `${host}?__call=playlist.getDetails&listid=${playlistId}&api_version=4&_format=json&_marker=0&ctx=web6dot0`;
}

function makeSearchArtistUrl(query = " ", page = 1, n = 10) {
  return `${host}?p=${page}&q=${query}&_format=json&_marker=0&api_version=4&ctx=web6dot0&n=${n}&__call=search.getArtistResults`;
}

function makeArtistListUrl(artistId, page = 0, nSongs = 50, nAlbums = 50) {
  return `${host}?__call=webapi.get&token=${artistId}&type=artist&p=${page}&n_song=${nSongs}&n_album=${nAlbums}&sub_type=songs&more=true&includeMetaTags=0&ctx=web6dot0&api_version=4&_format=json&_marker=0`;
}

function makeAlbumListOfTheYearUrl(language = "telugu", year = 2023) {
  return `${host}?__call=search.topAlbumsoftheYear&api_version=4&_format=json&_marker=0&ctx=wap6dot0&album_year=${year}&album_lang=${language}`;
}

const makeDirectSongUrl = (encryptedMediaUrl) => {
  return `${host}?__call=song.generateAuthToken&url=${encryptedMediaUrl}&bitrate=320&api_version=4&_format=json&ctx=web6dot0&_marker=0`;
};

exports.makeSongUrl = makeSongUrl;
exports.makeAlbumUrl = makeAlbumUrl;
exports.makeAlbumDetailUrl = makeAlbumDetailUrl;
exports.makeSearchPlaylistUrl = makeSearchPlaylistUrl;
exports.makePlayListDetailUrl1 = makePlayListDetailUrl1;
exports.makeSearchArtistUrl = makeSearchArtistUrl;
exports.makeArtistListUrl = makeArtistListUrl;
exports.makeAlbumListOfTheYearUrl = makeAlbumListOfTheYearUrl;
exports.makeDirectSongUrl = makeDirectSongUrl;
