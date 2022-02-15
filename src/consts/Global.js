const { Dimensions } = require("react-native");

module.exports = Object.freeze({
  WIDTH: Dimensions.get("window").width,
  HEIGHT: Dimensions.get("window").height,
});
