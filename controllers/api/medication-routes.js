const router = require('express').Router();
const { Meds } = require('../../models');

router.post('/', async (req, res) => {
    try {
        req.body['user_id'] = req.session.user_id
        console.log(req.body)
        let medData = await Meds.create(req.body)
        res.status(200).json(medData)
      } catch (err) {
        res.status(400).json(err);
      }
})

router.get('/', async (req, res) => {
  res.end('this is the medication api page. post here to add a medication.')
})

module.exports = router