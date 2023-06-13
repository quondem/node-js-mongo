const express = require('express')
const router = express.Router()
const createPath = require('../helpers/create-path')

router.get('/contacts', (req, res) => {
    const title = 'Contacts';
    const contacts = [
        { name: 'VK', link: 'https://vk.com/sasuke2281337' }, ,
        { name: 'GitHub', link: 'http://github.com/quondem' },
    ];
    res.render(createPath('contacts'), { contacts, title });
});

module.exports = router