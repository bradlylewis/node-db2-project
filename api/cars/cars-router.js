// DO YOUR MAGIC
const express = require('express');
const Car = require('./cars-model');
const { 
    checkCarId,
    checkCarPayload,
    checkVinNumberValid,
    checkVinNumberUnique,
} = require('./cars-middleware')

const router = express.Router();

router.get('/', async (req, res, next) => {
  try {
    const all = await Car.getAll()
    res.json(all)
  } catch (err) {
    next(err)
  }
});

router.get('/:id', checkCarId, async (req, res, next) => {
    res.json(req.car)
});

router.post('/', 
checkCarPayload,
checkVinNumberValid,
checkVinNumberUnique, async (req, res, next) => {
    // try {
        res.json(`posting new car`)

    // } catch (err) {
    //     next(err)
    // }
});

module.exports = router;