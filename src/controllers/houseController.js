const houseModel = require("../models/houseModel");

const getAllHouses = async (req, res) => {
    try {
        const houses = await houseModel.getHouses();
        res.json(houses);
    } catch (error) {
        res.status(500).json({ message: "Erro ao buscar casas." });
    }
};

const getHouse = async (req, res) => {
    try {
        const house = await houseModel.getHouseById(req.params.id);
        if (!house) {
            return res.status(404).json({ message: "Casa não encontrada." });
        }
        res.json(house);
    } catch (error) {
        res.status(500).json({ message: "Erro ao buscar casa." });
    }
};

const createHouse = async (req, res) => {
    try {
        const { name, founder } = req.body;
        const newFounder = await houseModel.createHouse(name, founder);
        res.status(201).json(newFounder);
    } catch (error) {
        res.status(500).json({ message: "Erro ao criar a casa." });
    }
};

const deleteHouse = async (req, res) => {
    try {
        const message = await houseModel.deleteHouse(req.params.id);
        res.json(message);
    } catch (error) {
        res.status(500).json({ message: "Erro ao deletar casa." });
    }
};

const updateHouse = async (req, res) => {
    try {
        const { name, founder } = req.body;
        const updateHouse = await houseModel.updateHouse(req.params.id, name, founder);
        if (!updateHouse) {
            return res.status(404).json({ message: "casa não encontrada." });
        }
        res.json(updateHouse);
    } catch (error) {
        res.status(500).json({ message: "Erro ao atualizar casa." });
    }
};


module.exports = { getAllHouses, getHouse, createHouse, deleteHouse, updateHouse };
