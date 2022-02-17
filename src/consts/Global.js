const { Dimensions } = require("react-native");

module.exports = Object.freeze({
  WIDTH: Dimensions.get("window").width,
  HEIGHT: Dimensions.get("window").height,
  COLOR: {
    ORANGE: "#C50",
    LIGHTBLUE: "#6EA8DA",
    DARKGRAY: "#999",
    DARKBLUE: "#5564BE",
    WHITE: "#fff",
  },
});
