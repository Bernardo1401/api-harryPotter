const express = require("express");
const router = express.Router();
const wizardController = require("../controllers/wizardController");

router.get("/", wizardController.getAllWizards);
router.get("/:id", wizardController.getWizard);
router.post("/", wizardController.createWizard);
router.delete("/:id", wizardController.deleteWizard);
router.put("/:id", wizardController.updateWizard);

module.exports = router;

