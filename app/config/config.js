var path = require("path");
module.exports = {
    //db: "mongodb://localhost/graemeboy",
    //db: 'mongodb://graeme:12345@oceanic.mongohq.com:10025/app24397758',
    db: 'mongodb://root:root@oceanic.mongohq.com:10065/app23251161',
    root: path.normalize(__dirname + "/../"),
    app: {
        name: "Graeme Boy Blog"
    }
};