const { Router } = require('express');
require('dotenv').config();
const { videogame } = require('../controllers')
const { Videogame, Genre } = require('../db.js');
const router = require('./genres');

const Router = Router();

router.get('/:idVideogame', async (req, res, next) => {
    const { idVideogame } = req.params //ID received by params
    let data = await videogame(idVideogame)
    try {
        data ? res.send(data) : res.status(404).send('El id ingresado no coincide con un videojuego en particular')
    } catch (e) {
        next(e)
    }
})
