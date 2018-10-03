// Libs
const fs = require('fs');
const path = require("path");

// Controller
const PhoneController = {

    find: function (req, res) {
        const phones = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../data/phones.json'), 'utf8'));
        res.status(200).json({ phones });
    },

    findOne: function (req, res) {
        const phones = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../data/phones.json'), 'utf8'));
        let phone
        phones.forEach((mayPhone) => {
            if(mayPhone.id == req.params.id_phone)
            phone = mayPhone
        })
        if(phone != null) {
            res.status(200).json(phone);
        } else {
            res.status(404).json({'error': 'phone not found'});
        }
        
    },

};

module.exports = PhoneController;
