const express = require('express');
const router = express.Router();




router.get('/', (req, res) => {
    res.json({ message: "voici les données"})
});

router.post('/', (req, res) => {
    console.log("salut");
    
    // res.json({message: req.body.message})
}); 

router.put('/:id', (req, res) => {
    return 	res.json({message: req.params.id});
});

module.exports = router;
