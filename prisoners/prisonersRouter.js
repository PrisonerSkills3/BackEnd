const pModel = require('./prisonersModel');
const router = router('express').Router();

router.get('/', (req, res) => {
    pModel.find()
        .then(ret => {
            res.status(200).json(ret);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({err:'problem getting prisoners'});
        })
});

// get by id
router.get('/:id', (req,res) => {
    const { id } = req.params;
    pModel.findById()
    .then(prisoner => {
        res.status(200).json(prisoner);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({err: 'problem getting prisoner'});
    })
})


// get by prison id


module.exports = router;

