const pModel = require('./prisonersModel');
const router = require('express').Router();


router.get('/', (req, res) => {
    pModel.find()
        .then(ret => {
            // res.status(200).json(ret);
            return ret;
        })
        .then( async prisons => {
           let payload = [];
           
                payload = await prisons.map(prison => {
                    let prisonersArray  = [];
                    pModel.findByPrison(prison.id)
                    .then(prisoner => {
                        console.log('prisoner', prisoner);
                        prisonersArray = [ ...prisoner ];
                    })
                    .catch(err => {
                        console.log(err);
                    })    
                        return {
                            ...prison,
                            prisoners: prisonersArray,
                        }   

                });
                    res.status(200).json(payload);
            })
            .catch(err => {
                console.log(err);
                res.status(500).json({err:'problem getting prisoners'});
            })
            
        })
        
    

// get by id
router.get('/prisoners/:id', (req,res) => {
    const { id } = req.params;
    pModel.findById(id)
    .then(prisoner => {
        res.status(200).json(prisoner);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({err: 'problem getting prisoner'});
    })
})


// get by prison id
router.get('/:id/prisoners', (req,res) => {
    const { id } = req.params;
    pModel.findByPrison(id)
        .then( prisoner => {
            res.status(200).json(prisoner);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({err: 'problem getting prisoner'});
        })
});


module.exports = router;

