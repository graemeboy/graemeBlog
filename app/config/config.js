var path = require("path");
module.exports = {
    db: "mongodb://localhost/graemeboy",
    root: path.normalize(__dirname + "/../"),
    app: {
        name: "Graeme Boy Blog"
    }
};