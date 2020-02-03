const pModel = require("./prisonersModel");
const router = require("express").Router();

router.get("/", (req, res) => {
  pModel
    .find()
    .then(ret => {
      res.status(200).json(ret);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ err: "problem getting prisoners" });
    });
});

// get by id
router.get("/prisoners/:id", (req, res) => {
  const { id } = req.params;
  pModel
    .findById(id)
    .then(prisoner => {
      prisoner.prisoner_availability = Boolean(prisoner.prisoner_availability);
      res.status(200).json(prisoner);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ err: "problem getting prisoner" });
    });
});

// get by prison id
router.get("/:id/prisoners", (req, res) => {
  const { id } = req.params;
  pModel
    .findByPrison(id)
    .then(prisoner => {
      prisoner.prisoner_availability = Boolean(prisoner.prisoner_availability);
      res.status(200).json(prisoner);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ err: "problem getting prisoner" });
    });
});

module.exports = router;
