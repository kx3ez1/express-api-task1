let axios = require("axios");
const helper = require("./helper");

const host = helper.host;

const makeRequest = async (url, language) => {
  let cookieData = `DL=english; L=${language}`;
  let response = await axios.get(url, {
    headers: {
      Cookie: cookieData,
    },
  });
  if (response.status !== 200) {
    throw new Error("Error");
  }
  return response.data;
};

const requestTrendingData = async (language = "telugu") => {
  let url = `${host}?__call=webapi.getLaunchData&api_version=4&_format=json&_marker=0&ctx=wap6dot0`;
  return await makeRequest(url, language);
};

const getNewReleasesAlbumsData = async (language = "telugu") => {
  let url = `${host}?__call=content.getAlbums&api_version=4&_format=json&_marker=0&ctx=wap6dot0`;
  return await makeRequest(url, language);
};

exports.requestTrendingData = requestTrendingData;
exports.getNewReleasesAlbumsData = getNewReleasesAlbumsData;
