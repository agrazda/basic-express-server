"use strict";

const express = require("express");
const { food } = require("../../models");

const router = express.Router();

router.get("/", getAllFood); //
router.get("/:id", getOneFood); //define param by :
router.post("/", createFood);
router.put("/:id", updateFood);
router.delete("/:id", deleteFood);

async function getOneFood(request, response) {
  const id = request.params.id;

  const foundFood = await food.findByPk(parseInt(id));

  response.status(200);
  response.send(foundFood);
}

async function getAllFood(request, response, next) {
  try {
    const foundAllFood = await food.findAll(); //returns all rows
    response.status(200);
    response.send(foundAllClothes);
  } catch (e) {
    next(e);
  }
}

async function createFood(request, response, next) {
  try {
    const newFood = await food.create({
      type: request.body.type,
      calories: request.body.calories,
    });

    response.status(201); // 201= creation success
    response.send(newFood);
  } catch (e) {
    next(e);
  }
}

async function updateFood(request, response, next) {
  try {
    const updatedFood = await food.update({
      name: request.body.name,
      size: request.body.size,
    });

    response.status(200);
    response.send(updatedFood);
  } catch (e) {
    next(e);
  }
}

async function deleteFood(request, response, next) {
  try {
    const deletedFood = await food.destroy(req.params.id);

    response.status(200);
    response.send(deletedfood);
  } catch (e) {
    next(e);
  }
}

module.exports = router;
