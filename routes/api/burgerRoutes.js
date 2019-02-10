const router = require("express").Router();
const burgersController = require("../../controllers/burger_controller.js");

// define API routes

// when user hits /api/burgers
router
  .route("/")
  .get(burgersController.selectAll)
  .post(burgersController.createBurger);


// when user hits /api/burgers/:id
router
  .route("/:id")
  .get(burgersController.findById)
  .put(burgersController.updateBurger)
  .delete(burgersController.deleteBurger);

module.exports = router;