const path = require('path');

class ContactController{
    static getContact(req, res){
        res.sendFile(path.resolve(__dirname + '/../views/contact.html'))
    }
}

module.exports = ContactController