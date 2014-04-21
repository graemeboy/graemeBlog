var path = require("path");
module.exports = {
    db: "mongodb://graemeboy:<password>hypatia",
    root: path.normalize(__dirname + "/../"),
    app: {
        name: "Graeme Boy Blog"
    }
};