const express = require('express');
const { getItemsController, addItemsController, getItemsDetailsController } = require('../controllers/foodController');

const foodRouter = express.Router();

foodRouter.get('/getItems',getItemsController);

foodRouter.post('/addItems',addItemsController)

foodRouter.get('/getItems/:id',getItemsDetailsController)

module.exports = foodRouter;