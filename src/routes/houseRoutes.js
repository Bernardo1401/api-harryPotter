const express = require("express");
const router = express.Router();
const houseController = require("../controllers/houseController");

/**
 * @swagger
 * tags:
 *  name: Houses
 *  description: Gerenciamento de casas
 */

/**
 * @swagger
 * /api/houses:
 *   get:
 *     summary: Lista todos os itens
 *     tags: [Houses]
 *     responses:
 *       200:
 *         description: Lista retornada com sucesso
 */

/**
 * @swagger
 * /api/houses/{id}:
 *   get:
 *     summary: Busca item por ID
 *     tags: [Houses]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Item encontrado
 *       404:
 *         description: Item não encontrado
 */

/**
 * @swagger
 * /api/houses:
 *   post:
 *     summary: Cria um novo item
 *     tags: [Houses]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nome:
 *                 type: string
 *               descricao:
 *                 type: string
 *     responses:
 *       201:
 *         description: Item criado com sucesso
 */

/**
 * @swagger
 * /api/houses/{id}:
 *   put:
 *     summary: Atualiza um item
 *     tags: [Houses]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nome:
 *                 type: string
 *               descricao:
 *                 type: string
 *     responses:
 *       200:
 *         description: Item atualizado com sucesso
 */


/**
 * @swagger
 * /api/houses/{id}:
 *   delete:
 *     summary: Deleta um item
 *     tags: [Houses]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Item deletado com sucesso
 */



router.get("/", houseController.getAllHouses);
router.get("/:id", houseController.getHouse);
router.post("/", houseController.createHouse);
router.delete("/:id", houseController.deleteHouse);
router.put("/:id", houseController.updateHouse);

module.exports = router;
