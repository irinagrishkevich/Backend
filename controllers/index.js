const path = require('path');

class IndexController{
    static getIndex(req, res){
        res.sendFile(path.resolve(__dirname + '/../views/index.html'))
    }
}

module.exports = IndexController