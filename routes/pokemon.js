import express from 'express'
import Pokemon from '../models/Pokemon.js';

const router = new express.Router()

//returns all pokemon added to the database
router.get('/', async (req, res, next) => {
    try {
        const pokemon = await Pokemon.find();
        res.send(pokemon)
      } catch (error) {
        console.log(error);
        next(error);
      }
})

//posts a new pokemon entry
router.post('/', async (req, res, next) => {
    try{
        const pokemon = await Pokemon.create(req.body)
        res.send(pokemon)
    } catch (error) {
        console.log(error);
        next(error);
    }
})

//get routes for names and dex numbers, different forms of pokemon share dex numbers, so it's best to have an option for names too
router.get('/number/:dex', async (req, res, next) => {
    try{
        const pokemon = await Pokemon.find({dexNumber: req.params.dex});
        res.send(pokemon);
    } catch (error) {
        console.log(error);
        next(error);
    }
})

router.get('/name/:name', async (req, res, next) => {
    try{
        const pokemon = await Pokemon.find({name: req.params.name});
        res.send(pokemon);
    } catch (error) {
        console.log(error);
        next(error);
    }
})

//delete routes
router.delete('/number/:dex', async (req, res, next) => {
    try {
        const deletePoke = await Pokemon.findOneAndDelete({dexNumber: req.params.dex});

        res.send({
            deletedPokemon: deletePoke,
            message: 'Pokemon Deleted!'
        })
    } catch (error) {
        console.log(error);
        next(error);
    }
})

router.delete('/name/:name', async (req, res, next) => {
  try {
      const deletePoke = await Pokemon.findOneAndDelete({name: req.params.name});

      res.send({
          deletedPokemon: deletePoke,
          message: 'Pokemon Deleted!'
      })
  } catch (error) {
      console.log(error);
      next(error);
  }
})

//put routes
router.put("/number/:dex", async (req, res, next) => {
    try {
      const { body } = req;
      const updatedPoke = await Pokemon.findOneAndUpdate({dexNumber: req.params.dex}, body, {
        new: true,
      });
      if (updatedPoke) {
        res.json({ updatedPoke });
      } else {
        res.json({ message: `Error updating pokemon: ${req.params.dex}` });
      }
    } catch (error) {
      next(error);
    }
  });

  router.put("/name/:name", async (req, res, next) => {
    try {
      const { body } = req;
      const updatedPoke = await Pokemon.findOneAndUpdate({name: req.params.name}, body, {
        new: true,
      });
      if (updatedPoke) {
        res.json({ updatedPoke });
      } else {
        res.json({ message: `Error updating pokemon: ${req.params.dex}` });
      }
    } catch (error) {
      next(error);
    }
  });

export default router;