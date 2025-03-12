const express = require('express');
const router = express.Router()


router.get('/', (req,res) => {
    res.send('Shop home page')
})

router.get('/about',(req,res) => {
    res.send('about shop')
})

module.exports = router;