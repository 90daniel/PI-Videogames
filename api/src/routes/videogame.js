const { Router } = require('express');
require('dotenv').config();
const { videogame } = require('../controllers')
const {Videogame, Genre} = require('../db.js')

const Router = Router();

