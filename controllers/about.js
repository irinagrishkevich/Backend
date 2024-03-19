const path = require('path');

class AboutController{
    static getAbout(req, res){
        res.sendFile(path.resolve(__dirname + '/../views/about.html'))
    }
}

module.exports = AboutController