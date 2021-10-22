"use strict";

const express = require("express");
const { clothes } = require("../../models");

const router = express.Router();

router.get("/", getAllClothes); //
router.get("/:id", getOneClothes); //define param by :
router.post("/", createClothes);
router.put("/:id", updateClothes);
router.delete("/:id", deleteClothes);

async function getOneClothes(request, response) {
  const id = request.params.id;

  const foundClothes = await clothes.findByPk(parseInt(id));

  response.status(200);
  response.send(foundClothes);
}

async function getAllClothes(request, response, next) {
  try {
    const foundAllClothes = await clothes.findAll(); //returns all rows
    response.status(200);
    response.send(foundAllClothes);
  } catch (e) {
    next(e);
  }
}

async function createClothes(request, response, next) {
  try {
    const newClothes = await clothes.create({
      name: request.body.name,
      size: request.body.size,
    });

    response.status(201); // 201= creation success
    response.send(newClothes);
  } catch (e) {
    next(e);
  }
}

async function updateClothes(request, response, next) {
  try {
    const updatedClothes = await clothes.update({
      name: request.body.name,
      size: request.body.size,
    });

    response.status(200);
    response.send(updatedClothes);
  } catch (e) {
    next(e);
  }
}

async function deleteClothes(request, response, next) {
  try {
    const deletedClothes = await clothes.destroy(req.params.id);

    response.status(200);
    response.send(deletedClothes);
  } catch (e) {
    next(e);
  }
}

module.exports = router;
// {
//     getAllClothes,
//     getOneClothes,
//     createClothes,    //under same umbrella
//     updateClothes,
//     deleteClothes
// }
